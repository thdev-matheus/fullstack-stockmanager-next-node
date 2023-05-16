import { ICategory } from "./category";
import { IProduct } from "./product";
import { ISale } from "./sale";
import { IUser } from "./user";

export interface ICompany {
  id: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  users?: IUser[];
  products?: IProduct[];
  sales?: ISale[];
  categories?: ICategory[];
}

export interface ICompanyRequest {
  name: string;
  image: string;
}
