import * as yup from "yup";
import { ISaleProduct, ISaleRequest } from "../types/sale";

const productSchema: yup.SchemaOf<ISaleProduct> = yup.object().shape({
  productId: yup.string().required("productId: campo obrigatório"),

  quantity: yup
    .number()
    .required("quantity: campo obrigatório")
    .moreThan(0)
    .truncate(),
});

export const createSaleSchema: yup.SchemaOf<ISaleRequest> = yup.object().shape({
  description: yup.string().required("description: campo obrigatório"),

  products: yup
    .array()
    .of(productSchema)
    .required("products: campo obrigatório"),

  companyId: yup.string().optional(),
});
