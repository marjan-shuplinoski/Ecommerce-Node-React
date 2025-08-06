import Delivery from '../models/Delivery';
import { Delivery as DeliveryType } from '../types/delivery.types';

export const createDelivery = async (deliveryData: DeliveryType) => {
  const delivery = new Delivery(deliveryData);
  return delivery.save();
};

export const getDeliveries = async () => {
  return Delivery.find();
};

export const getDeliveryById = async (id: string) => {
  return Delivery.findById(id);
};

export const updateDelivery = async (id: string, update: Partial<DeliveryType>) => {
  return Delivery.findByIdAndUpdate(id, update, { new: true });
};

export const deleteDelivery = async (id: string) => {
  return Delivery.findByIdAndDelete(id);
};
