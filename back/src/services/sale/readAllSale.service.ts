import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/company";
import { Sale } from "../../entities/sale";
import { AppError } from "../../errors";

export const readAllSalesService = async (
  currentURL: string,
  page: number,
  limit: number,
  userCompanyId: string,
  companyId?: string
) => {
  !page && (page = 1);
  !limit && (limit = 5);

  page = Number(page);
  limit = Number(limit);

  const saleRepo = AppDataSource.getRepository(Sale);
  const companyRepo = AppDataSource.getRepository(Company);

  const company = await companyRepo.findOneBy({
    id: companyId ? companyId : userCompanyId,
  });

  if (!company) {
    throw new AppError(404, "empresa não encontrada");
  }

  const count = await saleRepo.count({
    where: { company: { id: company.id } },
  });

  page < 1 || (page * limit > count && (page = 1));
  limit < 1 && (limit = 5);

  const skip = (page - 1) * limit;

  const sales = await saleRepo.find({
    skip,
    take: limit,
    order: { createdAt: "desc" },
    relations: { user: true, products: true, company: true },
    where: { company: { id: company.id } },
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
