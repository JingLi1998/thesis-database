import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TransportUnit, Logistic, Transaction } from ".";

export enum TransportStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Transport extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => TransportUnit)
  @JoinColumn()
  transport_unit: TransportUnit;

  @ManyToMany(() => Logistic, (logistic) => logistic.transports)
  @JoinTable()
  logistics: Logistic[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_batch)
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
