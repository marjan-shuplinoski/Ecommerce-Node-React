
import express from 'express';
import { validateBody, validateParams } from '../middleware/validate';
import {
  couponCreateSchema,
  couponUpdateSchema,
  couponIdParamSchema
} from '../validation/coupon.validation';
import {
  createCoupon,
  getCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon
} from '../controllers/couponController';

const router = express.Router();

router.post('/', validateBody(couponCreateSchema), createCoupon);
router.get('/', getCoupons);
router.get('/:id', validateParams(couponIdParamSchema), getCouponById);
router.put('/:id', validateParams(couponIdParamSchema), validateBody(couponUpdateSchema), updateCoupon);
router.delete('/:id', validateParams(couponIdParamSchema), deleteCoupon);

export default router;
