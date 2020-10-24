import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ResourcePolicy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_email: string;

  @Column()
  resource_id: string;

  @Column()
  resource_type: string;

  @Column()
  permission: string;
}
