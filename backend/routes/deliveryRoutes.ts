
import express from 'express';
import { validateBody, validateParams } from '../middleware/validate.js';
import {
  deliveryCreateSchema,
  deliveryUpdateSchema,
  deliveryIdParamSchema
} from '../validation/delivery.validation.js';
import {
  createDelivery,
  getDeliveries,
  getDeliveryById,
  updateDelivery,
  deleteDelivery
} from '../controllers/deliveryController.js';

const router = express.Router();

router.post('/', validateBody(deliveryCreateSchema), createDelivery);
router.get('/', getDeliveries);
router.get('/:id', validateParams(deliveryIdParamSchema), getDeliveryById);
router.put('/:id', validateParams(deliveryIdParamSchema), validateBody(deliveryUpdateSchema), updateDelivery);
router.delete('/:id', validateParams(deliveryIdParamSchema), deleteDelivery);

export default router;
