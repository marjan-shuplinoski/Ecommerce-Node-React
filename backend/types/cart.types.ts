import mongoose from 'mongoose';

export interface CartItem {
  product: mongoose.Types.ObjectId | string;
  quantity: number;
  price: number;
}

export interface Cart {
  _id: string;
  user: mongoose.Types.ObjectId | string;
  items: CartItem[];
  total: number;
  coupon?: mongoose.Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}
