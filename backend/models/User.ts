import mongoose, { Document, Schema, Model } from 'mongoose';
import { IUser, UserRole } from '../types/user.types.js';

export interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.User },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
}, { timestamps: true });

const User: Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', userSchema);
export default User;
