"use client";
import Link from "next/link";
import style from "./styles.module.scss";
import * as B from "@/blocks";

export default function LoginPage() {
  return (
    <section className={style.container}>
      <div className={style.container__box}>
        <h1>Faça o seu login</h1>

        <B.LoginForm />

        <p>
          Esqueceu sua senha?{" "}
          <Link className={style.link} href="/request">
            Solicite
          </Link>{" "}
          a recuperação.
        </p>
      </div>
    </section>
  );
}
