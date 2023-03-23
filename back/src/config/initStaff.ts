import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

export const initStaff = async (): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  const staffAlreadyExists = await userRepo.findOneBy({ name: "Theus" });

  if (!staffAlreadyExists) {
    const staff = userRepo.create({
      name: "Theus",
      password: "$2b$10$4KiN0bfjIedoVdbWAaC2PegM5zpwjAoKV1NGBDItldWsO/WOomGIW",
      securityAsk: "Data de casamento na igreja",
      securityAnswer: "23/02/2019",
      isAdm: true,
      isStaff: true,
    });

    await userRepo.save(staff);

    console.log("Usuário staff criado com sucesso");
  } else {
    console.log("Usuário staff já existente no banco de dados");
  }
};
