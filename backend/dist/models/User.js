import mongoose, { Schema } from 'mongoose';
import { UserRole } from '../types/user.types';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.User },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
}, { timestamps: true });
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
