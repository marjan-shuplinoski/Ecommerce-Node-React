import mongoose, { Schema } from 'mongoose';
const couponSchema = new Schema({
    code: { type: String, required: true, unique: true },
    description: { type: String },
    discountType: { type: String, enum: ['percentage', 'fixed'], required: true },
    discountValue: { type: Number, required: true },
    minOrderValue: { type: Number, default: 0 },
    maxDiscount: { type: Number },
    usageLimit: { type: Number },
    usedCount: { type: Number, default: 0 },
    validFrom: { type: Date },
    validTo: { type: Date },
    active: { type: Boolean, default: true },
    applicableProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    applicableCategories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    usersUsed: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isActive: { type: Boolean, default: true },
    expiresAt: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true });
const CouponModel = mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);
export default CouponModel;
