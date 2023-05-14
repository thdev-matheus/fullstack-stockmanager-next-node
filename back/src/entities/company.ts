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
    nullable: false,
  })
  user!: User;

  constructor() {
    this.id = uuid();
  }
}
