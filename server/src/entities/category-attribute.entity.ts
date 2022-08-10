import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { AttributeKey } from './attribute-key.entity';
import { Category } from './category.entity';
import { CustomEntity } from './custom.entity';

@Entity({
  name: 'category_attribute'
})
export class CategoryAttribute extends CustomEntity {
  @PrimaryColumn({
    name: 'category_id',
    type: 'integer'
  })
  categoryId: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @PrimaryColumn({
    name: 'attributekey_id',
    type: 'integer'
  })
  attributeKeyId: number;

  @ManyToOne(() => AttributeKey, { eager: true })
  @JoinColumn({ name: 'attributekey_id', referencedColumnName: 'id' })
  attributeKey: AttributeKey;
}
