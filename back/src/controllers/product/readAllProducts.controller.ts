import { Request, Response } from "express";
import { readAllProductsService } from "../../services/product/readAllProducts.service";

export const readAllProductsController = async (
  req: Request,
  res: Response
) => {
  const { companyId } = req.body;
  const { page, limit } = req.query;
  const { userCompanyId } = req;

  const products = await readAllProductsService(
    req.baseUrl,
    Number(page),
    Number(limit),
    userCompanyId!,
    companyId
  );

  return res.status(200).json(products);
};
