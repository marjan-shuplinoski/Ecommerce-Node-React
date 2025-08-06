import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import User from '../models/User';

describe('User API', () => {
    let userId: string;
    let token: string;
    let adminId: string;
    let adminToken: string;

    beforeAll(async () => {
        await User.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ name: 'Test', email: 'test@example.com', password: 'pass123', role: 'user' });
        expect(res.statusCode).toBe(201);
        expect(res.body.email).toBe('test@example.com');
        userId = res.body._id || res.body.id;
    });

    it('should register an admin user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ name: 'Admin', email: 'admin@example.com', password: 'admin123', role: 'admin' });
        expect(res.statusCode).toBe(201);
        expect(res.body.email).toBe('admin@example.com');
        adminId = res.body._id || res.body.id;
    });

    it('should not allow duplicate registration', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ name: 'Test', email: 'test@example.com', password: 'pass123', role: 'user' });
        expect(res.statusCode).toBe(400);
    });

    it('should login the user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({ email: 'test@example.com', password: 'pass123' });
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        token = res.body.token;
    });

    it('should login the admin user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({ email: 'admin@example.com', password: 'admin123' });
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        adminToken = res.body.token;
    });

    it('should get all users', async () => {
        const res = await request(app)
            .get('/api/users')
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a user by id', async () => {
        const res = await request(app)
            .get(`/api/users/${userId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe('test@example.com');
    });

    it('should update a user', async () => {
        const res = await request(app)
            .put(`/api/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Updated' });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Updated');
    });

    it('should preview user orders', async () => {
        const res = await request(app)
            .get(`/api/users/${userId}/orders`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should preview user cart', async () => {
        const res = await request(app)
            .get(`/api/users/${userId}/cart`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(200);
    });

    it('should delete a user', async () => {
        const res = await request(app)
            .delete(`/api/users/${userId}`)
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('User deleted');
    });
});
