import Coupon from '../models/Coupon';
export const createCoupon = async (couponData) => {
    const coupon = new Coupon(couponData);
    return coupon.save();
};
export const getCoupons = async () => {
    return Coupon.find();
};
export const getCouponById = async (id) => {
    return Coupon.findById(id);
};
export const updateCoupon = async (id, update) => {
    return Coupon.findByIdAndUpdate(id, update, { new: true });
};
export const deleteCoupon = async (id) => {
    return Coupon.findByIdAndDelete(id);
};
