import * as T from "./types";
import { IoMdSettings } from "react-icons/io";

export default function CompanyRowCard({
  company: { image, createdAt, name },
  toggleEditModal,
}: T.ICompanyRowCardProps) {
  const criationDate = new Date(createdAt);

  const createdDate = `criado em ${
    criationDate.getDay() < 10
      ? "0" + criationDate.getDay()
      : criationDate.getDay()
  }/${
    criationDate.getMonth() < 10
      ? "0" + criationDate.getMonth()
      : criationDate.getMonth()
  }/${criationDate.getFullYear()}`;

  return (
    <div
      className="flex items-center justify-between w-full h-20 gap-2 px-4 py-2 cursor-pointer max-md:px-2 rounded-2xl bg-zinc-700"
      onClick={toggleEditModal}
    >
      <div className="h-full max-lg:min-w-[20%] w-[15%] max-sm:h-3/4 flex justify-center items-center">
        <img src={image} alt={`logo-${name}`} className="h-full rounded-full" />
      </div>

      <h3 className="px-2 leading-4 text-center max-lg:text-sm text-base min-w-[40%] h-full flex items-center justify-center border-x border-zinc-500 font-bold">
        {name}
      </h3>

      <span className="leading-4 max-lg:text-[7pt] text-center text-sm min-w-[30%] h-full flex items-center justify-center">
        {createdDate}
      </span>
    </div>
  );
}
