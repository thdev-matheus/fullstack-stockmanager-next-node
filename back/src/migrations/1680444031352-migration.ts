import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1680444031352 implements MigrationInterface {
    name = 'migration1680444031352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
