import Order from '../models/Order';
import { IOrder } from '../types/order.types';

export const createOrder = async (orderData: IOrder) => {
  const order = new Order(orderData);
  return order.save();
};

export const getOrders = async () => {
  return Order.find();
};

export const getOrderById = async (id: string) => {
  return Order.findById(id);
};

export const updateOrder = async (id: string, update: Partial<IOrder>) => {
  return Order.findByIdAndUpdate(id, update, { new: true });
};

export const deleteOrder = async (id: string) => {
  return Order.findByIdAndDelete(id);
};
