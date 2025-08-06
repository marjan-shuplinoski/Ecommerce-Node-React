// Delivery entity type definitions (mirrored from backend)

export type DeliveryStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export interface Delivery {
  _id: string;
  order: string; // Order _id
  address: string;
  status: DeliveryStatus;
  shippedAt?: Date;
  deliveredAt?: Date;
  trackingNumber?: string;
  carrier?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
