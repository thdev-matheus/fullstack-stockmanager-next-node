import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product";

@Entity()
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @OneToMany((type) => Product, (product) => product.category, {
    onDelete: "SET NULL",
  })
  products!: Product[];

  constructor() {
    this.id = uuid();
  }
}
