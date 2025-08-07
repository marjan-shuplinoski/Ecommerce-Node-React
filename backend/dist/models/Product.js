import mongoose, { Schema } from 'mongoose';
import { ProductStatus } from '../types/product.types';
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    sku: { type: String },
    brand: { type: String },
    status: { type: String, enum: Object.values(ProductStatus), default: ProductStatus.Active },
    attributes: { type: Map, of: String },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
}, { timestamps: true });
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
