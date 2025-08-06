import mongoose from 'mongoose';
import User from '../../models/User';
import { generateToken, hashPassword } from '../../services/authService';
import { UserRole } from '../../types/user.types';

export async function createTestUser(role: UserRole, email: string) {
  const password = await hashPassword('testpass');
  const user = new User({
    name: `${role} user`,
    email,
    password,
    role,
  });
  await user.save();
  // Ensure _id is string for token
  const token = generateToken({ ...user.toObject(), _id: String(user._id) });
  return { user, token };
}
