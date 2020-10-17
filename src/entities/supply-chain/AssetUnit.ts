import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AssetUnit extends BaseEntity {
  @PrimaryColumn()
  grai: string;
}
