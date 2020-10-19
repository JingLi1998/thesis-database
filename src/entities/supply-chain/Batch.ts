import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { StockUnit, Logistic, Transaction } from ".";

export enum BatchStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Batch extends BaseEntity {
  @PrimaryColumn()
  gtin_batch_number: string;

  @ManyToMany(() => StockUnit, (stock_unit) => stock_unit.batches)
  @JoinTable()
  stock_units: StockUnit[];

  @ManyToMany(() => Logistic, (logistic) => logistic.batches)
  logistics: Logistic[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_batch)
  transactions: Transaction[];

  @Column()
  aggregation_date: number;

  @Column({ nullable: true })
  disaggregation_date: number;

  @Column({ type: "enum", enum: BatchStatus, default: BatchStatus.IN_PROGRESS })
  status: BatchStatus;
}
