import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Manufacturer, ProductAttribute, ProductCategory, ProductManufacturer } from '~/entities';
import { CustomEntity } from '../custom.entity';

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

  @OneToMany(() => ProductCategory, productCategory => productCategory.product, { eager: true })
  categories: Array<ProductCategory>;

  @OneToMany(() => ProductAttribute, productAttribute => productAttribute.product, { eager: true })
  attributes: Array<ProductAttribute>;

  @OneToMany(() => ProductManufacturer, productManufacturer => productManufacturer.product, { eager: true })
  manufacturers: Array<ProductManufacturer>;
}
