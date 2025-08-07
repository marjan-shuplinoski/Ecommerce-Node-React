import mongoose, { Schema } from 'mongoose';
const deliverySchema = new Schema({
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
const DeliveryModel = mongoose.models.Delivery || mongoose.model('Delivery', deliverySchema);
export default DeliveryModel;
