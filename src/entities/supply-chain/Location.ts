import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  gln: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  latitude: number;

  @Column({ type: "float" })
  longitude: number;
}
