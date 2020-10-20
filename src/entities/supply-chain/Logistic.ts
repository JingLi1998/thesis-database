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
import { AssetUnit, Batch, Transaction, Transport } from ".";

export enum LogisticStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Logistic extends BaseEntity {
  @PrimaryGeneratedColumn()
  sscc: number;

  @ManyToOne(() => AssetUnit, (asset_unit) => asset_unit.logistics)
  @JoinColumn()
  asset_unit: AssetUnit;

  @ManyToMany(() => Batch, (batch) => batch.logistics)
  @JoinTable()
  batches?: Batch[];

  @ManyToMany(() => Transport, (transport) => transport.logistics)
  @JoinTable()
  transports?: Transport[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_logistic)
  transactions: Transaction[];

  @CreateDateColumn({ type: "timestamp" })
  aggregation_date: Date;

  @Column({ nullable: true, type: "timestamp" })
  disaggregation_date: Date;

  @Column({
    type: "enum",
    enum: LogisticStatus,
    default: LogisticStatus.IN_PROGRESS,
  })
  status: LogisticStatus;
}
