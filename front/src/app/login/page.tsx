import Link from "next/link";
import style from "./styles.module.scss";

export default function LoginPage() {
  return (
    <section className={style.container}>
      <div className={style.container__box}>
        <h1>Faça o seu login</h1>
        <form>
          <input type="text" />
          <input type="text" />
          <button type="submit">Entrar</button>
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
