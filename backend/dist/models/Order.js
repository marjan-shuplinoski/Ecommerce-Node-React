import mongoose, { Schema } from 'mongoose';
import { OrderStatus } from '../types/order.types';
const orderItemSchema = new Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true, default: 0 },
});
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    total: { type: Number, required: true, default: 0 },
    status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.Pending },
    payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
    delivery: { type: Schema.Types.ObjectId, ref: 'Delivery' },
    coupon: { type: Schema.Types.ObjectId, ref: 'Coupon' },
}, { timestamps: true });
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
