// Auth-related type definitions (mirrored from backend)

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'merchant' | 'admin';
}
