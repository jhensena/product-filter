import { ManufacturerEntity } from '../manufacturer';
import { ProductAttributeEntity } from './product-attribute.entity';

export class ProductEntity {
  id: number;
  displayName: string;
  itemNumber: string;
  imageUrl: string;
  price: string;
  manufacturer: ManufacturerEntity;
  attributes: Array<ProductAttributeEntity>;
}
