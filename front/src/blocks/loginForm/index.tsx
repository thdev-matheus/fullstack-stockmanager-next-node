"use client";

import * as C from "@/components";
import { FiLock, FiUser } from "react-icons/fi";
import style from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { IUserLoginRequest } from "@/globalTypes/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@/schemas/session";
import { useUserContext } from "@/contexts/user";
export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserLoginRequest>({
    resolver: zodResolver(userLoginSchema),
    reValidateMode: "onSubmit",
  });

  const { userLogin } = useUserContext();

  const loginSubmit = async (data: IUserLoginRequest) => {
    await userLogin(data);
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(loginSubmit)}>
      <C.Input
        label="Nome"
        icon={FiUser}
        type="text"
        {...register("name")}
        error={errors.name?.message}
      />
      <C.Input
        label="Senha"
        icon={FiLock}
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />

      <C.Button type="submit">Entrar</C.Button>
    </form>
  );
}
