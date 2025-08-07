import Product from '../models/Product.js';
import { IProduct, ICreateProductRequest } from '../types/product.types.js';
import { FilterQuery, UpdateQuery } from 'mongoose';

const productService = {
  async createProduct(data: ICreateProductRequest) {
    const product = new Product(data);
    return product.save();
  },

  async getProductById(id: string) {
    return Product.findById(id);
  },

  async getAllProducts() {
    return Product.find();
  },

  async updateProduct(id: string, data: Partial<IProduct>) {
    return Product.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteProduct(id: string) {
    return Product.findByIdAndDelete(id);
  },

  async findProducts(query: FilterQuery<IProduct>) {
    return Product.find(query);
  },
};

export default productService;
