import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./category";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 250, nullable: false, unique: true })
  name!: string;

  @Column({ type: "int", nullable: false, default: 0 })
  stock!: number;

  @Column({ type: "float", nullable: false })
  purchasePrice!: number;

  @Column({ type: "float", nullable: false })
  salePrice!: number;

  @ManyToOne((type) => Category, { nullable: true, onDelete: "SET NULL" })
  @JoinColumn()
  category!: Category;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  constructor() {
    this.id = uuid();
  }
}
