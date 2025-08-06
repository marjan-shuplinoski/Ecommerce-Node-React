import User from '../models/User';
import { IUser } from '../types/user.types';
import bcrypt from 'bcryptjs';
import { FilterQuery, UpdateQuery } from 'mongoose';

export default {
  async createUser(data: Partial<IUser>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const user = new User(data);
    return user.save();
  },

  async getUserById(id: string) {
    return User.findById(id);
  },

  async getAllUsers() {
    return User.find();
  },

  async updateUser(id: string, data: Partial<IUser>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return User.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  },

  async findUser(query: FilterQuery<IUser>) {
    return User.findOne(query);
  },

  async comparePassword(user: IUser, password: string) {
    return bcrypt.compare(password, user.password);
  }
};
