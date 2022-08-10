import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CustomEntity } from './custom.entity';
import { Manufacturer } from './manufacturer.entity';
import { Product } from './product.entity';

@Entity({
  name: 'product_manufacturer'
})
export class ProductManufacturer extends CustomEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'integer'
  })
  productId: number;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @PrimaryColumn({
    name: 'manufacturer_id',
    type: 'integer'
  })
  manufacturerId: number;

  @ManyToOne(() => Manufacturer, { eager: true })
  @JoinColumn({ name: 'manufacturer_id', referencedColumnName: 'id' })
  manufacturer: Manufacturer;
}
