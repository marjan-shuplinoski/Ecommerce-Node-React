export enum OrderStatus {
  Pending = 'pending',
  Paid = 'paid',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
}

import mongoose from 'mongoose';
export interface IOrderItem {
  product: mongoose.Types.ObjectId | string;
  quantity: number;
  price: number;
}

export interface IOrder {
  _id?: string;
  user: mongoose.Types.ObjectId | string;
  items: IOrderItem[];
  total: number;
  status: OrderStatus;
  payment?: mongoose.Types.ObjectId | string;
  delivery?: mongoose.Types.ObjectId | string;
  coupon?: mongoose.Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}
