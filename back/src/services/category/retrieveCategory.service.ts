import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Category } from "../../entities/category";

export const retrieveCategoryService = async (categoryId: string) => {
  if (!categoryId) {
    throw new AppError(
      400,
      "O id da categoria é obrigatório nos parâmetros desta rota"
    );
  }

  const categoryRepo = AppDataSource.getRepository(Category);
  const category = await categoryRepo.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError(404, "categoria não encontrada");
  }

  return category;
};
