import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category";
import { Company } from "../../entities/company";
import { AppError } from "../../errors";

export const readAllCategoriesService = async (
  companyId: string | undefined,
  userCompanyId: string | undefined
) => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const companyRepo = AppDataSource.getRepository(Company);
  const company = await companyRepo.findOneBy({
    id: companyId ? companyId : userCompanyId,
  });

  if (!company) {
    throw new AppError(404, "empresa ão localizada no banco de dados");
  }

  const categories = await categoryRepo.find({
    where: { company: { id: company.id } },
  });

  const response = {
    counter: categories.length,
    results: categories,
  };

  return response;
};
