import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";
import { IUserRequest, IUser } from "../../types/user";
import { hashSync } from "bcrypt";
import { Company } from "../../entities/company";

export const createUserService = async ({
  isAdm,
  name,
  password,
  securityAnswer,
  securityAsk,
  userCompanyId,
}: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);
  const companyRepo = AppDataSource.getRepository(Company);

  const userAlreadyExists = await userRepo.findOneBy({ name });
  const company = await companyRepo.findOneBy({ id: userCompanyId });

  const hashedPassword = hashSync(password!, 10);

  if (userAlreadyExists && userAlreadyExists.isActive) {
    throw new AppError(409, "Usuário já existe no banco de dados");
  }

  if (userAlreadyExists && !userAlreadyExists.isActive) {
    await userRepo.update(userAlreadyExists.id, {
      isActive: true,
      name,
      isAdm,
      password: hashedPassword,
      securityAnswer,
      securityAsk,
    });

    const user = await userRepo.findOneBy({ name });

    return user!;
  }

  if (!company) {
    throw new AppError(404, "empresa não localizada no banco de dados");
  }

  const newUser = userRepo.create({
    name,
    password: hashedPassword,
    securityAnswer,
    securityAsk,
    isAdm,
    company,
  });

  await userRepo.save(newUser);

  return newUser;
};
