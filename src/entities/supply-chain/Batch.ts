import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Logistic, StockUnit, Transaction } from ".";

export enum BatchStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Batch extends BaseEntity {
  @PrimaryGeneratedColumn()
  gtin_batch: number;

  @ManyToMany(() => StockUnit, (stock_unit) => stock_unit.batches, {
    cascade: true,
  })
  @JoinTable()
  stock_units?: StockUnit[];

  @ManyToMany(() => Logistic, (logistic) => logistic.batches)
  logistics?: Logistic[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_batch)
  transactions: Transaction[];

  @CreateDateColumn({ type: "timestamp" })
  aggregation_date: Date;

  @Column({ nullable: true, type: "timestamp" })
  disaggregation_date: Date;

  @Column({ type: "enum", enum: BatchStatus, default: BatchStatus.IN_PROGRESS })
  status: BatchStatus;
}
