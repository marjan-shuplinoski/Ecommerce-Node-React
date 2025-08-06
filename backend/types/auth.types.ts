export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export interface IJWTPayload {
  id: string;
  role: string;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}
