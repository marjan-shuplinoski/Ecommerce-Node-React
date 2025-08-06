// Coupon entity type definitions for backend

import mongoose from 'mongoose';
export interface Coupon {
  _id: string;
  code: string;
  description?: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
  maxDiscount?: number;
  usageLimit?: number;
  usedCount?: number;
  validFrom?: Date;
  validTo?: Date;
  active?: boolean;
  applicableProducts?: (mongoose.Types.ObjectId | string)[];
  applicableCategories?: (mongoose.Types.ObjectId | string)[];
  usersUsed?: (mongoose.Types.ObjectId | string)[];
  isActive?: boolean;
  expiresAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
