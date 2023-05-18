import { Router } from "express";
import { userLoginController } from "../../controllers/session/userLogin.controller";
import { retrieveSecurityAskController } from "../../controllers/session/retrieveSecurityAsk.controller";

const router = Router();

export const sessionRoutes = (): Router => {
  router.post("/login", userLoginController);
  router.get("/security-ask/:userName", retrieveSecurityAskController);

  return router;
};
