import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Sale } from "./sale";
import { Product } from "./product";
import { Exclude } from "class-transformer";

@Entity()
export class SaleProduct {
  @PrimaryColumn()
  id: string;

  @Exclude()
  @OneToMany(() => Sale, (sale) => sale.products, {
    onDelete: "CASCADE",
    nullable: false,
  })
  sale!: Sale;

  @OneToMany(() => Product, (product) => product.saleProducts, {
    onDelete: "NO ACTION",
    nullable: false,
  })
  product!: Product;

  @Column({ nullable: false, default: 1 })
  quantity!: number;

  constructor() {
    this.id = uuid();
  }
}
