import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CustomEntity } from './custom.entity';
import { Manufacturer } from './manufacturer.entity';

@Entity({
  name: 'product'
})
export class Product extends CustomEntity {
  @Column({
    name: 'display_name',
    type: 'character varying'
  })
  displayName: string;

  @Column({
    name: 'item_number',
    type: 'character varying'
  })
  itemNumber: string;

  @Column({
    name: 'image_url',
    type: 'character varying'
  })
  imageUrl: string;

  @Column({
    name: 'price',
    type: 'money'
  })
  price: string;

  @Column({
    name: 'manufacturer_id',
    type: 'integer'
  })
  manufacturerId: number;

  @ManyToOne(() => Manufacturer, { eager: true })
  @JoinColumn({ name: 'manufacturer_id', referencedColumnName: 'id' })
  manufacturer: Manufacturer;
}
