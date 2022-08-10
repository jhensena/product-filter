import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { AttributeKey } from './attribute-key.entity';
import { CustomEntity } from './custom.entity';
import { Product } from './product.entity';

@Entity({
  name: 'product_attribute'
})
export class ProductAttribute extends CustomEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'integer'
  })
  productId: number;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @PrimaryColumn({
    name: 'attributekey_id',
    type: 'integer'
  })
  attributeKeyId: number;

  @ManyToOne(() => AttributeKey, { eager: true })
  @JoinColumn({ name: 'attributekey_id', referencedColumnName: 'id' })
  attributeKey: AttributeKey;

  @Column({
    name: 'attribute_value',
    type: 'character varying'
  })
  attributeValue: string;
}
