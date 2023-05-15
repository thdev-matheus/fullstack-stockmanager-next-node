import { Request, Response } from "express";
import { readAllCategoriesService } from "../../services/category/readAllCategories.service";

export const readAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const { userCompanyId } = req;

  const categories = await readAllCategoriesService(userCompanyId);

  return res.status(200).json(categories);
};
