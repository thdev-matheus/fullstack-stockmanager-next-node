import * as yup from "yup";
import { IProductRequest } from "../types/product";

export const createProductSchema: yup.SchemaOf<IProductRequest> = yup
  .object()
  .shape({
    categoryName: yup.string().optional(),

    name: yup.string().required("name: campo obrigatório"),

    purchasePrice: yup
      .number()
      .required("purchasePrice: campo obrigatório")
      .min(0),

    salePrice: yup.number().required("salePrice: campo obrigatório").min(0),

    stock: yup.number().required("stock: campo obrigatório").min(0),
  });

export const updateProductSchema: yup.SchemaOf<IProductRequest> = yup
  .object()
  .shape({
    categoryName: yup.string().optional(),

    name: yup.string().optional(),

    purchasePrice: yup.number().optional().min(0),

    salePrice: yup.number().optional().min(0),

    stock: yup.number().optional().min(0),
  });
