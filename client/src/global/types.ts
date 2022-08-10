import { AttributeKeyEntity, ManufacturerEntity, ProductAttributeEntity, ProductEntity } from '../entities';

export type AnyObject = {
  [key: string]: any;
};

export type Filter =
  | Array<string | number>
  | Record<string | number, string | number | undefined | Array<string | number>>;

export interface ProductResponse {
  products: Array<ProductEntity>;
  attributes: Array<{
    categoryAttribute: AttributeKeyEntity;
    productAttributes: Array<(ProductAttributeEntity | ManufacturerEntity) & { enabled: boolean }>;
  }>;
}
