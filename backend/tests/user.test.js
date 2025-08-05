import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server.js';
import User from '../models/User.js';
import Order from '../models/Order.js';

describe('User API', () => {
  let server;
  beforeAll(async () => {
    server = app.listen(0);
    await mongoose.connect(process.env.MONGO_URI + '_test');
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    server.close();
  });

  let userId;
  const userData = { name: 'Test', email: 'test@example.com', password: '123456' };

  it('should register a user', async () => {
    const res = await request(server).post('/api/users/register').send(userData);
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe(userData.email);
    userId = res.body.id;
  });

  it('should not register with duplicate email', async () => {
    const res = await request(server).post('/api/users/register').send(userData);
    expect(res.statusCode).toBe(400);
  });

  it('should login user', async () => {
    const res = await request(server).post('/api/users/login').send({ email: userData.email, password: userData.password });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('should get user by id', async () => {
    const res = await request(server).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(userData.email);
  });

  it('should update user', async () => {
    const res = await request(server).put(`/api/users/${userId}`).send({ name: 'Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated');
  });

  it('should preview orders', async () => {
    // Create an order and assign to user
    const order = await Order.create({
      items: [{ product: 'Test Product', quantity: 2 }],
      total: 100,
    });
    await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });
    const res = await request(server).get(`/api/users/${userId}/orders`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]._id).toBe(order._id.toString());
  });

  it('should preview cart', async () => {
    const res = await request(server).get(`/api/users/${userId}/cart`);
    expect(res.statusCode).toBe(200);
  });

  it('should delete user', async () => {
    const res = await request(server).delete(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('User deleted');
  });
});
