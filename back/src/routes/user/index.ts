import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";

const router = Router();

export const userRoutes = (): Router => {
  router.post("", createUserController);

  return router;
};
