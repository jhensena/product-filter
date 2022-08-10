import { Column, Entity } from 'typeorm';
import { CustomEntity } from '~/entities';

@Entity({
  name: 'manufacturer'
})
export class Manufacturer extends CustomEntity {
  @Column({
    name: 'display_name',
    type: 'character varying'
  })
  displayName: string;
}
