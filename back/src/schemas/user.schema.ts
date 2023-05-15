import * as yup from "yup";
import { IUserRequest } from "../types/user";

export const createUserSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("name: campo obrigatório.").min(4),

  password: yup
    .string()
    .required("password: campo obrigatório")
    .max(50)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password: a senha deve conter ao menos uma letra maiúscula, uma minúscula, um caractere especial, um número e no mínimo 8 dígitos"
    ),

  isAdm: yup.boolean().optional(),

  securityAsk: yup.string().required("securityAsk: campo obrigatório").max(150),

  securityAnswer: yup
    .string()
    .required("securityAnswer: campo obrigatório")
    .max(100),

  userCompanyId: yup.string().required("userCompanyId: campo obrigatório"),
});

export const updateUserSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().optional().min(4),

  password: yup
    .string()
    .optional()
    .max(50)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password: a senha deve conter ao menos uma letra maiúscula, uma minúscula, um caractere especial, um número e no mínimo 8 dígitos"
    ),

  isAdm: yup.boolean().optional(),

  securityAsk: yup.string().optional().max(150),

  securityAnswer: yup.string().optional().max(100),

  userCompanyId: yup.string().optional(),
});
