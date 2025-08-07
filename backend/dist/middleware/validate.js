/**
 * Validation middleware for request bodies using Joi schemas
 * @param schema Joi schema to validate against
 */
export function validateBody(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const details = error.details.map((d) => d.message);
            res.status(400).json({ message: 'Validation error', details });
            return;
        }
        return next();
    };
}
/**
 * Validation middleware for request params using Joi schemas
 * @param schema Joi schema to validate against
 */
export function validateParams(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.params, { abortEarly: false });
        if (error) {
            const details = error.details.map((d) => d.message);
            res.status(400).json({ message: 'Validation error', details });
            return;
        }
        return next();
    };
}
