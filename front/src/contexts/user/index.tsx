"use client";

import { IUser } from "@/globalTypes/user";
import * as T from "./types";
import { createContext, useContext, useState } from "react";
import { IUserLoginRequest } from "@/globalTypes/session";
import { toast } from "react-toast";

const userContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUserContext = () => {
  const context = useContext(userContext);

  return context;
};

export default function UserProviver({ children }: T.IUserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);

  const userLogin = async (data: IUserLoginRequest) => {
    toast.success("sucesso!");
    console.log(data);

    try {
    } catch (error) {}
  };

  return (
    <userContext.Provider value={{ userLogin }}>
      {children}
    </userContext.Provider>
  );
}
