import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrAdmMiddleware } from "../../middlewares/isStaffOrAdm.middleware";

import { createCategoryController } from "../../controllers/category/createCategory.controller";
import { readAllCategoriesController } from "../../controllers/category/readAllCategories.controller";
import { retrieveCategoryController } from "../../controllers/category/retrieveCategory.controller";
import { updateCategoryController } from "../../controllers/category/updateCategory.controller";

const router = Router();

export const categoryRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  router.get("", readAllCategoriesController);
  router.get("/:categoryId", retrieveCategoryController);

  router.use(isStaffOrAdmMiddleware);

  router.post("", createCategoryController);
  router.patch("/:categoryId", updateCategoryController);

  return router;
};
