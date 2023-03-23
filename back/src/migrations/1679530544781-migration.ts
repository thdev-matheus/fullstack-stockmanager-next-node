import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1679530544781 implements MigrationInterface {
    name = 'migration1679530544781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isStaff" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isStaff"`);
    }

}
