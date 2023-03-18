import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "string", length: 250, nullable: false, unique: true })
  name!: string;

  @Column({ type: "int", nullable: false, default: 0 })
  stock!: number;

  @Column({ type: "boolean", nullable: false, default: true })
  isActive!: boolean;

  @Column({ type: "float", nullable: false })
  purchasePrice!: number;

  @Column({ type: "float", nullable: false })
  salePrice!: number;

  constructor() {
    this.id = uuid();
  }
}
