import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrAdmMiddleware } from "../../middlewares/isStaffOrAdm.middleware";
import { createProductController } from "../../controllers/product/createProduct.controller";
import { createProductValidationFieldsMiddleware } from "../../middlewares/createProductValidationFields.middleware";
import { createProductSchema } from "../../schemas/product.schema";

const router = Router();

export const productRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  // rotas de leitura de produtos

  // rotas de criação e edição de produto precisa ser adm ou staff

  router.use(isStaffOrAdmMiddleware);

  router.post(
    "",
    createProductValidationFieldsMiddleware(createProductSchema),
    createProductController
  );

  return router;
};
