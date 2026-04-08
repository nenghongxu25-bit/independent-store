// src/components/Bestsellers/types.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isBestseller?: boolean;
  isNew?: boolean;
}