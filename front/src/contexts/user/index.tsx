"use client";

import { createContext, useContext, useState } from "react";
import { IUser } from "@/globalTypes/user";
import { IUserLoginRequest } from "@/globalTypes/session";
import * as T from "./types";
import { toast } from "react-toast";
import { useRouter } from "next/navigation";
import api from "@/services/api";

const userContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUserContext = () => {
  const context = useContext(userContext);

  return context;
};

export default function UserProvider({ children }: T.IUserProviderProps) {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const router = useRouter();

  const userLogin = async (data: IUserLoginRequest) => {
    try {
      const response = await api.post("/session/login", data);

      localStorage.setItem("@SM-TOKEN", response.data.token);
      localStorage.setItem("@SM-USER-ID", response.data.user.id);

      setUser(response.data.user);
      toast.success("Sucesso!");
      router.push("/staff-panel");
    } catch (error) {
      toast.error("Algo deu errado");
      router.push("/erro");
    }
  };

  return (
    <userContext.Provider value={{ userLogin, user }}>
      {children}
    </userContext.Provider>
  );
}
