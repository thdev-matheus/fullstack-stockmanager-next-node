import {
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./user";
import { v4 as uuid } from "uuid";
import { SaleProduct } from "./sale-product";
import { Exclude } from "class-transformer";

@Entity()
export class Sale {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  description!: string;

  @ManyToOne(() => User, {
    nullable: false,
    eager: true,
    onDelete: "SET NULL",
  })
  @JoinColumn()
  user!: User;

  @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.sale, {
    onDelete: "CASCADE",
  })
  products!: SaleProduct[];

  constructor() {
    this.id = uuid();
  }
}