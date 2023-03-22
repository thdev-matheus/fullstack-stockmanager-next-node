import { Express } from "express";
import { sessionRoutes } from "./session";
import { userRoutes } from "./user";

export const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
};
