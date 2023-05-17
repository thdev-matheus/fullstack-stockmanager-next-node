import { Request, Response } from "express";
import { filterProductsService } from "../../services/company/filterProducts.service";
import { IFilterProduct } from "../../types/product";

export const filterProductsController = async (req: Request, res: Response) => {
  const {
    categoryName,
    name,
    stockLess,
    stockMore,
    companyId,
  }: IFilterProduct = req.body;
  const { page, limit } = req.query;
  const { userCompanyId } = req;

  const filteredProducts = await filterProductsService(
    { categoryName, name, stockLess, stockMore, companyId },
    req.baseUrl,
    Number(page),
    Number(limit),
    userCompanyId!
  );

  return res.status(200).json(filteredProducts);
};
