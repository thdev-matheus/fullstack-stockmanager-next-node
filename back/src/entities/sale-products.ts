import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Sale } from "./sale";
import { Product } from "./product";

@Entity()
export class SaleProduct {
  @PrimaryColumn()
  id: string;

  @OneToMany(() => Sale, (sale) => sale.saleProducts, {
    onDelete: "CASCADE",
    nullable: false,
  })
  sale!: Sale;

  @OneToMany(() => Product, (product) => product.saleProducts, {
    onDelete: "NO ACTION",
    nullable: false,
  })
  product!: Product;

  @Column()
  quantity!: number;

  constructor() {
    this.id = uuid();
  }
}
