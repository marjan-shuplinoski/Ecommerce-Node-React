import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'merchant', 'user'], default: 'user' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
