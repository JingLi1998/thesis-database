import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Transport } from ".";

export enum TransportUnitStatus {
  UNAVAILABLE = "unavailable",
  AVAILABLE = "available",
}

@Entity()
export class TransportUnit extends BaseEntity {
  @PrimaryGeneratedColumn()
  giai: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @OneToMany(() => Transport, (transport) => transport.transport_unit)
  transports: Transport[];

  @Column({
    type: "enum",
    enum: TransportUnitStatus,
    default: TransportUnitStatus.AVAILABLE,
  })
  status: TransportUnitStatus;
}
