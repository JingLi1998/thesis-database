import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TransportUnit extends BaseEntity {
  @PrimaryColumn()
  giai: string;
}
