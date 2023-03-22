import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";
import { IUserLogin } from "../../types/user";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export const userLoginService = async ({ name, password }: IUserLogin) => {
  if (!name || !password) {
    throw new AppError(400, "campos email e password são obrigatórios");
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ name });

  if (!user) {
    throw new AppError(401, "nome ou senha inválidos");
  }

  if (!user.isActive) {
    user.isActive = true;
    await userRepo.save(user);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError(401, "nome ou senha inválidos");
  }

  const token = jwt.sign(
    { userId: user.id, userName: user.name },
    process.env.SECRET_KEY!,
    { expiresIn: "24h" }
  );

  return { token, user };
};