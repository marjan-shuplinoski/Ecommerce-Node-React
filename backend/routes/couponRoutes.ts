
import express from 'express';
import { validateBody, validateParams } from '../middleware/validate.js';
import {
  couponCreateSchema,
  couponUpdateSchema,
  couponIdParamSchema
} from '../validation/coupon.validation.js';
import {
  createCoupon,
  getCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon
} from '../controllers/couponController.js';

const router = express.Router();

router.post('/', validateBody(couponCreateSchema), createCoupon);
router.get('/', getCoupons);
router.get('/:id', validateParams(couponIdParamSchema), getCouponById);
router.put('/:id', validateParams(couponIdParamSchema), validateBody(couponUpdateSchema), updateCoupon);
router.delete('/:id', validateParams(couponIdParamSchema), deleteCoupon);

export default router;
