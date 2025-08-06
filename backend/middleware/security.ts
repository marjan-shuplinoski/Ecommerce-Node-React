import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { Express } from 'express';

/**
 * Apply security middleware: helmet, cors, rate limiting
 */
export function applySecurityMiddleware(app: Express) {
  app.use(helmet());
  app.use(cors({ origin: '*', credentials: true }));
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      standardHeaders: true,
      legacyHeaders: false,
    })
  );
}
