import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { readAllSalesService } from "../../services/sale/readAllSale.service";

export const readAllSalesController = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  const { userCompanyId } = req;
  const { companyId } = req.body;

  const sales = await readAllSalesService(
    req.baseUrl,
    Number(page),
    Number(limit),
    userCompanyId!,
    companyId
  );

  return res.status(200).json(instanceToPlain(sales));
};
