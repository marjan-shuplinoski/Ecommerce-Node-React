import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import Product from '../models/Product';
import Category from '../models/Category';
const testCategory = { name: 'TestCategory', description: 'Test category desc' };
let categoryId;
let productId;
let merchantToken;
let adminToken;
beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/ecommerce_test');
    await Product.deleteMany({});
    await Category.deleteMany({ name: testCategory.name });
    // Create a category for product
    const catRes = await request(app).post('/api/categories').send(testCategory);
    categoryId = catRes.body._id || catRes.body.id;
    // Register and login merchant
    await request(app).post('/api/users/register').send({ name: 'Merchant', email: 'merchant@example.com', password: 'merchant123', role: 'merchant' });
    const merchantLogin = await request(app).post('/api/users/login').send({ email: 'merchant@example.com', password: 'merchant123' });
    merchantToken = merchantLogin.body.token;
    // Register and login admin
    await request(app).post('/api/users/register').send({ name: 'Admin', email: 'admin@example.com', password: 'admin123', role: 'admin' });
    const adminLogin = await request(app).post('/api/users/login').send({ email: 'admin@example.com', password: 'admin123' });
    adminToken = adminLogin.body.token;
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe('Product API', () => {
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .set('Authorization', `Bearer ${merchantToken}`)
            .send({
            name: 'Test Product',
            price: 10,
            category: categoryId,
            description: 'A test product',
            stock: 5
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Test Product');
        productId = res.body._id || res.body.id;
    });
    it('should get product by id', async () => {
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBe(productId);
    });
    it('should update product', async () => {
        const res = await request(app)
            .put(`/api/products/${productId}`)
            .set('Authorization', `Bearer ${merchantToken}`)
            .send({ price: 20 });
        expect(res.statusCode).toBe(200);
        expect(res.body.price).toBe(20);
    });
    it('should get all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it('should delete product', async () => {
        const res = await request(app)
            .delete(`/api/products/${productId}`)
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Product deleted');
    });
});
