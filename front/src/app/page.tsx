"use client";
import * as C from "@/components";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

export default function Home() {
  const [activeOpt, setActiveOpt] = useState("teste 1");
  const options = [
    "teste 1",
    "teste 2",
    "teste 3",
    "teste 4",
    "teste 5",
    "teste 6",
  ];

  return (
    <div className="w-full h-full">
      <div className="w-[15rem]">
        <C.Input
          label="teste"
          icon={FiUser}
          placeholder="placeholder"
          type="password"
        />
      </div>

      <div className="w-[15rem] mt-4">
        <C.Select
          label="Select Primary"
          activeOpt={activeOpt}
          options={options}
          setAction={setActiveOpt}
        />
      </div>

      <div className="w-[15rem] mt-4">
        <C.Select
          label="Select Secondary"
          activeOpt={activeOpt}
          options={options}
          setAction={setActiveOpt}
          secondary
        />
      </div>

      <div className="w-[15rem] mt-4">
        <C.Button>Teste</C.Button>
      </div>
    </div>
  );
}
