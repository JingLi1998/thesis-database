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
import { BatchUnit, StockUnit } from ".";

export enum BatchStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Batch extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => BatchUnit)
  @JoinColumn()
  batch_unit: BatchUnit;

  @ManyToMany(() => StockUnit)
  @JoinTable()
  stock_units: StockUnit[];

  @Column()
  aggregation_date: number;

  @Column({ nullable: true })
  disaggregation_date: number;

  @Column({ type: "enum", enum: BatchStatus, default: BatchStatus.IN_PROGRESS })
  status: BatchStatus;
}
