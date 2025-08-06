import Joi from 'joi';

export const paymentMethodSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  provider: Joi.string().optional(),
  active: Joi.boolean().default(true),
});
