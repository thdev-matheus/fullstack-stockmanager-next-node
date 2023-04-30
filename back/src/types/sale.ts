import { SaleProduct } from "../entities/sale-product";
import { User } from "../entities/user";

export interface ISale {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  user: User;
  products: SaleProduct[];
}

export interface ISaleRequest {
  description: string;
  products: ISaleProduct[];
}

export interface ISaleProduct {
  productId: string;
  quantity: number;
}
