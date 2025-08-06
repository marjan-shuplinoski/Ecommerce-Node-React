import Joi from 'joi';

export const productCreateSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().max(1000).optional(),
  price: Joi.number().positive().required(),
  category: Joi.string().required(),
  stock: Joi.number().integer().min(0).required(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  brand: Joi.string().optional(),
  sku: Joi.string().optional(),
});

export const productUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  description: Joi.string().max(1000).optional(),
  price: Joi.number().positive().optional(),
  category: Joi.string().optional(),
  stock: Joi.number().integer().min(0).optional(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  brand: Joi.string().optional(),
  sku: Joi.string().optional(),
}).min(1);

export const productIdParamSchema = Joi.object({
  id: Joi.string().required(),
});
