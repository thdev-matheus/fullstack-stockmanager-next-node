import { Request, Response } from "express";
import { createCategoryService } from "../../services/category/createCategory.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userCompanyId } = req;

  const createdCategory = await createCategoryService(
    {
      name,
    },
    userCompanyId!
  );

  return res.status(201).json(createdCategory);
};
