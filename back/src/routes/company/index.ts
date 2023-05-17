import { Router } from "express";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { createCompanyController } from "../../controllers/company/createCompany.controller";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";

const router = Router();

export const companyRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  router.post("", isStaffOrOwnerMiddleware, createCompanyController);

  return router;
};
