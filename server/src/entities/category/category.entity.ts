import { Column, Entity, OneToMany } from 'typeorm';
import { CategoryAttribute } from '~/entities';
import { CustomEntity } from '../custom.entity';

@Entity({
  name: 'category'
})
export class Category extends CustomEntity {
  @Column({
    name: 'display_name',
    type: 'character varying'
  })
  displayName: string;

  @OneToMany(() => CategoryAttribute, categoryAttribute => categoryAttribute.category, { eager: true })
  attributes: Array<CategoryAttribute>;
}
