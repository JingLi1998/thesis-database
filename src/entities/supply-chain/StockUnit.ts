import { BaseEntity, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Batch, Transaction } from ".";

@Entity()
export class StockUnit extends BaseEntity {
  @PrimaryColumn()
  gtin_serial_number: string;

  @ManyToMany(() => Batch, (batch) => batch.stock_units)
  batches: Batch[];

  @ManyToMany(() => Transaction, (transaction) => transaction.what_stock)
  transactions: Transaction[];
}
