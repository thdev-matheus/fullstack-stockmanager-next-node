import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Category } from "../../entities/category";
import { Product } from "../../entities/product";
import { IProductRequest } from "../../types/product";

export const createProductService = async ({
  categoryName,
  name,
  purchasePrice,
  salePrice,
  stock,
}: IProductRequest) => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const productRepo = AppDataSource.getRepository(Product);

  name = name!.toLowerCase();
  categoryName && (categoryName = categoryName.toLowerCase());

  let category =
    categoryName && (await categoryRepo.findOneBy({ name: categoryName }));

  if (categoryName && !category) {
    throw new AppError(404, "categoria fornecida não encontrada");
  }

  if (!category) {
    category = undefined;
  }

  const productAlreadyExists = await productRepo.findOneBy({ name });

  if (productAlreadyExists) {
    throw new AppError(400, "Este produto já consta na base de dados");
  }

  const newProduct = productRepo.create({
    category,
    name,
    purchasePrice,
    salePrice,
    stock,
  });

  await productRepo.save(newProduct);

  const product = await productRepo.findOne({
    where: { name },
    relations: { category: true },
  });

  return product;
};
