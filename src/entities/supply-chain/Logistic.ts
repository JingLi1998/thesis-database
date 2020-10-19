import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { AssetUnit, Batch, Transaction, Transport } from ".";

export enum LogisticStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Logistic extends BaseEntity {
  @PrimaryColumn()
  sscc: string;

  @ManyToOne(() => AssetUnit, (asset_unit) => asset_unit.logistics)
  @JoinColumn()
  asset_unit: AssetUnit;

  @ManyToMany(() => Batch, (batch) => batch.logistics)
  @JoinTable()
  batches: Batch[];

  @ManyToMany(() => Transport, (transport) => transport.logistics)
  @JoinTable()
  transports: Transport[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_logistic)
  transactions: Transaction[];

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
