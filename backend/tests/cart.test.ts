import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Cart from '../models/Cart';
import User from '../models/User';

// Basic test data
const testUser = { name: 'CartTestUser', email: 'cartuser@example.com', password: 'pass123', role: 'user' };
let userId: string;
let cartId: string;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/ecommerce_test');
  await Cart.deleteMany({});
  await User.deleteMany({ email: testUser.email });
  // Create a user for cart
  const userRes = await request(app).post('/api/users/register').send(testUser);
  userId = userRes.body._id || userRes.body.id;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Cart API', () => {
  it('should create a new cart', async () => {
    const productId = new mongoose.Types.ObjectId().toString();
    const res = await request(app).post('/api/carts').send({ user: userId, items: [{ product: productId, quantity: 1, price: 10 }], total: 0 });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toBe(userId);
    cartId = res.body._id || res.body.id;
  });

  it('should get cart by id', async () => {
    const res = await request(app).get(`/api/carts/${cartId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(cartId);
  });

  it('should get cart by user', async () => {
    const res = await request(app).get(`/api/carts/user/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBe(userId);
  });

  it('should add item to cart', async () => {
    const item = { product: new mongoose.Types.ObjectId().toString(), quantity: 2, price: 10 };
    const res = await request(app).post(`/api/carts/${cartId}/items`).send(item);
    expect(res.statusCode).toBe(200);
    expect(res.body.items.length).toBe(2);
  });

  it('should remove item from cart', async () => {
    const cart = await Cart.findById(cartId);
    const productId = cart?.items[0]?.product;
    const res = await request(app).delete(`/api/carts/${cartId}/items/${productId}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items.length).toBe(1);
  });

  it('should update cart', async () => {
    const res = await request(app).put(`/api/carts/${cartId}`).send({ total: 99 });
    expect(res.statusCode).toBe(200);
    expect(res.body.total).toBe(99);
  });

  it('should get all carts', async () => {
    const res = await request(app).get('/api/carts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete cart', async () => {
    const res = await request(app).delete(`/api/carts/${cartId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Cart deleted');
  });
});
