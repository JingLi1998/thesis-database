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
import { TransportUnit, LogisticUnit } from ".";

export enum TransportStatus {
  IN_PROGRESS = "in_progress",
  COMPLETE = "complete",
}

@Entity()
export class Transport extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => TransportUnit)
  @JoinColumn()
  transport_unit: TransportUnit;

  @ManyToMany(() => LogisticUnit)
  @JoinTable()
  logistic_units: LogisticUnit[];

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
