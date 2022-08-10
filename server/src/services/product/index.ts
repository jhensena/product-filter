import { In, Repository } from 'typeorm';
import { manager } from '~/datasources';
import { AttributeKey, CategoryAttribute, Manufacturer, Product, ProductAttribute } from '~/entities';
import { ProductResponse } from '~/global';

class ProductService {
  private productRepository: Repository<Product>;
  private manufacturerRepository: Repository<Manufacturer>;
  private categoryAttributeRepository: Repository<CategoryAttribute>;
  private productAttributeRepository: Repository<ProductAttribute>;

  constructor() {
    this.productRepository = manager.getRepository(Product);
    this.manufacturerRepository = manager.getRepository(Manufacturer);
    this.categoryAttributeRepository = manager.getRepository(CategoryAttribute);
    this.productAttributeRepository = manager.getRepository(ProductAttribute);
  }

  async getAll(
    categoryId: number,
    attributesKeys?: Array<string>,
    manufacturerIds?: Array<string>
  ): Promise<ProductResponse> {
    // Product query builder
    const productQb = this.productRepository
      .createQueryBuilder('p')
      .innerJoinAndSelect('p.manufacturer', 'm')
      .leftJoinAndSelect('p.attributes', 'pa')
      .leftJoinAndSelect('pa.attributeKey', 'pak')
      .leftJoinAndSelect('p.manufacturers', 'pm');

    // Filter products based on selected manufacturers or attributes
    if (attributesKeys?.length || manufacturerIds?.length) {
      productQb.where(qb => {
        const subQuery = qb.subQuery().select('p2.id').from('product', 'p2');

        if (attributesKeys?.length) {
          subQuery.innerJoin('p2.attributes', 'pa2');
          attributesKeys.forEach(attributesKey => {
            subQuery.andWhere('pa2.attributeValue = :attributesKey', { attributesKey });
          });
        }

        if (manufacturerIds?.length) {
          subQuery.innerJoin('p2.manufacturer', 'pm2');
          manufacturerIds.forEach(id => {
            subQuery.andWhere('pm2.id = :id', { id });
          });
        }

        return `p.id IN ${subQuery.getQuery()}`;
      });
    }

    const [products, categoryAttributes, manufacturers] = await Promise.all([
      productQb.getMany(),
      this.categoryAttributeRepository.find({ where: { categoryId } }),
      this.manufacturerRepository.find()
    ]);

    const productAttributes = await this.productAttributeRepository.find({
      where: { attributeKeyId: In(categoryAttributes.map(({ attributeKeyId }) => attributeKeyId)) }
    });

    // Setup product attributes, remove duplicates, sort and decide `enabled`
    const getProductAttributes = (attributeKeyId: number) =>
      productAttributes
        .filter(
          (pa1, idx, attrs) =>
            pa1.attributeKeyId === attributeKeyId &&
            attrs.findIndex(pa2 => pa2.attributeValue === pa1.attributeValue) === idx
        )
        .map(
          pa =>
            ({
              ...pa,
              enabled: !!products
                .map(({ attributes }) => attributes)
                .flat()
                .find(({ attributeValue }) => pa.attributeValue === attributeValue)
            } as ProductAttribute & { enabled: boolean })
        )
        .sort((pa1, pa2) =>
          isNaN(+pa1.attributeValue)
            ? pa1.attributeValue.localeCompare(pa2.attributeValue)
            : +pa1.attributeValue - +pa2.attributeValue
        );

    let attributes = categoryAttributes.reduce<ProductResponse['attributes']>(
      (attrs, { attributeKey, attributeKeyId }) => {
        attrs.push({ categoryAttribute: attributeKey, productAttributes: getProductAttributes(attributeKeyId) });
        return attrs;
      },
      []
    );

    // Add manufacturers in the filter attributes
    attributes = [
      {
        categoryAttribute: { displayName: 'Manufacturers' } as AttributeKey,
        productAttributes: manufacturers
          .map(
            m =>
              ({ ...m, enabled: !!products.find(({ manufacturerId }) => manufacturerId === m.id) } as Manufacturer & {
                enabled: boolean;
              })
          )
          .sort((m1, m2) => m1.displayName.localeCompare(m2.displayName))
      },
      ...attributes
    ];

    return {
      products,
      attributes
    };
  }
}

export const productService = new ProductService();
