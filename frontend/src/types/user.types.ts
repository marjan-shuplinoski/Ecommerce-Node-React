// User entity type definitions (mirrored from backend)

export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'merchant' | 'admin';
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
