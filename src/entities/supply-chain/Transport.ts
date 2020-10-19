import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Logistic, Transaction, TransportUnit } from ".";

export enum TransportStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Transport extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => TransportUnit, (transport_unit) => transport_unit.transports)
  @JoinColumn()
  transport_unit: TransportUnit;

  @ManyToMany(() => Logistic, (logistic) => logistic.transports)
  @JoinTable()
  logistics: Logistic[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_transport)
  transactions: Transaction[];

  @Column()
  aggregation_date: number;

  @Column({ nullable: true })
  disaggregation_date: number;

  @Column({
    type: "enum",
    enum: TransportStatus,
    default: TransportStatus.IN_PROGRESS,
  })
  status: TransportStatus;
}
