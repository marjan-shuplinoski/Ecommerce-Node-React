import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import User from '../models/User.js';
import { IUser, UserRole } from '../types/user.types';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const JWT_EXPIRES_IN: string | number = process.env.JWT_EXPIRES_IN || '1d';

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const validatePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};


export const generateToken = (user: IUser & { _id?: string; id?: string }): string => {
    // @ts-ignore: TypeScript type mismatch, but this usage is correct for jsonwebtoken
  return jwt.sign(
    { id: user._id || user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};



export const register = async (userData: Partial<IUser>) => {
  const existing = await User.findOne({ email: userData.email });
  if (existing) throw new Error('Email already registered');
  const hashed = await hashPassword(userData.password!);
  const user = new User({ ...userData, password: hashed });
  await user.save();
  return user;
};


export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  const valid = await validatePassword(password, user.password);
  if (!valid) throw new Error('Invalid credentials');
  const token = generateToken(user as IUser & { _id: string });
  return { user, token };
};

export const refreshToken = (user: IUser & { _id: string }) => {
  return generateToken(user);
};
