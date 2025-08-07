import express from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { validateBody, validateParams } from '../middleware/validate.js';
import { paymentCreateSchema, paymentUpdateSchema, paymentIdParamSchema } from '../validation/payment.validation.js';
import { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } from '../controllers/paymentController.js';
const router = express.Router();
// All payment routes require authentication and validation
router.post('/', authenticate, validateBody(paymentCreateSchema), createPayment);
router.get('/', authenticate, getPayments);
router.get('/:id', authenticate, validateParams(paymentIdParamSchema), getPaymentById);
router.put('/:id', authenticate, validateParams(paymentIdParamSchema), validateBody(paymentUpdateSchema), updatePayment);
router.delete('/:id', authenticate, validateParams(paymentIdParamSchema), deletePayment);
export default router;
