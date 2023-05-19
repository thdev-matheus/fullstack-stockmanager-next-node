export interface IUserLoginRequest {
  name: "string";
  password: "string";
}

export interface IUserCreateRequest {
  name: string;
  password: string;
  isAdm: boolean;
  securityAsk: string;
  securityAnswer: string;
  companyId: string;
}
