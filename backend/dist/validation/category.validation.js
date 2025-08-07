import Joi from 'joi';
export const categoryCreateSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().max(500).optional(),
});
export const categoryUpdateSchema = Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    description: Joi.string().max(500).optional(),
}).min(1);
export const categoryIdParamSchema = Joi.object({
    id: Joi.string().required(),
});
