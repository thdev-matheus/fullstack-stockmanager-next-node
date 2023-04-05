import { Category } from "../entities/category";

export interface IProduct {
  id: string;
  name: string;
  stock: number;
  purchasePrice: number;
  salePrice: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductRequest {
  name?: string;
  stock?: number;
  purchasePrice?: number;
  salePrice?: number;
  categoryName?: string;
}
