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
import { Batch, Location, Logistic, StockUnit, Transport } from ".";

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Location)
  @JoinColumn()
  who: Location;

  @ManyToOne(() => Location)
  @JoinColumn()
  where: Location;

  @CreateDateColumn({ type: "timestamp" })
  when: Date;

  @Column()
  why: string;

  @ManyToMany(() => StockUnit, (stock_unit) => stock_unit.transactions)
  @JoinTable()
  what_stock: StockUnit[];

  @ManyToMany(() => Batch, (batch) => batch.transactions)
  @JoinTable()
  what_batch: Batch[];

  @ManyToMany(() => Logistic, (logistic) => logistic.transactions)
  @JoinTable()
  what_logistic: Logistic[];

  @ManyToMany(() => Transport, (transport) => transport.transactions)
  @JoinTable()
  what_transport: Transport[];
}
