import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const isStaffMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userIsStaff } = req;

  if (!userIsStaff) {
    throw new AppError(
      401,
      "Esta rota só pode ser acessada por um staff de manutenção de código autorizado"
    );
  }

  next();
};
