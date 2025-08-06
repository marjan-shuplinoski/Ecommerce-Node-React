// Payment entity type definitions for backend

export type PaymentStatus = 'unpaid' | 'pending' | 'paid' | 'failed' | 'refunded';

import mongoose from 'mongoose';
export interface Payment {
  _id: string;
  order: mongoose.Types.ObjectId | string;
  user?: mongoose.Types.ObjectId | string;
  amount: number;
  currency?: string;
  method: string;
  status: PaymentStatus;
  transactionId?: string;
  provider?: string;
  paidAt?: Date;
  receiptUrl?: string;
  failureReason?: string;
  refundId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
