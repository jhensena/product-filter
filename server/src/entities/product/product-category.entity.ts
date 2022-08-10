import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Category, Product } from '~/entities';
import { CustomEntity } from '../custom.entity';

@Entity({
  name: 'product_category'
})
export class ProductCategory extends CustomEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'integer'
  })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @PrimaryColumn({
    name: 'category_id',
    type: 'integer'
  })
  categoryId: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}
