import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const isStaffMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userIsAdm } = req;

  if (!userIsAdm) {
    throw new AppError(
      401,
      "Esta rota só pode ser acessada por um cliente administrador deste sistema"
    );
  }

  next();
};
