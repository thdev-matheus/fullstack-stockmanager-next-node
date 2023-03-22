import { Router } from "express";
import { userLoginController } from "../../controllers/session/userLogin.controller";

const router = Router();

export const sessionRoutes = (): Router => {
  router.post("", userLoginController);

  return router;
};
