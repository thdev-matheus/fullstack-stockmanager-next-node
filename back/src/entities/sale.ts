import {
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Product } from "./product";
import { User } from "./user";
import { v4 as uuid } from "uuid";
import { SaleProduct } from "./sale-products";
import { Exclude } from "class-transformer";

@Entity()
export class Sale {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, {
    nullable: false,
    eager: true,
    onDelete: "SET NULL",
  })
  @JoinColumn()
  user!: User;

  @Exclude()
  @ManyToOne(() => SaleProduct)
  saleProducts!: SaleProduct[];

  constructor() {
    this.id = uuid();
  }
}
