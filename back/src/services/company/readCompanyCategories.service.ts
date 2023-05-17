import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Company } from "../../entities/company";

export const readCompanyCategoriesService = async (companyId: string) => {
  if (!companyId) {
    throw new AppError(400, "faltou o id da empresa nos parâmetros");
  }

  const companyRepo = AppDataSource.getRepository(Company);

  const company = await companyRepo.findOne({
    where: { id: companyId },
    relations: { categories: true },
  });

  if (!company) {
    throw new AppError(404, "empresa não encontrada no banco de dados");
  }

  const response = {
    name: company.name,
    count: company.categories.length,
    results: company.categories,
  };

  return response;
};
