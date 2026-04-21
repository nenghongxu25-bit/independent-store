// src/components/Bestsellers/data.ts

import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Celestial Ring',
    category: 'Rings',
    price: 299,
    image: '/image/bestseller/RS.png',
    video: '/RS.mp4',
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
  {
    id: '5',
    name: 'Midnight Sapphire Ring',
    category: 'Rings',
    price: 399,
    image: '/images/ring2.jpg',
    isNew: true,
  },
  {
    id: '6',
    name: 'Aurora Borealis Necklace',
    category: 'Necklaces',
    price: 599,
    image: '/images/necklace2.jpg',
    isBestseller: true,
  },
  {
    id: '7',
    name: 'Moonlight Pearl Earrings',
    category: 'Earrings',
    price: 249,
    image: '/images/earrings2.jpg',
    isNew: true,
  },
  {
    id: '8',
    name: 'Infinity Diamond Bracelet',
    category: 'Bracelets',
    price: 349,
    image: '/images/bracelet2.jpg',
    isBestseller: true,
  },
  {
    id: '9',
    name: 'Solar Flare Pendant',
    category: 'Necklaces',
    price: 449,
    image: '/images/pendant1.jpg',
  },
];