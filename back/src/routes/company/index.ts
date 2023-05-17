import { Router } from "express";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { createCompanyController } from "../../controllers/company/createCompany.controller";

const router = Router();

export const companyRoutes = () => {
  router.post("", isStaffOrOwnerMiddleware, createCompanyController);

  return router;
};
