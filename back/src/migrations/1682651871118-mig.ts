import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1682651871118 implements MigrationInterface {
    name = 'mig1682651871118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_49343668aa9988c3bf31a3c6f60"`);
        await queryRunner.query(`ALTER TABLE "sale" RENAME COLUMN "saleProductsId" TO "productsId"`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_ebeea273b0513380fa6b8a95318" FOREIGN KEY ("productsId") REFERENCES "sale_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_ebeea273b0513380fa6b8a95318"`);
        await queryRunner.query(`ALTER TABLE "sale" RENAME COLUMN "productsId" TO "saleProductsId"`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_49343668aa9988c3bf31a3c6f60" FOREIGN KEY ("saleProductsId") REFERENCES "sale_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
