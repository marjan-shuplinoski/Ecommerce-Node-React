import express from 'express';
import { validateBody, validateParams } from '../middleware/validate.js';
import { cartCreateSchema, cartUpdateSchema, cartIdParamSchema } from '../validation/cart.validation.js';
import { createCart, getCartById, getCartByUser, getAllCarts, updateCart, deleteCart, addItemToCart, removeItemFromCart } from '../controllers/cartController.js';
const router = express.Router();
// CRUD
router.post('/', validateBody(cartCreateSchema), createCart);
router.get('/', getAllCarts);
router.get('/:id', validateParams(cartIdParamSchema), getCartById);
router.get('/user/:userId', getCartByUser); // userId param validation can be added if needed
router.put('/:id', validateParams(cartIdParamSchema), validateBody(cartUpdateSchema), updateCart);
router.delete('/:id', validateParams(cartIdParamSchema), deleteCart);
// Item management (could add validation for items if needed)
router.post('/:id/items', validateParams(cartIdParamSchema), addItemToCart);
router.delete('/:id/items/:productId', validateParams(cartIdParamSchema), removeItemFromCart);
export default router;
