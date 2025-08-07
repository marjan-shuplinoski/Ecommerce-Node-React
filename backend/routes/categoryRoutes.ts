
import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validate.js';
import {
  categoryCreateSchema,
  categoryUpdateSchema,
  categoryIdParamSchema
} from '../validation/category.validation.js';
import {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';

const router = Router();

// Create
router.post('/', validateBody(categoryCreateSchema), createCategory);
// Read all
router.get('/', getAllCategories);
// Read one
router.get('/:id', validateParams(categoryIdParamSchema), getCategoryById);
// Update
router.put('/:id', validateParams(categoryIdParamSchema), validateBody(categoryUpdateSchema), updateCategory);
// Delete
router.delete('/:id', validateParams(categoryIdParamSchema), deleteCategory);

export default router;
