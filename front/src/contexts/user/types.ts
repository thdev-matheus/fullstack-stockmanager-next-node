import { IUserLoginRequest } from "@/globalTypes/session";
import { ReactNode } from "react";

export interface IUserContext {
  userLogin: (data: IUserLoginRequest) => void;
}

export interface IUserProviderProps {
  children: ReactNode;
}
