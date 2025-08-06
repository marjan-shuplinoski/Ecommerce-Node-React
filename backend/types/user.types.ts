export enum UserRole {
  Admin = 'admin',
  Merchant = 'merchant',
  User = 'user',
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  orders?: string[];
  cart?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
