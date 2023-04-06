import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Product } from "../../entities/product";
import { Category } from "../../entities/category";
import { IFilterProduct } from "../../types/product";
import { LessThanOrEqual, Like, MoreThan } from "typeorm";

export const filterProductsService = async (
  { categoryName, name, stockLess, stockMore }: IFilterProduct,
  currentURL: string,
  page: number,
  limit: number
) => {
  categoryName && (categoryName = categoryName.toLowerCase());
  name && (name = name.toLowerCase());
  !page && (page = 1);
  !limit && (limit = 5);

  page = Number(page);
  limit = Number(limit);

  const productRepo = AppDataSource.getRepository(Product);
  const categoryRepo = AppDataSource.getRepository(Category);
  let category = undefined;

  categoryName && (category = categoryRepo.findOneBy({ name: categoryName }));

  if (categoryName && !category) {
    throw new AppError(
      404,
      "filtro por categoria inválido pois essa categoria não consta no banco de dados"
    );
  }

  const count = await productRepo.count({
    relations: { category: true },
    where: {
      name: name ? Like(`%${name}%`) : undefined,
      stock: stockLess
        ? LessThanOrEqual(stockLess)
        : stockMore
        ? MoreThan(stockMore)
        : undefined,
      category: {
        name: categoryName ? Like(`%${categoryName}%`) : undefined,
      },
    },
  });

  page < 1 || (page * limit > count && (page = 1));
  limit < 1 && (limit = 5);

  const skip = (page - 1) * limit;

  const products = await productRepo.find({
    skip,
    take: limit,
    order: { createdAt: "desc" },
    relations: { category: true },
    where: {
      name: name ? Like(`%${name}%`) : undefined,
      stock: stockLess
        ? LessThanOrEqual(stockLess)
        : stockMore
        ? MoreThan(stockMore)
        : undefined,
      category: {
        name: categoryName ? Like(`%${categoryName}%`) : undefined,
      },
    },
  });

  const next =
    page * limit <= count
      ? `${currentURL}?pages=${page + 1}&limit=${limit}`
      : null;

  const previous =
    page <= 1 ? null : `${currentURL}?page=${page - 1}&limit=${limit}`;

  const response = {
    page,
    count,
    next,
    previous,
    limit,
    results: products,
  };
};