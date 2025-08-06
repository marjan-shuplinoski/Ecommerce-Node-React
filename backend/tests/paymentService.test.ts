
import mongoose from 'mongoose';
import Payment from '../models/Payment';
import * as paymentService from '../services/paymentService';
import { Payment as PaymentType } from '../types/payment.types';

jest.setTimeout(20000);

describe('paymentService', () => {
  const adminUserId = new mongoose.Types.ObjectId();
  const normalUserId = new mongoose.Types.ObjectId();
  const adminUser = { id: adminUserId.toString(), role: 'admin' };
  const normalUser = { id: normalUserId.toString(), role: 'user' };
  let paymentId: string;
  const paymentData: Partial<PaymentType> = {
    order: new mongoose.Types.ObjectId(),
    user: normalUserId,
    amount: 100,
    method: 'card',
    status: 'pending',
    transactionId: 'txn_abc',
  };

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce-test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any);
    }
    await Payment.deleteMany({});
  });

  afterAll(async () => {
    await Payment.deleteMany({});
    await mongoose.disconnect();
  });

  it('admin can create payment', async () => {
    const payment = await paymentService.createPayment(paymentData as any, adminUser);
    expect(payment).toHaveProperty('_id');
    paymentId = (payment as any)._id.toString();
  });

  it('user can create own payment', async () => {
    const payment = await paymentService.createPayment({ ...paymentData, user: normalUserId } as any, normalUser);
    expect(payment).toHaveProperty('_id');
  });

  it('user cannot create payment for another user', async () => {
    const otherUserId = new mongoose.Types.ObjectId();
    await expect(paymentService.createPayment({ ...paymentData, user: otherUserId } as any, normalUser)).rejects.toThrow('Forbidden');
  });

  it('admin can get all payments', async () => {
    const payments = await paymentService.getPayments(adminUser);
    expect(Array.isArray(payments)).toBe(true);
  });

  it('user cannot get all payments', async () => {
    await expect(paymentService.getPayments(normalUser)).rejects.toThrow('Forbidden');
  });

  it('admin can get payment by id', async () => {
    const payment = await paymentService.getPaymentById(paymentId, adminUser);
    expect(payment).toHaveProperty('_id');
  });

  it('owner user can get payment by id', async () => {
    const payment = await paymentService.getPaymentById(paymentId, normalUser);
    expect(payment).toHaveProperty('_id');
  });

  it('other user cannot get payment by id', async () => {
    const otherUserId = new mongoose.Types.ObjectId();
    await expect(paymentService.getPaymentById(paymentId, { id: otherUserId.toString(), role: 'user' })).rejects.toThrow('Forbidden');
  });

  it('admin can update payment', async () => {
    const payment = await paymentService.updatePayment(paymentId, { status: 'paid' }, adminUser);
    expect(payment.status).toBe('paid');
  });

  it('user cannot update payment', async () => {
    await expect(paymentService.updatePayment(paymentId, { status: 'failed' }, normalUser)).rejects.toThrow('Forbidden');
  });

  it('admin can delete payment', async () => {
    const payment = await paymentService.deletePayment(paymentId, adminUser);
    expect(payment).toHaveProperty('_id');
  });

  it('user cannot delete payment', async () => {
    const newPayment = await paymentService.createPayment({ ...paymentData, transactionId: 'txn_new', user: normalUserId } as any, normalUser);
    await expect(paymentService.deletePayment((newPayment as any)._id.toString(), normalUser)).rejects.toThrow('Forbidden');
  });
});
