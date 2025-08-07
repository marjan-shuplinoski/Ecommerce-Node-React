import { loggingMiddleware } from './middleware/logging.js';
import { applySecurityMiddleware } from './middleware/security.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
    mongoose.connect(mongoUri)
        .then(() => console.log(`MongoDB connected (${isTest ? 'test' : 'dev'})`))
        .catch((err) => console.error('MongoDB connection error:', err));
}
// Routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/deliveries', deliveryRoutes);
// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});
// Global Error Handler
app.use((err, req, res, next) => {
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
