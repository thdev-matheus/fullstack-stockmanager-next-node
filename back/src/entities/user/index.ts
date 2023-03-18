import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ type: "varchar", unique: true, nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: false })
  securityAsk!: string;

  @Column({ type: "varchar", nullable: false })
  securityAnswer!: string;

  @Column({ type: "varchar", nullable: false })
  @Exclude()
  password!: string;

  constructor() {
    this.id = uuid();
  }
}
