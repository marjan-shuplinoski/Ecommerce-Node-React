import { Request, Response, NextFunction } from 'express';

/**
 * Role-based access control middleware
 * Usage: app.use('/api/admin', rbac(['admin']));
 */
export function rbac(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Assumes req.user is set by authentication middleware
    const user = (req as any).user;
    if (!user) {
      res.status(401).json({ message: 'Unauthorized: No user' });
      return;
    }
    if (!roles.includes(user.role)) {
      res.status(403).json({ message: 'Forbidden: Insufficient role' });
      return;
    }
    return next();
  };
}
