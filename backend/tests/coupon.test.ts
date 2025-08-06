import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Coupon from '../models/Coupon';

describe('Coupon API', () => {
  let couponId: string;
  const couponData = {
    code: 'TEST10',
    discountType: 'percentage',
    discountValue: 10,
    expiresAt: new Date(Date.now() + 86400000),
    active: true,
  };

  afterAll(async () => {
    await Coupon.deleteMany({});
    await mongoose.connection.close();
  });

  it('should create a coupon', async () => {
    const res = await request(app).post('/api/coupons').send(couponData);
    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
    couponId = res.body._id;
  });

  it('should get all coupons', async () => {
    const res = await request(app).get('/api/coupons');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get coupon by id', async () => {
    const res = await request(app).get(`/api/coupons/${couponId}`);
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(couponId);
  });

  it('should update coupon', async () => {
    const res = await request(app).put(`/api/coupons/${couponId}`).send({ active: false });
    expect(res.status).toBe(200);
    expect(res.body.active).toBe(false);
  });

  it('should delete coupon', async () => {
    const res = await request(app).delete(`/api/coupons/${couponId}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Coupon deleted');
  });
});
