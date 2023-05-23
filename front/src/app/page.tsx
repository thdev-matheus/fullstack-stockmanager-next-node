"use client";
import * as C from "@/components";
import { FiUser } from "react-icons/fi";

export default function Home() {
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
    </div>
  );
}
