
import express from 'express';
import { rbac } from '../middleware/rbac.js';
import { authenticate } from '../middleware/authenticate.js';
import { validateBody, validateParams } from '../middleware/validate.js';
import {
  userRegisterSchema,
  userLoginSchema,
  userIdParamSchema,
  userUpdateSchema
} from '../validation/user.validation.js';
import {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  previewOrders,
  previewCart
} from '../controllers/userController.js';

const router = express.Router();

// Auth
router.post('/register', validateBody(userRegisterSchema), register);
router.post('/login', validateBody(userLoginSchema), login);

// CRUD
router.get('/', authenticate, rbac(['admin']), getAllUsers);
router.get('/:id', authenticate, rbac(['admin', 'user']), validateParams(userIdParamSchema), getUser);
router.put('/:id', authenticate, rbac(['admin', 'user']), validateParams(userIdParamSchema), validateBody(userUpdateSchema), updateUser);
router.delete('/:id', authenticate, rbac(['admin']), validateParams(userIdParamSchema), deleteUser);

// Preview orders and cart (user or admin)
router.get('/:id/orders', authenticate, rbac(['admin', 'user']), validateParams(userIdParamSchema), previewOrders);
router.get('/:id/cart', authenticate, rbac(['admin', 'user']), validateParams(userIdParamSchema), previewCart);

export default router;
