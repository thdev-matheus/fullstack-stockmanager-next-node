import { AppDataSource } from "../../data-source";
import { Sale } from "../../entities/sale";

export const readAllUsersService = async (
  currentURL: string,
  page: number,
  limit: number
) => {
  !page && (page = 1);
  !limit && (limit = 5);

  page = Number(page);
  limit = Number(limit);

  const saleRepo = AppDataSource.getRepository(Sale);
  const count = await saleRepo.count();

  page < 1 || (page * limit > count && (page = 1));
  limit < 1 && (limit = 5);

  const skip = (page - 1) * limit;

  const sales = await saleRepo.find({
    skip,
    take: limit,
    order: { createdAt: "desc" },
    relations: { products: true, user: true },
  });

  const next =
    page * limit <= count
      ? `${currentURL}?page=${page + 1}&limit=${limit}`
      : null;

  const previous =
    page <= 1 ? null : `${currentURL}?page=${page - 1}&limit=${limit}`;

  const results = sales.map((sale) => {
    return {
      ...sale,
      products: [
        ...sale!.products.map((sProd) => {
          return {
            quantity: sProd.quantity,
            ...sProd.product,
          };
        }),
      ],
    };
  });

  const response = {
    page,
    count,
    next,
    previous,
    limit,
    results,
  };

  return response;
};
