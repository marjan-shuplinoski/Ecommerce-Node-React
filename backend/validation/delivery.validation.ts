import Joi from 'joi';

export const deliveryCreateSchema = Joi.object({
  order: Joi.string().required(),
  address: Joi.string().required(),
  status: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled').default('pending'),
  shippedAt: Joi.date().optional(),
  deliveredAt: Joi.date().optional(),
});

export const deliveryUpdateSchema = Joi.object({
  address: Joi.string().optional(),
  status: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled').optional(),
  shippedAt: Joi.date().optional(),
  deliveredAt: Joi.date().optional(),
}).min(1);

export const deliveryIdParamSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
});
