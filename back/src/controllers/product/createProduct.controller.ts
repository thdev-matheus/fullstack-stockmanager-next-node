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
  }: IProductRequest = req.body;

  const product = await createProductService({
    categoryName,
    name,
    purchasePrice,
    salePrice,
    stock,
  });

  return res.status(201).json(product);
};
