import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Category } from "../../entities/category";
import { ICategory, ICategoryRequest } from "../../types/category";

export const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<ICategory> => {
  if (!name) {
    throw new AppError(400, "O campo nome é obrigatório");
  }

  const categoryRepo = AppDataSource.getRepository(Category);
  const categoryAlreadyExists = await categoryRepo.findOneBy({ name });

  if (categoryAlreadyExists) {
    throw new AppError(400, "Esta categoria já existe");
  }

  const newCategory = categoryRepo.create({
    name,
  });

  await categoryRepo.save(newCategory);

  return newCategory;
};
