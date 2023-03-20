import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";
import { IUserRequest, IUser } from "../../types/user";

export const createUserService = async ({
  isAdm,
  name,
  password,
  securityAnswer,
  securityAsk,
}: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);
  const userAlreadyExists = await userRepo.findOneBy({ name });

  if (userAlreadyExists && userAlreadyExists.isActive) {
    throw new AppError(409, "Usuário já existe no banco de dados");
  }

  if (userAlreadyExists && !userAlreadyExists.isActive) {
    await userRepo.update(userAlreadyExists.id, { isActive: true });

    const user = await userRepo.findOneBy({ name });

    return user!;
  }

  const newUser = userRepo.create({
    name,
    password,
    securityAnswer,
    securityAsk,
    isAdm,
  });

  await userRepo.save(newUser);

  return newUser;
};
