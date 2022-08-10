import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Manufacturer, Product } from '~/entities';
import { CustomEntity } from '../custom.entity';

@Entity({
  name: 'product_manufacturer'
})
export class ProductManufacturer extends CustomEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'integer'
  })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @PrimaryColumn({
    name: 'manufacturer_id',
    type: 'integer'
  })
  manufacturerId: number;

  @ManyToOne(() => Manufacturer)
  @JoinColumn({ name: 'manufacturer_id', referencedColumnName: 'id' })
  manufacturer: Manufacturer;
}
