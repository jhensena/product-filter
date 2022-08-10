import { Column, Entity } from 'typeorm';
import { CustomEntity } from './custom.entity';

@Entity({
  name: 'category'
})
export class Category extends CustomEntity {
  @Column({
    name: 'display_name',
    type: 'character varying'
  })
  displayName: string;
}
