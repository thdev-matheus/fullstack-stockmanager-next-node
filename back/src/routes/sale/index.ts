import { Router } from "express";
import { createSaleController } from "../../controllers/sale/createSale.controller";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrAdmMiddleware } from "../../middlewares/isStaffOrAdm.middleware";

const router = Router();

export const saleRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  router.post("", createSaleController);

  router.use(isStaffOrAdmMiddleware);

  router.get("");

  return router;
};
