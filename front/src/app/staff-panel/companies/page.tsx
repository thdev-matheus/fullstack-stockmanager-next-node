"use client";

import { useUserContext } from "@/contexts/user";
import { ICompany } from "@/globalTypes/company";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { toast } from "react-toast";

export default function StaffCompaniesPage() {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const { protectStaffRoute } = useUserContext();
  const token = localStorage.getItem("@SM-TOKEN");

  const getAllCompanies = async () => {
    try {
      const response = await api.get("/companies", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCompanies(response.data.results);
    } catch (error) {
      toast.error("erro ao buscar todas as empresas");
    }
  };

  useEffect(() => {
    protectStaffRoute();
    getAllCompanies();
  }, []);

  return (
    <>
      {companies?.map((company) => (
        <p key={company.id}>{company.name}</p>
      ))}
    </>
  );
}
