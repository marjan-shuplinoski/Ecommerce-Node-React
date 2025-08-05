import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String },
  status: { type: String, enum: ['active', 'inactive', 'archived'], default: 'active' },
  attributes: { type: Map, of: String }, // For extensible category attributes
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);
export default Category;
