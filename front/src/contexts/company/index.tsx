"use client";

import * as T from "./types";
import { createContext, useContext } from "react";

const companyContext = createContext<T.ICompanyContext>(
  {} as T.ICompanyContext
);

export const useCompanyContext = () => {
  const context = useContext(companyContext);

  return context;
};

export default function CompanyProviver({ children }: T.ICompanyProviderProps) {
  return (
    <companyContext.Provider value={{}}>{children}</companyContext.Provider>
  );
}
