// Cart entity type definitions (mirrored from backend)

export interface CartItem {
  product: string; // Product _id
  quantity: number;
  price: number;
}

export interface Cart {
  _id: string;
  user: string; // User _id
  items: CartItem[];
  total: number;
  coupon?: string; // Coupon _id
  createdAt?: Date;
  updatedAt?: Date;
}
