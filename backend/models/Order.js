import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: String, required: true }, // Replace with ObjectId ref to Product if/when Product model exists
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true, default: 0 },
  }],
  total: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
  coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
