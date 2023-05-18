import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";

export const retrieveSecurityAskService = async (name: string) => {
  if (!name) {
    throw new AppError(400, "name: campo obrigatório");
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ name });

  if (!user) {
    throw new AppError(404, "usuário não encontrado");
  }

  return { securityAsk: user.securityAsk.toLowerCase() };
};
