"use client";

import Link from "next/link";
import style from "./styles.module.scss";
import * as C from "@/components";
import { FiLock } from "react-icons/fi";

export default function LoginPage() {
  const fiLock = () => <FiLock />;
  return (
    <section className={style.container}>
      <div className={style.container__box}>
        <h1>Faça o seu login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <C.Input label="teste" />
          <C.Input
            label="teste2"
            icon={fiLock}
            iconAction={() => console.log("teste")}
            type="password"
          />

          <C.Button type="submit">Entrar</C.Button>
        </form>
        <p>
          Não tem login?{" "}
          <Link className={style.link} href="/request">
            Solicite
          </Link>{" "}
          seu usuário
        </p>
      </div>
    </section>
  );
}
