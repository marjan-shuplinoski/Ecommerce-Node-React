import express from 'express';
import { rbac } from '../middleware/rbac.js';
import { authenticate } from '../middleware/authenticate.js';
import { validateBody, validateParams } from '../middleware/validate.js';
import { productCreateSchema, productUpdateSchema, productIdParamSchema } from '../validation/product.validation.js';
import { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
const router = express.Router();
// Only admin and merchant can create/update/delete products
router.post('/', authenticate, rbac(['admin', 'merchant']), validateBody(productCreateSchema), createProduct);
router.put('/:id', authenticate, rbac(['admin', 'merchant']), validateParams(productIdParamSchema), validateBody(productUpdateSchema), updateProduct);
router.delete('/:id', authenticate, rbac(['admin']), validateParams(productIdParamSchema), deleteProduct);
// All users can view products
router.get('/', getAllProducts);
router.get('/:id', validateParams(productIdParamSchema), getProductById);
export default router;
