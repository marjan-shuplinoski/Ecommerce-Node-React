
import { Request, Response, NextFunction } from 'express';
import * as paymentService from '../services/paymentService';

export const createPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = { id: (req as any).user?.id, role: (req as any).user?.role };
    const payment = await paymentService.createPayment(req.body, user);
    res.status(201).json(payment);
  } catch (err) {
    next(err);
  }
};

export const getPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = { role: (req as any).user?.role };
    const payments = await paymentService.getPayments(user);
    res.json(payments);
  } catch (err) {
    next(err);
  }
};

export const getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = { id: (req as any).user?.id, role: (req as any).user?.role };
    const payment = await paymentService.getPaymentById(req.params.id, user);
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

export const updatePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = { role: (req as any).user?.role };
    const payment = await paymentService.updatePayment(req.params.id, req.body, user);
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

export const deletePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = { role: (req as any).user?.role };
    await paymentService.deletePayment(req.params.id, user);
    res.json({ message: 'Payment deleted' });
  } catch (err) {
    next(err);
  }
};
