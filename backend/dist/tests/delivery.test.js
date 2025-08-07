import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Delivery from '../models/Delivery';
describe('Delivery API', () => {
    let deliveryId;
    const deliveryData = {
        order: new mongoose.Types.ObjectId().toString(),
        address: '123 Delivery St',
        status: 'pending',
    };
    afterAll(async () => {
        await Delivery.deleteMany({});
        await mongoose.connection.close();
    });
    it('should create a delivery', async () => {
        const res = await request(app).post('/api/deliveries').send(deliveryData);
        expect(res.status).toBe(201);
        expect(res.body._id).toBeDefined();
        deliveryId = res.body._id;
    });
    it('should get all deliveries', async () => {
        const res = await request(app).get('/api/deliveries');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it('should get delivery by id', async () => {
        const res = await request(app).get(`/api/deliveries/${deliveryId}`);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(deliveryId);
    });
    it('should update delivery', async () => {
        const res = await request(app).put(`/api/deliveries/${deliveryId}`).send({ status: 'shipped' });
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('shipped');
    });
    it('should delete delivery', async () => {
        const res = await request(app).delete(`/api/deliveries/${deliveryId}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Delivery deleted');
    });
});
