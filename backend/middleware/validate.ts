
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema, ValidationErrorItem } from 'joi';

/**
 * Validation middleware for request bodies using Joi schemas
 * @param schema Joi schema to validate against
 */

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const details = (error.details as ValidationErrorItem[]).map((d) => d.message);
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

export function validateParams(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      const details = (error.details as ValidationErrorItem[]).map((d) => d.message);
      res.status(400).json({ message: 'Validation error', details });
      return;
    }
    return next();
  };
}
