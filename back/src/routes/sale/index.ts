import { Router } from "express";
import { createSaleController } from "../../controllers/sale/createSale.controller";

const router = Router();

export const saleRoutes = () => {
  router.post("", createSaleController);

  return router;
};
