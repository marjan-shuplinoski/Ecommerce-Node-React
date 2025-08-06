import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import CategoryModel from '../models/Category';

describe('Category API', () => {
  let categoryId: string;

  beforeAll(async () => {
    await CategoryModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new category', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({ name: 'Electronics', description: 'Electronic items' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Electronics');
    categoryId = res.body._id;
  });

  it('should get all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a category by id', async () => {
    const res = await request(app).get(`/api/categories/${categoryId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(categoryId);
  });

  it('should update a category', async () => {
    const res = await request(app)
      .put(`/api/categories/${categoryId}`)
      .send({ description: 'Updated description' });
    expect(res.statusCode).toBe(200);
    expect(res.body.description).toBe('Updated description');
  });

  it('should delete a category', async () => {
    const res = await request(app).delete(`/api/categories/${categoryId}`);
    expect(res.statusCode).toBe(204);
  });
});
