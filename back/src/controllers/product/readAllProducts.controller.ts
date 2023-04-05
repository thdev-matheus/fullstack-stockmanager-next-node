import { Request, Response } from "express";
import { readAllProductsService } from "../../services/product/readAllProducts.service";

export const readAllProductsController = async (
  req: Request,
  res: Response
) => {
  const { page, limit } = req.query;

  const products = await readAllProductsService(
    req.baseUrl,
    Number(page),
    Number(limit)
  );

  return res.status(200).json(products);
};
