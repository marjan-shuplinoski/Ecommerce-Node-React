import { Request, Response, NextFunction } from 'express';

import * as couponService from '../services/couponService';

export const createCoupon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coupon = await couponService.createCoupon(req.body);
    res.status(201).json(coupon);
  } catch (err) {
    next(err);
  }
};

export const getCoupons = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coupons = await couponService.getCoupons();
    res.json(coupons);
  } catch (err) {
    next(err);
  }
};

export const getCouponById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coupon = await couponService.getCouponById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    return res.json(coupon);
  } catch (err) {
    return next(err);
  }
};

export const updateCoupon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coupon = await couponService.updateCoupon(req.params.id, req.body);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    return res.json(coupon);
  } catch (err) {
    return next(err);
  }
};

export const deleteCoupon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coupon = await couponService.deleteCoupon(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    return res.json({ message: 'Coupon deleted' });
  } catch (err) {
    return next(err);
  }
};
