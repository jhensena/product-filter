import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Category } from './category.entity';
import { CustomEntity } from './custom.entity';
import { Product } from './product.entity';

@Entity({
  name: 'product_category'
})
export class ProductCategory extends CustomEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'integer'
  })
  productId: number;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @PrimaryColumn({
    name: 'category_id',
    type: 'integer'
  })
  categoryId: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}
