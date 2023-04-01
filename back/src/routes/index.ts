import { Express } from "express";
import { sessionRoutes } from "./session";
import { userRoutes } from "./user";
import { categoryRoutes } from "./category";

export const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/categories", categoryRoutes());
};
