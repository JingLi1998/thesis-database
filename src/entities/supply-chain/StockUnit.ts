import {
  BaseEntity,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Batch, Transaction } from ".";
import { Product } from "./Product";

@Entity()
export class StockUnit extends BaseEntity {
  @PrimaryGeneratedColumn()
  gtin_serial: string;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToMany(() => Batch, (batch) => batch.stock_units)
  batches?: Batch[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_stock)
  transactions: Transaction[];
}
