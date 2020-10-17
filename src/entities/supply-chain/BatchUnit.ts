import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class BatchUnit extends BaseEntity {
  @PrimaryColumn()
  gtin_batch_number: string;
}
