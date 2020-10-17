import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BatchUnit, Location, LogisticUnit, StockUnit, TransportUnit } from ".";

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Location)
  @JoinColumn()
  who: Location;

  @ManyToOne(() => Location)
  @JoinColumn()
  where: Location;

  @Column()
  when: number;

  @Column()
  why: string;

  @ManyToMany(() => StockUnit)
  @JoinTable()
  what_stock: StockUnit[];

  @ManyToMany(() => BatchUnit)
  @JoinTable()
  what_batch: BatchUnit[];

  @ManyToMany(() => LogisticUnit)
  @JoinTable()
  what_logistic: LogisticUnit[];

  @ManyToMany(() => TransportUnit)
  @JoinTable()
  what_transport: TransportUnit[];
}
