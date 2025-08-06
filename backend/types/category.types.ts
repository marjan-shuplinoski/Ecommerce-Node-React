// Category entity type definitions for backend

import mongoose from 'mongoose';
export type CategoryStatus = 'active' | 'inactive' | 'archived';
export interface Category {
  _id: string;
  name: string;
  description?: string;
  parentCategory?: mongoose.Types.ObjectId | string;
  image?: string;
  status?: CategoryStatus;
  attributes?: Record<string, string>;
  createdAt?: Date;
  updatedAt?: Date;
}
