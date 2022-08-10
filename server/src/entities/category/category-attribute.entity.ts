import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { AttributeKey, Category } from '~/entities';
import { CustomEntity } from '../custom.entity';

@Entity({
  name: 'category_attribute'
})
export class CategoryAttribute extends CustomEntity {
  @PrimaryColumn({
    name: 'category_id',
    type: 'integer'
  })
  categoryId: number;

  @ManyToOne(() => Category)
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
