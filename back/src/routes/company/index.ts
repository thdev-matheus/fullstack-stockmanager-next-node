import { Router } from "express";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { createCompanyController } from "../../controllers/company/createCompany.controller";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { readAllCompaniesController } from "../../controllers/company/readAllCompanies.controller";

const router = Router();

export const companyRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  router.post("", isStaffOrOwnerMiddleware, createCompanyController);
  router.get("", isStaffOrOwnerMiddleware, readAllCompaniesController);

  return router;
};
