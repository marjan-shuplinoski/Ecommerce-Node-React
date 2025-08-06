
import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Payment from '../models/Payment';
import { createTestUser } from './utils/testAuth';
import { UserRole } from '../types/user.types';

describe('Payment API', () => {
  let paymentId: string;
  let adminToken: string;
  let userToken: string;
  let userId: string;
  const paymentData = {
    order: new mongoose.Types.ObjectId(),
    amount: 50,
    method: 'card',
    status: 'pending',
    transactionId: 'txn_123',
  };

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce-test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any);
    }
    await Payment.deleteMany({});
    const { token: adminT } = await createTestUser(UserRole.Admin, 'admin@pay.com');
    const { token: userT, user } = await createTestUser(UserRole.User, 'user@pay.com');
    adminToken = adminT;
    userToken = userT;
    userId = String(user._id);
  });

  afterAll(async () => {
    await Payment.deleteMany({});
    await mongoose.disconnect();
  });

  it('admin can create a payment for any user', async () => {
    const res = await request(app)
      .post('/api/payments')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ ...paymentData, user: userId });
    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
    paymentId = res.body._id;
  });

  it('user can create a payment for self', async () => {
    const res = await request(app)
      .post('/api/payments')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ ...paymentData, user: userId });
    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
  });

  it('user cannot create payment for another user', async () => {
    const otherUserId = new mongoose.Types.ObjectId().toString();
    const res = await request(app)
      .post('/api/payments')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ ...paymentData, user: otherUserId });
    expect(res.status).toBe(500);
    expect(res.body.error || res.body.message).toMatch(/forbidden/i);
  });

  it('admin can get all payments', async () => {
    const res = await request(app)
      .get('/api/payments')
      .set('Authorization', `Bearer ${adminToken}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('user cannot get all payments', async () => {
    const res = await request(app)
      .get('/api/payments')
      .set('Authorization', `Bearer ${userToken}`);
    expect(res.status).toBe(500);
    expect(res.body.error || res.body.message).toMatch(/forbidden/i);
  });

  it('admin can get payment by id', async () => {
    const res = await request(app)
      .get(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${adminToken}`);
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(paymentId);
  });

  it('owner user can get payment by id', async () => {
    const res = await request(app)
      .get(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${userToken}`);
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(paymentId);
  });

  it('other user cannot get payment by id', async () => {
    const { token: otherToken } = await createTestUser(UserRole.User, 'other@pay.com');
    const res = await request(app)
      .get(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${otherToken}`);
    expect(res.status).toBe(500);
    expect(res.body.error || res.body.message).toMatch(/forbidden|not payment owner/i);
  });

  it('admin can update payment', async () => {
    const res = await request(app)
      .put(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ status: 'paid' });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('paid');
  });

  it('user cannot update payment', async () => {
    const res = await request(app)
      .put(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ status: 'failed' });
    expect(res.status).toBe(500);
    expect(res.body.error || res.body.message).toMatch(/forbidden/i);
  });

  it('admin can delete payment', async () => {
    const res = await request(app)
      .delete(`/api/payments/${paymentId}`)
      .set('Authorization', `Bearer ${adminToken}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Payment deleted');
  });

  it('user cannot delete payment', async () => {
    // create a new payment as user
    const resCreate = await request(app)
      .post('/api/payments')
      .set('Authorization', `Bearer ${userToken}`)
      .send({ ...paymentData, user: userId, transactionId: 'txn_new' });
    const newPaymentId = resCreate.body._id;
    const res = await request(app)
      .delete(`/api/payments/${newPaymentId}`)
      .set('Authorization', `Bearer ${userToken}`);
    expect(res.status).toBe(500);
    expect(res.body.error || res.body.message).toMatch(/forbidden/i);
  });
});
