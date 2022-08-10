import { AttributeKeyEntity } from '../attribute';
import { CategoryEntity } from './category.entity';

export class CategoryAttributeEntity {
  id: number;
  categoryId: number;
  category: CategoryEntity;
  attributeKeyId: number;
  attributeKey: AttributeKeyEntity;
}
