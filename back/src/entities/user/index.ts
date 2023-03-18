import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import { Product } from "../product";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "string", length: 30, unique: true, nullable: false })
  name!: string;

  @Column({ type: "string", nullable: false })
  @Exclude()
  password!: string;

  @Column({ type: "boolean", nullable: false, default: false })
  isAdm!: boolean;

  @Column({ type: "string", length: 150, nullable: false })
  securityAsk!: string;

  @Column({ type: "string", length: 150, nullable: false })
  securityAnswer!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany((type) => Product, (product) => product.purchasePrice, {
    onDelete: "CASCADE",
  })
  products!: Product[];

  constructor() {
    this.id = uuid();
  }
}
