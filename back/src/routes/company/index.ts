import { Router } from "express";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { createCompanyController } from "../../controllers/company/createCompany.controller";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { readAllCompaniesController } from "../../controllers/company/readAllCompanies.controller";
import { readOneCompanyController } from "../../controllers/company/readOneCompany.controller";
import { readCompanyCategoriesController } from "../../controllers/company/readCompanyCategories.controller";

const router = Router();

export const companyRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  // rotas de staff
  router.post("", isStaffOrOwnerMiddleware, createCompanyController);
  router.get("", isStaffOrOwnerMiddleware, readAllCompaniesController);

  // rotas abertas de leitura de informações sobre a empresa
  router.get("/:companyId", readOneCompanyController);
  router.get("/:companyId/categories", readCompanyCategoriesController);

  return router;
};
