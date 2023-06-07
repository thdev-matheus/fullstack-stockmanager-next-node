import { ICategory, ICategoryCreateRequest } from "@/globalTypes/category";
import { ICompany } from "@/globalTypes/company";
import { IProduct } from "@/globalTypes/product";
import { ISale } from "@/globalTypes/sale";
import { IUser } from "@/globalTypes/user";
import { ReactNode } from "react";

export interface ICompanyContext {
  company: ICompany;
  companyCategories: ICategory[];
  companyProducts: IProduct[];
  companySales: ISale[];
  companyUsers: IUser[];
  createCompany: (
    data: ICategoryCreateRequest,
    toggle: () => void
  ) => Promise<void>;
}

export interface ICompanyProviderProps {
  children: ReactNode;
}
