import { CategoryAttributeEntity } from './category-attribute.entity';

export class CategoryEntity {
  id: number;
  displayName: string;
  attributes: Array<CategoryAttributeEntity>;
}
