import { ReactNode } from "react";
import UserProviver from "./user";

interface IContextsProps {
  children: ReactNode;
}

export default function Contexts({ children }: IContextsProps) {
  return (
    <>
      <UserProviver>{children}</UserProviver>
    </>
  );
}
