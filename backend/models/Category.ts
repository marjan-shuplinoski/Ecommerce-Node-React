import mongoose, { Document, Schema, Model } from 'mongoose';
import { Category } from '../types/category.types.js';

export interface ICategoryDocument extends Omit<Category, '_id'>, Document {}


const categorySchema = new Schema<ICategoryDocument>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String },
  status: { type: String, enum: ['active', 'inactive', 'archived'], default: 'active' },
  attributes: { type: Map, of: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, { timestamps: true });

const CategoryModel: Model<ICategoryDocument> = mongoose.models.Category || mongoose.model<ICategoryDocument>('Category', categorySchema);
export default CategoryModel;
