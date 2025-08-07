import apiClient from './apiClient';
import type { AuthUser } from '../types/auth.types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'merchant' | 'admin';
}

export const login = async (data: LoginRequest): Promise<AuthUser> => {
  const res = await apiClient.post('/users/login', data);
  return res.data;
};

export const register = async (data: RegisterRequest): Promise<AuthUser> => {
  const res = await apiClient.post('/users/register', data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post('/users/logout');
};
