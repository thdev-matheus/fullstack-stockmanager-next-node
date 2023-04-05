import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product";

export const readAllProductsService = async (
  currentURL: string,
  page: number,
  limit: number
) => {
  !page && (page = 1);
  !limit && (limit = 5);

  page = Number(page);
  limit = Number(limit);

  const productRepo = AppDataSource.getRepository(Product);
  const count = await productRepo.count();

  page < 1 || (page * limit > count && (page = 1));
  limit < 1 && (limit = 5);

  const skip = (page - 1) * limit;

  const products = await productRepo.find({
    skip,
    take: limit,
    order: { createdAt: "desc" },
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

  return response;
};
