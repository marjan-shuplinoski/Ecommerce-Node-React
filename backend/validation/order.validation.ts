import Joi from 'joi';

export const orderCreateSchema = Joi.object({
  user: Joi.string().required(),
  products: Joi.array().items(Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
  })).min(1).required(),
  total: Joi.number().positive().required(),
  status: Joi.string().valid('pending', 'paid', 'shipped', 'delivered', 'cancelled').default('pending'),
  address: Joi.string().required(),
  payment: Joi.string().optional(),
});

export const orderUpdateSchema = Joi.object({
  products: Joi.array().items(Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
  })).min(1).optional(),
  total: Joi.number().positive().optional(),
  status: Joi.string().valid('pending', 'paid', 'shipped', 'delivered', 'cancelled').optional(),
  address: Joi.string().optional(),
  payment: Joi.string().optional(),
}).min(1);

export const orderIdParamSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
});
