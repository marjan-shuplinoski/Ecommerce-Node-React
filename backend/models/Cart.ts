import mongoose, { Document, Schema, Model } from 'mongoose';
import { Cart, CartItem } from '../types/cart.types.js';

export interface ICartItemDocument extends CartItem, Document {}
export interface ICartDocument extends Omit<Cart, '_id'>, Document {}

const cartItemSchema = new Schema<ICartItemDocument>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
});

const cartSchema = new Schema<ICartDocument>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [cartItemSchema],
  total: { type: Number, default: 0 },
  coupon: { type: Schema.Types.ObjectId, ref: 'Coupon' },
}, { timestamps: true });

const Cart: Model<ICartDocument> = mongoose.models.Cart || mongoose.model<ICartDocument>('Cart', cartSchema);
export default Cart;
