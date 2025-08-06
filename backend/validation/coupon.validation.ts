import Joi from 'joi';

export const couponCreateSchema = Joi.object({
  code: Joi.string().min(3).max(20).required(),
  discountType: Joi.string().valid('percentage', 'fixed').required(),
  discountValue: Joi.number().min(0).required(),
  description: Joi.string().optional(),
  minOrderValue: Joi.number().min(0).optional(),
  maxDiscount: Joi.number().min(0).optional(),
  usageLimit: Joi.number().min(0).optional(),
  usedCount: Joi.number().min(0).optional(),
  validFrom: Joi.date().optional(),
  validTo: Joi.date().optional(),
  active: Joi.boolean().default(true),
  applicableProducts: Joi.array().items(Joi.string().length(24).hex()).optional(),
  applicableCategories: Joi.array().items(Joi.string().length(24).hex()).optional(),
  usersUsed: Joi.array().items(Joi.string().length(24).hex()).optional(),
  isActive: Joi.boolean().optional(),
  expiresAt: Joi.date().optional(),
});

export const couponUpdateSchema = Joi.object({
  code: Joi.string().min(3).max(20).optional(),
  discountType: Joi.string().valid('percentage', 'fixed').optional(),
  discountValue: Joi.number().min(0).optional(),
  description: Joi.string().optional(),
  minOrderValue: Joi.number().min(0).optional(),
  maxDiscount: Joi.number().min(0).optional(),
  usageLimit: Joi.number().min(0).optional(),
  usedCount: Joi.number().min(0).optional(),
  validFrom: Joi.date().optional(),
  validTo: Joi.date().optional(),
  active: Joi.boolean().optional(),
  applicableProducts: Joi.array().items(Joi.string().length(24).hex()).optional(),
  applicableCategories: Joi.array().items(Joi.string().length(24).hex()).optional(),
  usersUsed: Joi.array().items(Joi.string().length(24).hex()).optional(),
  isActive: Joi.boolean().optional(),
  expiresAt: Joi.date().optional(),
}).min(1);

export const couponIdParamSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
});
