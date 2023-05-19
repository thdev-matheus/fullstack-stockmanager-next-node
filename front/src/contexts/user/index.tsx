"use client";

import * as T from "./types";
import { createContext, useContext } from "react";

const userContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUserContext = () => {
  const context = useContext(userContext);

  return context;
};

export default function UserProviver({ children }: T.IUserProviderProps) {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
}
