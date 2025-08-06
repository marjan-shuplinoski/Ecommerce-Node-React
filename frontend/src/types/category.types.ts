// Category entity type definitions (mirrored from backend)

export interface Category {
  _id: string;
  name: string;
  description?: string;
  parentCategory?: string; // _id of parent category, if nested
  createdAt?: Date;
  updatedAt?: Date;
}
