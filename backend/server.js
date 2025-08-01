dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
// import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import categoryRoutes from './routes/categoryRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import cartRoutes from './routes/cartRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';
// import couponRoutes from './routes/couponRoutes.js';
// import deliveryRoutes from './routes/deliveryRoutes.js';

// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/carts', cartRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/coupons', couponRoutes);
// app.use('/api/deliveries', deliveryRoutes);

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
