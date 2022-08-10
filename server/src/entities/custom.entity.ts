import { BaseEntity, PrimaryColumn } from 'typeorm';

export class CustomEntity extends BaseEntity {
  @PrimaryColumn({ type: 'integer' })
  id: number;
}
