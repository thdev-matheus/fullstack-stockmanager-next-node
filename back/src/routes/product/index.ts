import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrAdmMiddleware } from "../../middlewares/isStaffOrAdm.middleware";
import { createProductController } from "../../controllers/product/createProduct.controller";
import { createProductValidationFieldsMiddleware } from "../../middlewares/createProductValidationFields.middleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../../schemas/product.schema";
import { readAllProductsController } from "../../controllers/product/readAllProducts.controller";
import { updateProductValidationFieldsMiddleware } from "../../middlewares/updateProductValidationFields.middleware";
import { updateProductController } from "../../controllers/product/updateProduct.controller";

const router = Router();

export const productRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  // rotas de leitura de produtos

  router.get("", readAllProductsController);

  // rotas de criação e edição de produto precisa ser adm ou staff

  router.use(isStaffOrAdmMiddleware);

  router.post(
    "",
    createProductValidationFieldsMiddleware(createProductSchema),
    createProductController
  );

  router.patch(
    "/:productId",
    updateProductValidationFieldsMiddleware(updateProductSchema),
    updateProductController
  );

  return router;
};
