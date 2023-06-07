import * as T from "./types";

export default function CompanyRowCard({
  company: { image, createdAt, name },
}: T.ICompanyRowCardProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
