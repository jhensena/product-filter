import { Column, Entity } from 'typeorm';
import { CustomEntity } from '../custom.entity';

@Entity({
  name: 'attribute_key'
})
export class AttributeKey extends CustomEntity {
  @Column({
    name: 'handle',
    type: 'character varying'
  })
  handle: string;

  @Column({
    name: 'display_name',
    type: 'character varying'
  })
  displayName: string;
}
