import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Category } from "../../entities/category";
import { Product } from "../../entities/product";
import { IProductRequest } from "../../types/product";

export const updateProductService = async (
  { categoryName, name, purchasePrice, salePrice, stock }: IProductRequest,
  id: string
) => {
  name && (name = name.toLowerCase());
  categoryName && (categoryName = categoryName.toLowerCase());

  const categoryRepo = AppDataSource.getRepository(Category);
  const productRepo = AppDataSource.getRepository(Product);

  let category =
    categoryName && (await categoryRepo.findOneBy({ name: categoryName }));

  if (categoryName && !category) {
    throw new AppError(404, "categoria fornecida não encontrada");
  }

  if (!category) {
    category = undefined;
  }

  const product = await productRepo.findOneBy({ name });

  if (!product) {
    throw new AppError(404, "produto não encontrado");
  }

  await productRepo.update(id, {
    category: category || product.category,
    name: name || product.name,
    purchasePrice: purchasePrice || product.purchasePrice,
    salePrice: salePrice || product.salePrice,
    stock: stock || product.stock,
  });

  const updatedProduct = await productRepo.findOne({
    where: { id },
    relations: { category: true },
  });

  return updatedProduct!;
};
