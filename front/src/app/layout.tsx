import { Inter } from "next/font/google";
import "@/scss/main.scss";
import Contexts from "@/contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Manager",
  description: "Um gerenciador de estoque simples e descomplicado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
