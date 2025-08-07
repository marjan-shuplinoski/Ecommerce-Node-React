import mongoose, { Document, Schema, Model } from 'mongoose';
import { IOrder, IOrderItem, OrderStatus } from '../types/order.types.js';

export interface IOrderItemDocument extends IOrderItem, Document {}
export interface IOrderDocument extends Omit<IOrder, '_id'>, Document {}

const orderItemSchema = new Schema<IOrderItemDocument>({
  product: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true, default: 0 },
});

const orderSchema = new Schema<IOrderDocument>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  total: { type: Number, required: true, default: 0 },
  status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.Pending },
  payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
  delivery: { type: Schema.Types.ObjectId, ref: 'Delivery' },
  coupon: { type: Schema.Types.ObjectId, ref: 'Coupon' },
}, { timestamps: true });

const Order: Model<IOrderDocument> = mongoose.models.Order || mongoose.model<IOrderDocument>('Order', orderSchema);
export default Order;
