import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import { FindOneOptions } from "typeorm";

export const readAllUsersService = async (
  currentURL: string,
  page: number = 1,
  limit: number = 5
) => {
  if (!page) page = 1;
  if (!limit) limit = 5;

  page = Number(page);
  limit = Number(limit);

  const userRepo = AppDataSource.getRepository(User);
  const count = await userRepo.count();

  page < 1 || (page * limit > count && (page = 1));
  limit < 1 && (limit = 5);

  const skip = (page - 1) * limit;

  const users = await userRepo.find({
    skip,
    take: limit,
    order: { createdAt: "desc" },
  });

  const next =
    page * limit <= count
      ? `${currentURL}?page=${page + 1}&limit=${limit}`
      : null;

  const previous =
    page <= 1 ? null : `${currentURL}?page=${page - 1}&limit=${limit}`;

  const response = {
    page,
    next,
    previous,
    limit,
    result: users,
  };

  return response;
};
