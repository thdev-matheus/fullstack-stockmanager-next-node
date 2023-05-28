"use client";

import { createContext, useContext, useState } from "react";
import { IUser } from "@/globalTypes/user";
import { IUserLoginRequest } from "@/globalTypes/session";
import * as T from "./types";
import { toast } from "react-toast";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { ICompany } from "@/globalTypes/company";

const userContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUserContext = () => {
  const context = useContext(userContext);

  return context;
};

export default function UserProvider({ children }: T.IUserProviderProps) {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [nextUsers, setNextUsers] = useState<string | null>(null);
  const [previousUsers, setPreviousUsers] = useState<string | null>(null);
  const [companies, setCompanies] = useState<ICompany[] | null>(null);

  const router = useRouter();

  const getAllCompanies = async () => {
    const token = localStorage.getItem("@SM-TOKEN");

    try {
      const response = await api.get("/companies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCompanies(response.data.results);
    } catch (error) {
      toast.error("Algo de errado na busca pelas empresas");
    }
  };

  const getAllUsers = async () => {
    const token = localStorage.getItem("@SM-TOKEN");

    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.results);
      setNextUsers(response.data.next);
      setPreviousUsers(response.data.previous);
    } catch (error) {
      toast.error("Algo de errado na busca pelos usuários");
    }
  };

  const userLogin = async (data: IUserLoginRequest) => {
    try {
      const response = await api.post("/session/login", data);

      localStorage.setItem("@SM-TOKEN", response.data.token);
      localStorage.setItem("@SM-USER-ID", response.data.user.id);

      setUser(response.data.user);
      toast.success("Sucesso!");

      if (response.data.user.isStaff) {
        getAllCompanies();
        getAllUsers();
      }

      router.push("/staff-panel");
    } catch (error) {
      toast.error("Algo deu errado");
      router.push("/erro");
    }
  };

  return (
    <userContext.Provider
      value={{ userLogin, user, users, companies, nextUsers, previousUsers }}
    >
      {children}
    </userContext.Provider>
  );
}
