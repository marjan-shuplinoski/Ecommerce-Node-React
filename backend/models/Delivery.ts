import mongoose, { Document, Schema, Model } from 'mongoose';
import { Delivery, DeliveryStatus } from '../types/delivery.types.js';

export interface IDeliveryDocument extends Omit<Delivery, '_id'>, Document {}

const deliverySchema = new Schema<IDeliveryDocument>({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  shippedAt: { type: Date },
  deliveredAt: { type: Date },
  trackingNumber: { type: String },
  carrier: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, { timestamps: true });

const DeliveryModel: Model<IDeliveryDocument> = mongoose.models.Delivery || mongoose.model<IDeliveryDocument>('Delivery', deliverySchema);
export default DeliveryModel;
