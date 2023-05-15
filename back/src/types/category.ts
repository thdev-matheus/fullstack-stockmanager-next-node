import { Product } from "../entities/product";

export interface ICategory {
  id: string;
  name: string;
  products: Product[];
}

export interface ICategoryRequest {
  name: string;
}
