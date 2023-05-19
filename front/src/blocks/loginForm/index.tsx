"use client";

import * as C from "@/components";
import { FiLock, FiUser } from "react-icons/fi";
import style from "./styles.module.scss";

export default function LoginForm() {
  return (
    <form className={style.container}>
      <C.Input label="Nome" icon={FiUser} />
      <C.Input label="Senha" icon={FiLock} type="password" />

      <C.Button type="submit">Entrar</C.Button>
    </form>
  );
}
