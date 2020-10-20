import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  gtin: number;

  @Column()
  name: string;

  @Column()
  size: string;
}
