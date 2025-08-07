import mongoose, { Schema } from 'mongoose';
const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String },
    status: { type: String, enum: ['active', 'inactive', 'archived'], default: 'active' },
    attributes: { type: Map, of: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true });
const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);
export default CategoryModel;
