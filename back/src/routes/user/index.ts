import { Router } from "express";
import { createUserController } from "../../controllers/user/createUser.controller";
import { deleteUserController } from "../../controllers/user/deleteUser.controller";
import { readAllUsersController } from "../../controllers/user/readAllUsers.controller";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller";
import { updateUserController } from "../../controllers/user/updateUser.controller";

import { createUserValidationFieldsMiddleware } from "../../middlewares/createUserValidationFields.middleware";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { isStaffOrOwnerMiddleware } from "../../middlewares/isStaffOrOwner.middleware";
import { updateUserValidationFieldsMiddleware } from "../../middlewares/updateUserValidationFields.middleware";

import {
  createUserSchema,
  updateUserSchema,
} from "../../schemas/createUser.schema";

const router = Router();

export const userRoutes = (): Router => {
  router.use(isAuthenticatedMiddleware, isStaffOrOwnerMiddleware);

  router.post(
    "",
    createUserValidationFieldsMiddleware(createUserSchema),
    createUserController
  );

  router.get("", readAllUsersController);

  router.get("/:userId", retrieveUserController);

  router.patch(
    "/:userId",
    updateUserValidationFieldsMiddleware(updateUserSchema),
    updateUserController
  );

  router.delete("/:userId", deleteUserController);

  return router;
};
