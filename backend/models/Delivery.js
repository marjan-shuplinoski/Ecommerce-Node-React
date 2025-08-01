import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'failed'], default: 'pending' },
  shippedAt: { type: Date },
  deliveredAt: { type: Date },
  trackingNumber: { type: String },
  carrier: { type: String },
  deliveryNotes: { type: String },
}, { timestamps: true });

const Delivery = mongoose.model('Delivery', deliverySchema);
export default Delivery;
