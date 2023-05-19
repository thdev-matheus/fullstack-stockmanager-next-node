import { ReactNode } from "react";
import UserProviver from "./user";
import CompanyProviver from "./company";

interface IContextsProps {
  children: ReactNode;
}

export default function Contexts({ children }: IContextsProps) {
  return (
    <>
      <UserProviver>
        <CompanyProviver>{children}</CompanyProviver>
      </UserProviver>
    </>
  );
}
