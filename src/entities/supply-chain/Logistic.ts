import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LogisticUnit, AssetUnit, BatchUnit } from ".";

export enum LogisticStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Logistic extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => LogisticUnit)
  @JoinColumn()
  logistic_unit: LogisticUnit;

  @ManyToOne(() => AssetUnit)
  @JoinColumn()
  asset_unit: AssetUnit;

  @ManyToMany(() => BatchUnit)
  @JoinTable()
  batch_units: BatchUnit[];

  @Column()
  aggregation_date: number;

  @Column({ nullable: true })
  disaggregation_date: number;

  @Column({
    type: "enum",
    enum: LogisticStatus,
    default: LogisticStatus.IN_PROGRESS,
  })
  status: LogisticStatus;
}
