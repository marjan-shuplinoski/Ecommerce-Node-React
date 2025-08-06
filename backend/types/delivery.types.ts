// Delivery entity type definitions for backend

export type DeliveryStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

import mongoose from 'mongoose';
export interface Delivery {
  _id: string;
  order: mongoose.Types.ObjectId | string;
  address: string;
  status: DeliveryStatus;
  shippedAt?: Date;
  deliveredAt?: Date;
  trackingNumber?: string;
  carrier?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
