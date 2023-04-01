import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";

export const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  await userRepo.delete(id);

  return true;
};
