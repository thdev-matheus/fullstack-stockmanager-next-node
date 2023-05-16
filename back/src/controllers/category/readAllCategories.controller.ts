import { Request, Response } from "express";
import { readAllCategoriesService } from "../../services/category/readAllCategories.service";

export const readAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const { companyId } = req.body;
  const { userCompanyId } = req;

  const categories = await readAllCategoriesService(companyId, userCompanyId);

  return res.status(200).json(categories);
};
