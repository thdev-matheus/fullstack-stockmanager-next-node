import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1682657821041 implements MigrationInterface {
    name = 'mig1682657821041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a"`);
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_650636cdcaeada7ede8e412b83c"`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_650636cdcaeada7ede8e412b83c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_650636cdcaeada7ede8e412b83c"`);
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a"`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_650636cdcaeada7ede8e412b83c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
