export enum ProductStatus {
  Active = 'active',
  Inactive = 'inactive',
  Archived = 'archived',
}

import mongoose from 'mongoose';
export interface IProduct {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  category: mongoose.Types.ObjectId | string;
  images?: string[];
  stock?: number;
  sku?: string;
  brand?: string;
  status?: ProductStatus;
  attributes?: Record<string, string>;
  rating?: number;
  numReviews?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateProductRequest {
  name: string;
  price: number;
  category: string;
  description?: string;
  images?: string[];
  stock?: number;
  sku?: string;
  brand?: string;
  status?: ProductStatus;
  attributes?: Record<string, string>;
}

export interface IProductResponse extends IProduct {}
