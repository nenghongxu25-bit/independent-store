// src/components/Bestsellers/data.ts

import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Celestial Ring',
    category: 'Rings',
    price: 299,
    image: '/images/ring1.jpg',
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Shooting Star Necklace',
    category: 'Necklaces',
    price: 499,
    image: '/images/necklace1.jpg',
    isNew: true,
  },
  {
    id: '3',
    name: 'Golden Eclipse Earrings',
    category: 'Earrings',
    price: 199,
    image: '/images/earrings1.jpg',
    isBestseller: true,
  },
  {
    id: '4',
    name: 'Stardust Bracelet',
    category: 'Bracelets',
    price: 159,
    image: '/images/bracelet1.jpg',
  },
];