import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category";
import { Company } from "../../entities/company";
import { AppError } from "../../errors";

export const readAllCategoriesService = async (userCompanyId: string) => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const companyRepo = AppDataSource.getRepository(Company);
  const company = await companyRepo.findOneBy({ id: userCompanyId });

  if (!company) {
    throw new AppError(404, "empresa ão localizada no banco de dados");
  }

  if (company.name === "stock manager staff") {
    const categories = await categoryRepo.find();
    const countCategories = await categoryRepo.count();

    const response = {
      counter: countCategories,
      results: categories,
    };
    return response;
  } else {
    const categories = await categoryRepo.find({
      where: { company: { name: company.name } },
      relations: { company: true },
    });

    const response = {
      counter: categories.length,
      results: categories,
    };

    return response;
  }
};
