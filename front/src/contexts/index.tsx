"use client";
import { ReactNode } from "react";
import UserProviver from "./user";
import CompanyProviver from "./company";
import { ToastContainer } from "react-toast";
interface IContextsProps {
  children: ReactNode;
}

export default function Contexts({ children }: IContextsProps) {
  return (
    <>
      <UserProviver>
        <CompanyProviver>{children}</CompanyProviver>
      </UserProviver>
      <ToastContainer delay={3000} />
    </>
  );
}
