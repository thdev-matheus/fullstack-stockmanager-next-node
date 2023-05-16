import { Product } from "../entities/product";
import { ICompany } from "./company";

export interface ICategory {
  id: string;
  name: string;
  products: Product[];
  company: ICompany;
}

export interface ICategoryRequest {
  name: string;
  companyId?: string;
}
