
import express from 'express';
import { rbac } from '../middleware/rbac.js';
import { authenticate } from '../middleware/authenticate.js';
import { validateBody, validateParams } from '../middleware/validate.js';
import {
  orderCreateSchema,
  orderUpdateSchema,
  orderIdParamSchema
} from '../validation/order.validation.js';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();

// Only users can create orders, admin can get all, user can get own, admin can update/delete
router.post('/', authenticate, rbac(['user']), validateBody(orderCreateSchema), createOrder);
router.get('/', authenticate, rbac(['admin']), getOrders);
router.get('/:id', authenticate, rbac(['admin', 'user']), validateParams(orderIdParamSchema), getOrderById);
router.put('/:id', authenticate, rbac(['admin']), validateParams(orderIdParamSchema), validateBody(orderUpdateSchema), updateOrder);
router.delete('/:id', authenticate, rbac(['admin']), validateParams(orderIdParamSchema), deleteOrder);

export default router;
