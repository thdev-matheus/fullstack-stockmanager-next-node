export interface IUser {
  id: string;
  name: string;
  password: string;
  isAdm: boolean;
  securityAsk: string;
  securityAnswer: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRequest {
  name?: string;
  password?: string;
  isAdm?: boolean;
  securityAsk?: string;
  securityAnswer?: string;
}
