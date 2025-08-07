import CategoryModel, { ICategoryDocument } from '../models/Category.js';
import { Category } from '../types/category.types.js';
import mongoose from 'mongoose';

export class CategoryService {
  async createCategory(data: Partial<Category>): Promise<ICategoryDocument> {
    const category = new CategoryModel(data);
    return category.save();
  }

  async getCategoryById(id: string | mongoose.Types.ObjectId): Promise<ICategoryDocument | null> {
    return CategoryModel.findById(id);
  }

  async getAllCategories(): Promise<ICategoryDocument[]> {
    return CategoryModel.find();
  }

  async updateCategory(id: string | mongoose.Types.ObjectId, data: Partial<Category>): Promise<ICategoryDocument | null> {
    return CategoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCategory(id: string | mongoose.Types.ObjectId): Promise<ICategoryDocument | null> {
    return CategoryModel.findByIdAndDelete(id);
  }
}

export const categoryService = new CategoryService();
