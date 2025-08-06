// Product entity type definitions (mirrored from backend)

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string; // Category _id
  images: string[];
  stock: number;
  status: 'pending' | 'approved' | 'rejected';
  merchant: string; // User _id
  createdAt?: Date;
  updatedAt?: Date;
}
