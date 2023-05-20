import { IUserLoginRequest } from "@/globalTypes/session";
import { IUser } from "@/globalTypes/user";
import { ReactNode } from "react";

export interface IUserContext {
  user: IUser | undefined;
  userLogin: (data: IUserLoginRequest) => Promise<void>;
}

export interface IUserProviderProps {
  children: ReactNode;
}
