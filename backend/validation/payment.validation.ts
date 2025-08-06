import Joi from 'joi';

export const paymentCreateSchema = Joi.object({
  order: Joi.string().required(),
  user: Joi.string().required(),
  amount: Joi.number().positive().required(),
  currency: Joi.string().default('USD'),
  method: Joi.string().valid('card', 'paypal', 'bank', 'cash').required(),
  status: Joi.string().valid('unpaid', 'pending', 'paid', 'failed', 'refunded').default('unpaid'),
  transactionId: Joi.string().optional(),
  provider: Joi.string().optional(),
  paidAt: Joi.date().optional(),
  receiptUrl: Joi.string().uri().optional(),
  failureReason: Joi.string().optional(),
  refundId: Joi.string().optional(),
});

export const paymentUpdateSchema = Joi.object({
  amount: Joi.number().positive().optional(),
  currency: Joi.string().optional(),
  method: Joi.string().valid('card', 'paypal', 'bank', 'cash').optional(),
  status: Joi.string().valid('unpaid', 'pending', 'paid', 'failed', 'refunded').optional(),
  transactionId: Joi.string().optional(),
  provider: Joi.string().optional(),
  paidAt: Joi.date().optional(),
  receiptUrl: Joi.string().uri().optional(),
  failureReason: Joi.string().optional(),
  refundId: Joi.string().optional(),
}).min(1);

export const paymentIdParamSchema = Joi.object({
  id: Joi.string().required(),
});
