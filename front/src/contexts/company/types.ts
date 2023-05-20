import { ICompany } from "@/globalTypes/company";
import { ReactNode } from "react";

export interface ICompanyContext {
  company: ICompany;
}

export interface ICompanyProviderProps {
  children: ReactNode;
}
