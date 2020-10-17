import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StockUnit extends BaseEntity {
  @PrimaryColumn()
  gtin_serial_number: string;
}
