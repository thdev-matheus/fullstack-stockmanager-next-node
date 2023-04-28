import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Sale } from "../../entities/sale";
import { User } from "../../entities/user";
import { Product } from "../../entities/product";
import { SaleProduct } from "../../entities/sale-product";
import { ISaleRequest } from "../../types/sale";

export const createSaleService = async (
  { description, products }: ISaleRequest,
  userId: string
) => {
  const userRepo = AppDataSource.getRepository(User);
  const saleRepo = AppDataSource.getRepository(Sale);
  const productRepo = AppDataSource.getRepository(Product);
  const saleProductRepo = AppDataSource.getRepository(SaleProduct);

  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "usuário não encontrado!");
  }

  const newSale = saleRepo.create({
    user,
    description,
  });

  console.log(newSale);
};
