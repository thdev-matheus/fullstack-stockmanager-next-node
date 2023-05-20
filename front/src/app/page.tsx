"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/login">Ir para Login</Link>
    </>
  );
}
