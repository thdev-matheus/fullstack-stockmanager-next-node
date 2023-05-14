import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user";
import { Product } from "./product";
import { Sale } from "./sale";

@Entity()
export class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => User, (user) => user.company, {
    onDelete: "CASCADE",
  })
  users!: User[];

  @OneToMany(() => Product, (product) => product.company, {
    onDelete: "CASCADE",
  })
  products!: Product[];

  @OneToMany(() => Sale, (sale) => sale.company, {
    onDelete: "CASCADE",
  })
  sales!: Sale[];

  constructor() {
    this.id = uuid();
  }
}
