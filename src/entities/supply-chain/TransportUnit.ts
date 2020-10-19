import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Transport } from ".";

export enum TransportUnitStatus {
  UNAVAILABLE = "unavailable",
  AVAILABLE = "available",
}

@Entity()
export class TransportUnit extends BaseEntity {
  @PrimaryColumn()
  giai: string;

  @OneToMany(() => Transport, (transport) => transport.transport_unit)
  transports: Transport[];

  @Column({
    type: "enum",
    enum: TransportUnitStatus,
    default: TransportUnitStatus.AVAILABLE,
  })
  status: TransportUnitStatus;
}
