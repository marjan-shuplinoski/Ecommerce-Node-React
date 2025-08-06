import Coupon from '../models/Coupon';
import { Coupon as CouponType } from '../types/coupon.types';

export const createCoupon = async (couponData: CouponType) => {
  const coupon = new Coupon(couponData);
  return coupon.save();
};

export const getCoupons = async () => {
  return Coupon.find();
};

export const getCouponById = async (id: string) => {
  return Coupon.findById(id);
};

export const updateCoupon = async (id: string, update: Partial<CouponType>) => {
  return Coupon.findByIdAndUpdate(id, update, { new: true });
};

export const deleteCoupon = async (id: string) => {
  return Coupon.findByIdAndDelete(id);
};
