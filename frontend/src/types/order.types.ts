// Order entity type definitions (mirrored from backend)

export interface Order {
  _id: string;
  user: string; // User _id
  items: Array<{
    product: string; // Product _id
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  payment: string; // Payment _id
  coupon?: string; // Coupon _id
  delivery: string; // Delivery _id
  createdAt?: Date;
  updatedAt?: Date;
}
