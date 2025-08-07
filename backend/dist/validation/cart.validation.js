import Joi from 'joi';
export const cartCreateSchema = Joi.object({
    user: Joi.string().required(),
    items: Joi.array().items(Joi.object({
        product: Joi.string().length(24).hex().required(),
        quantity: Joi.number().integer().min(1).required(),
        price: Joi.number().min(0).required(),
    })).min(1).required(),
    total: Joi.number().min(0).optional(),
    coupon: Joi.string().length(24).hex().optional(),
});
export const cartUpdateSchema = Joi.object({
    items: Joi.array().items(Joi.object({
        product: Joi.string().length(24).hex().required(),
        quantity: Joi.number().integer().min(1).required(),
        price: Joi.number().min(0).required(),
    })).min(1).optional(),
    total: Joi.number().min(0).optional(),
    coupon: Joi.string().length(24).hex().optional(),
}).min(1);
export const cartIdParamSchema = Joi.object({
    id: Joi.string().length(24).hex().required(),
    productId: Joi.string().length(24).hex().optional(),
});
