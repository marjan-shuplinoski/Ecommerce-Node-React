// Payment entity type definitions (mirrored from backend)

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Payment {
  _id: string;
  order: string; // Order _id
  user: string; // User _id
  amount: number;
  method: string; // e.g. 'credit_card', 'paypal', etc.
  status: PaymentStatus;
  transactionId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
