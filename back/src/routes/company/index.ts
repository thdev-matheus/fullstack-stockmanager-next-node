import { Router } from "express";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { createCompanyController } from "../../controllers/company/createCompany.controller";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { readAllCompaniesController } from "../../controllers/company/readAllCompanies.controller";
import { readOneCompanyController } from "../../controllers/company/readOneCompany.controller";
import { readCompanyCategoriesController } from "../../controllers/company/readCompanyCategories.controller";
import { readCompanyUsersController } from "../../controllers/company/readCompanyUsers.controller";
import { readCompanyProductsController } from "../../controllers/company/readCompanyProducts.controller";

const router = Router();

export const companyRoutes = () => {
  router.use(isAuthenticatedMiddleware);

  // rotas abertas de leitura de informações sobre a empresa
  router.get("/:companyId", readOneCompanyController);
  router.get("/:companyId/categories", readCompanyCategoriesController);
  router.get("/:companyId/products", readCompanyProductsController);

  // rotas de staff
  router.use(isStaffOrOwnerMiddleware);

  router.post("", createCompanyController);
  router.get("", readAllCompaniesController);
  router.get("/:companyId/users", readCompanyUsersController);

  return router;
};
