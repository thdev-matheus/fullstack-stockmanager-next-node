"use client";

import { useCompanyContext } from "@/contexts/company";
import { useUserContext } from "@/contexts/user";

export default function StaffCompaniesPage() {
  const { companies } = useUserContext();

  return (
    <>
      {companies?.map((company) => (
        <p key={company.id}>{company.name}</p>
      ))}
    </>
  );
}
