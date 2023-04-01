import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";

import { createCategoryController } from "../../controllers/category/createCategory.controller";
import { readAllCategoriesController } from "../../controllers/category/readAllCategories.controller";

const router = Router();

export const categoryRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  router.get("", readAllCategoriesController);

  router.use(isAdmMiddleware);

  router.post("", createCategoryController);

  return router;
};
