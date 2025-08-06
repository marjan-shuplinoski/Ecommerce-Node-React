import mongoose, { Document, Schema, Model } from 'mongoose';
import { IProduct, ProductStatus } from '../types/product.types';

export interface IProductDocument extends Omit<IProduct, '_id'>, Document {}

const productSchema = new Schema<IProductDocument>({
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

const Product: Model<IProductDocument> = mongoose.models.Product || mongoose.model<IProductDocument>('Product', productSchema);
export default Product;
