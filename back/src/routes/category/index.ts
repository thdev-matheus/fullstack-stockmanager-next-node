import { Router } from "express";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";

import { createCategoryController } from "../../controllers/category/createCategory.controller";

const router = Router();

export const categoryRoutes = () => {
  router.use(isAuthenticatedMiddleware, isAdmMiddleware);

  router.post("", createCategoryController);

  return router;
};
