"use client";

import { useUserContext } from "@/contexts/user";
import { ICompany } from "@/globalTypes/company";
import { useEffect, useState } from "react";
import { toast } from "react-toast";
import * as B from "@//blocks";
import api from "@/services/api";

export default function StaffCompaniesPage() {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [displayedCompanies, setDisplayedCompanies] = useState<ICompany[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const { protectStaffRoute } = useUserContext();
  const token = localStorage.getItem("@SM-TOKEN");

  const filterChange = (value: string) => {
    setFilterValue(value);

    if (value === "") {
      setDisplayedCompanies(companies);
    }
  };

  const filterCompanies = () => {
    const newCompanies = companies.filter((company) =>
      company.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    setDisplayedCompanies(newCompanies);
  };

  const getAllCompanies = async () => {
    try {
      const response = await api.get("/companies", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCompanies(response.data.results);
      setDisplayedCompanies(response.data.results);
    } catch (error) {
      toast.error("erro ao buscar todas as empresas");
    }
  };

  useEffect(() => {
    protectStaffRoute();
    getAllCompanies();
  }, []);

  return (
    <section className="w-1/2 max-md:w-full flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-8">Empresas</h1>

      <B.Filter
        placeholder="Procurar empresas"
        filterValue={filterValue}
        onFilterChange={filterChange}
        onFilterAction={filterCompanies}
      />

      <section>
        {displayedCompanies?.map((company) => (
          <p key={company.id}>{company.name}</p>
        ))}
      </section>
    </section>
  );
}
