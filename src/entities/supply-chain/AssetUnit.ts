import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Logistic } from ".";

export enum AssetUnitStatus {
  UNAVAILABLE = "unavailable",
  AVAILABLE = "available",
}

@Entity()
export class AssetUnit extends BaseEntity {
  @PrimaryColumn()
  grai: string;

  @OneToMany(() => Logistic, (logistic) => logistic.asset_unit)
  logistics: Logistic[];

  @Column({
    type: "enum",
    enum: AssetUnitStatus,
    default: AssetUnitStatus.AVAILABLE,
  })
  status: AssetUnitStatus;
}
