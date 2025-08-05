import express from 'express';
import {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
  previewOrders,
  previewCart
} from '../controllers/userController.js';

const router = express.Router();

// Auth
router.post('/register', register);
router.post('/login', login);

// CRUD
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Preview orders and cart
router.get('/:id/orders', previewOrders);
router.get('/:id/cart', previewCart);

export default router;
