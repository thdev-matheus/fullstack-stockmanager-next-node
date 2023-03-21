import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { readAllUsersController } from "../../controllers/user/readAllUsers.controller";

import { createUserValidationFieldsMiddleware } from "../../middlewares/createUserValidationFields.middleware";

import { createUserSchema } from "../../schemas/createUser.schema";

const router = Router();

export const userRoutes = (): Router => {
  router.post(
    "",
    createUserValidationFieldsMiddleware(createUserSchema),
    createUserController
  );
  router.get("", readAllUsersController);

  return router;
};
