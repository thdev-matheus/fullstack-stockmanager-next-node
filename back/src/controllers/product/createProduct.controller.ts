import { Request, Response } from "express";
import { createProductService } from "../../services/product/createProduct.service";
import { IProductRequest } from "../../types/product";

export const createProductController = async (req: Request, res: Response) => {
  const {
    categoryName,
    name,
    purchasePrice,
    salePrice,
    stock,
    companyId,
  }: IProductRequest = req.body;
  const { userCompanyId } = req;

  const product = await createProductService(
    {
      categoryName,
      name,
      purchasePrice,
      salePrice,
      stock,
      companyId,
    },
    userCompanyId!
  );

  return res.status(201).json(product);
};
