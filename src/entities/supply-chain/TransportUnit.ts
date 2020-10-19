import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

export enum TransportUnitStatus {
  AVAILABLE = "unavailable",
  UNAVAILABLE = "available",
}

@Entity()
export class TransportUnit extends BaseEntity {
  @PrimaryColumn()
  giai: string;

  @Column({
    type: "enum",
    enum: TransportUnitStatus,
    default: TransportUnitStatus.AVAILABLE,
  })
  status: TransportUnitStatus;
}
