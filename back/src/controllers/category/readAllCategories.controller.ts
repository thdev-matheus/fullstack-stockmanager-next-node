import { Request, Response } from "express";
import { readAllCategoriesService } from "../../services/category/readAllCategories.service";

export const readAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categories = await readAllCategoriesService();

  return res.status(200).json(categories);
};
