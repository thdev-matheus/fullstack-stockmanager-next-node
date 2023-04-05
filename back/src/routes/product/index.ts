import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrAdmMiddleware } from "../../middlewares/isStaffOrAdm.middleware";
import { createProductController } from "../../controllers/product/createProduct.controller";

const router = Router();

export const productRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  // rotas de leitura de produtos

  router.use(isStaffOrAdmMiddleware);

  router.post("", createProductController);

  // rotas de criação e edição de produto precisa ser adm ou staff

  return router;
};
