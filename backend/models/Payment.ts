import mongoose, { Document, Schema, Model } from 'mongoose';
import { Payment, PaymentStatus } from '../types/payment.types.js';

export interface IPaymentDocument extends Omit<Payment, '_id'>, Document {}

const paymentSchema = new Schema<IPaymentDocument>({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  method: { type: String, required: true },
  status: { type: String, enum: ['unpaid', 'pending', 'paid', 'failed', 'refunded'], default: 'unpaid' },
  transactionId: { type: String },
  provider: { type: String },
  paidAt: { type: Date },
  receiptUrl: { type: String },
  failureReason: { type: String },
  refundId: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, { timestamps: true });

const PaymentModel: Model<IPaymentDocument> = mongoose.models.Payment || mongoose.model<IPaymentDocument>('Payment', paymentSchema);
export default PaymentModel;
