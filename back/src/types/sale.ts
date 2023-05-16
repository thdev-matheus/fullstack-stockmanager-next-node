import { User } from "../entities/user";
import { ICompany } from "./company";

export interface ISale {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  user: User;
  products: ISaleProduct[];
  company: ICompany;
}

export interface ISaleRequest {
  description: string;
  products: ISaleProduct[];
  companyId?: string;
}

export interface ISaleProduct {
  productId: string;
  quantity: number;
}
