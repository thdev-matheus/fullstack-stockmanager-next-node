"use client";

import { useUserContext } from "@/contexts/user";
import { ICompany } from "@/globalTypes/company";
import { useEffect, useState } from "react";
import { toast } from "react-toast";
import * as B from "@//blocks";
import * as C from "@//components";
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
    <section className="flex flex-col items-center justify-start w-3/4 gap-8 max-md:w-full">
      <h1 className="mb-4 text-4xl font-bold">Empresas</h1>

      <B.Filter
        placeholder="Procurar empresas"
        filterValue={filterValue}
        onFilterChange={filterChange}
        onFilterAction={filterCompanies}
      />

      <section className="w-full">
        {displayedCompanies?.map((company) => (
          <C.CompanyRowCard
            key={company.id}
            company={company}
            toggleEditModal={() => {}}
          />
        ))}
      </section>
    </section>
  );
}
