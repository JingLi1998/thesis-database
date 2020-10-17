import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class LogisticUnit extends BaseEntity {
  @PrimaryColumn()
  sscc: string;
}
