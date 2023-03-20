import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { readAllUsersController } from "../../controllers/user/readAllUsers.controller";

const router = Router();

export const userRoutes = (): Router => {
  router.post("", createUserController);
  router.get("", readAllUsersController);

  return router;
};
