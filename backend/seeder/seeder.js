import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Payment from '../models/Payment.js';
import Delivery from '../models/Delivery.js';
import Coupon from '../models/Coupon.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_dev';

async function seed() {
  await mongoose.connect(MONGO_URI);
  await Promise.all([
    User.deleteMany({}), Product.deleteMany({}), Category.deleteMany({}),
    Order.deleteMany({}), Cart.deleteMany({}), Payment.deleteMany({}),
    Delivery.deleteMany({}), Coupon.deleteMany({})
  ]);

  // Categories
  const catElectronics = await Category.create({ name: 'Electronics', description: 'Electronic items' });
  const catBooks = await Category.create({ name: 'Books', description: 'Books and literature' });
  const catPhones = await Category.create({ name: 'Phones', parentCategory: catElectronics._id });

  // Products
  const prodPhone = await Product.create({
    name: 'Smartphone X', description: 'Latest smartphone', price: 799, category: catPhones._id, stock: 50, brand: 'BrandX', images: ['phone.jpg']
  });
  const prodBook = await Product.create({
    name: 'Node.js Guide', description: 'Learn Node.js', price: 29, category: catBooks._id, stock: 100, brand: 'BookPub', images: ['nodejs.jpg']
  });

  // Coupons
  const coupon10 = await Coupon.create({
    code: 'SAVE10', discountType: 'percentage', discountValue: 10, minOrderValue: 50, applicableProducts: [prodPhone._id], applicableCategories: [catElectronics._id], validFrom: new Date(), validTo: new Date(Date.now() + 7*24*60*60*1000)
  });

  // Users
  const password = await bcrypt.hash('password123', 10);
  const user1 = await User.create({ name: 'Alice', email: 'alice@example.com', password, role: 'user' });
  const user2 = await User.create({ name: 'Bob', email: 'bob@example.com', password, role: 'user' });

  // Cart
  const cart1 = await Cart.create({ user: user1._id, products: [{ product: prodPhone._id, quantity: 1 }], coupon: coupon10._id, total: 719 });
  user1.cart = cart1._id;
  await user1.save();

  // Order
  const order1 = await Order.create({
    user: user1._id,
    items: [{ product: prodPhone.name, quantity: 1, price: 799 }],
    total: 719,
    status: 'paid',
    coupon: coupon10._id
  });
  user1.orders.push(order1._id);
  await user1.save();

  // Payment
  const payment1 = await Payment.create({ order: order1._id, amount: 719, method: 'card', status: 'paid', provider: 'Stripe', paidAt: new Date() });
  order1.payment = payment1._id;
  await order1.save();

  // Delivery
  const delivery1 = await Delivery.create({ order: order1._id, address: '123 Main St', status: 'shipped', shippedAt: new Date(), trackingNumber: 'TRACK123', carrier: 'DHL' });
  order1.delivery = delivery1._id;
  await order1.save();

  // Mark coupon as used
  coupon10.usedCount = 1;
  coupon10.usersUsed.push(user1._id);
  await coupon10.save();

  console.log('Database seeded successfully!');
  await mongoose.disconnect();
}

seed().catch(e => { console.error(e); process.exit(1); });
