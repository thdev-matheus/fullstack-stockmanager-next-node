import { Request, Response } from "express";
import { readCompanyProductsService } from "../../services/company/readCompanyProducts.service";

export const readCompanyProductsController = async (
  req: Request,
  res: Response
) => {
  const { companyId } = req.body;
  const { page, limit } = req.query;

  const products = await readCompanyProductsService(
    req.baseUrl,
    Number(page),
    Number(limit),
    companyId
  );

  return res.status(200).json(products);
};
