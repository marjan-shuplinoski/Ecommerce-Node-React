import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  method: { type: String, required: true }, // e.g., 'card', 'paypal', 'bank'
  status: { type: String, enum: ['unpaid', 'pending', 'paid', 'failed', 'refunded'], default: 'unpaid' },
  transactionId: { type: String },
  provider: { type: String }, // e.g., 'Stripe', 'PayPal'
  paidAt: { type: Date },
  receiptUrl: { type: String },
  failureReason: { type: String },
  refundId: { type: String },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
