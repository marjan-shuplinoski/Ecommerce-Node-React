import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Order from '../models/Order';
describe('Order API', () => {
    let orderId;
    let userId;
    let userToken;
    let adminToken;
    const orderData = {
        products: [{ product: new mongoose.Types.ObjectId().toString(), quantity: 1 }],
        total: 100,
        status: 'pending',
        address: '123 Test St',
        payment: new mongoose.Types.ObjectId().toString(),
    };
    beforeAll(async () => {
        await Order.deleteMany({});
        // Register and login user
        await request(app).post('/api/users/register').send({ name: 'OrderUser', email: 'orderuser@example.com', password: 'order123', role: 'user' });
        const userLogin = await request(app).post('/api/users/login').send({ email: 'orderuser@example.com', password: 'order123' });
        userToken = userLogin.body.token;
        userId = userLogin.body.user._id || userLogin.body.user.id;
        // Register and login admin
        await request(app).post('/api/users/register').send({ name: 'OrderAdmin', email: 'orderadmin@example.com', password: 'orderadmin123', role: 'admin' });
        const adminLogin = await request(app).post('/api/users/login').send({ email: 'orderadmin@example.com', password: 'orderadmin123' });
        adminToken = adminLogin.body.token;
    });
    afterAll(async () => {
        await Order.deleteMany({});
        await mongoose.connection.close();
    });
    it('should create an order', async () => {
        const res = await request(app)
            .post('/api/orders')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...orderData, user: userId });
        expect(res.status).toBe(201);
        expect(res.body._id).toBeDefined();
        orderId = res.body._id;
    });
    it('should get all orders', async () => {
        const res = await request(app)
            .get('/api/orders')
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it('should get order by id', async () => {
        const res = await request(app)
            .get(`/api/orders/${orderId}`)
            .set('Authorization', `Bearer ${userToken}`);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(orderId);
    });
    it('should update order', async () => {
        const res = await request(app)
            .put(`/api/orders/${orderId}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ status: 'shipped' });
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('shipped');
    });
    it('should delete order', async () => {
        const res = await request(app)
            .delete(`/api/orders/${orderId}`)
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Order deleted');
    });
});
