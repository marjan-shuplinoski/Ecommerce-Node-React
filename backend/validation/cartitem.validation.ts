import Joi from 'joi';

export const cartItemSchema = Joi.object({
  product: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});
