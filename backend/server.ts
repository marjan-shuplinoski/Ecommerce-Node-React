import { loggingMiddleware } from './middleware/logging';
import { applySecurityMiddleware } from './middleware/security';
import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
applySecurityMiddleware(app);
app.use(loggingMiddleware);

// MongoDB Connection
const isTest = process.env.NODE_ENV === 'test';
const mongoUri = isTest ? process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/ecommerce_test' : process.env.MONGO_URI;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(mongoUri as string)
    .then(() => console.log(`MongoDB connected (${isTest ? 'test' : 'dev'})`))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// Routes

import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import cartRoutes from './routes/cartRoutes';
import categoryRoutes from './routes/categoryRoutes';
import couponRoutes from './routes/couponRoutes';
import paymentRoutes from './routes/paymentRoutes';
import deliveryRoutes from './routes/deliveryRoutes';

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/deliveries', deliveryRoutes);

// 404 Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// Server Listen (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
