import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/user.types';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

/**
 * Authentication middleware: verifies JWT and sets req.user
 */
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IUser & { _id: string };
    (req as any).user = decoded;
    return next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
    return;
  }
}
