import { Request, Response } from "express";
import { filterProductsService } from "../../services/product/filterProducts.service";
import { IFilterProduct } from "../../types/product";

export const filterProductsController = async (req: Request, res: Response) => {
  const { categoryName, name, stockLess, stockMore }: IFilterProduct = req.body;
  const { page, limit } = req.query;

  const filteredProducts = await filterProductsService(
    { categoryName, name, stockLess, stockMore },
    req.baseUrl,
    Number(page),
    Number(limit)
  );

  return res.status(200).json(filteredProducts);
};
