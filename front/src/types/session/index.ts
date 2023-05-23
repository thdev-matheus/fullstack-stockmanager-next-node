export interface IUserLoginRequest {
  name: string;
  password: string;
}

export interface IUserRecoverPasswordRequest {
  securityAnswer: string;
  newPassword: string;
}
