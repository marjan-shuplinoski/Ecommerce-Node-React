import { Request, Response, NextFunction } from 'express';
import Delivery from '../models/Delivery';
import { Delivery as DeliveryType } from '../types/delivery.types';

export const createDelivery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json(delivery);
  } catch (err) {
    next(err);
  }
};

export const getDeliveries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (err) {
    next(err);
  }
};

export const getDeliveryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    return res.json(delivery);
  } catch (err) {
    return next(err);
  }
};

export const updateDelivery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    return res.json(delivery);
  } catch (err) {
    return next(err);
  }
};

export const deleteDelivery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    return res.json({ message: 'Delivery deleted' });
  } catch (err) {
    return next(err);
  }
};
