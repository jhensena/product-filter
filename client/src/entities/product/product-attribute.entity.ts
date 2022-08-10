import { AttributeKeyEntity } from '../attribute';
import { ProductEntity } from './product.entity';

export class ProductAttributeEntity {
  id: number;
  productId: number;
  product: ProductEntity;
  attributeKeyId: number;
  attributeKey: AttributeKeyEntity;
  attributeValue: string;
}
