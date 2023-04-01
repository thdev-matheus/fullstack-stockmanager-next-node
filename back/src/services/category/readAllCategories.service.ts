import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category";

export const readAllCategoriesService = async () => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const categories = await categoryRepo.find();
  const countCategories = await categoryRepo.count();

  const response = {
    counter: countCategories,
    results: categories,
  };
  return response;
};
