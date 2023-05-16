import { ICategory } from "./category";
import { ICompany } from "./company";
import { IUser } from "./user";

export interface IProduct {
  id: string;
  name: string;
  stock: number;
  purchasePrice: number;
  salePrice: number;
  category: ICategory | null;
  createdAt: Date;
  updatedAt: Date;
  company: ICompany;
  user?: IUser;
}

export interface IProductRequest {
  name?: string;
  stock?: number;
  purchasePrice?: number;
  salePrice?: number;
  categoryName?: string | null;
  companyId?: string | null;
}

export interface IFilterProduct {
  name?: string;
  stockLess?: number;
  stockMore?: number;
  categoryName?: string;
  companyId?: string;
}
