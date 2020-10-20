import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Logistic, Transaction, TransportUnit } from ".";

export enum TransportStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Transport extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TransportUnit, (transport_unit) => transport_unit.transports)
  @JoinColumn()
  transport_unit: TransportUnit;

  @ManyToMany(() => Logistic, (logistic) => logistic.transports)
  @JoinTable()
  logistics?: Logistic[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_transport)
  transactions: Transaction[];

  @CreateDateColumn({ type: "timestamp" })
  aggregation_date: Date;

  @Column({ nullable: true, type: "timestamp" })
  disaggregation_date: Date;

  @Column({
    type: "enum",
    enum: TransportStatus,
    default: TransportStatus.IN_PROGRESS,
  })
  status: TransportStatus;
}
