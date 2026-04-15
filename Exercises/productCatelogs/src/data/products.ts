import type { Product } from "../types/types";

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Desk Lamp',
    price: 89.00,
    category: 'Lighting',
    image: 'https://picsum.photos/seed/lamp/800/800',
    description: 'A sleek, adjustable LED lamp with touch controls and three color temperatures.'
  },
  {
    id: '2',
    name: 'Ergonomic Mesh Chair',
    price: 299.00,
    category: 'Furniture',
    image: 'https://picsum.photos/seed/chair/800/800',
    description: 'Breathable mesh back with lumbar support and 4D adjustable armrests for all-day comfort.'
  },
  {
    id: '3',
    name: 'Mechanical Keyboard',
    price: 159.00,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/keyboard/800/800',
    description: 'Hot-swappable switches with PBT keycaps and customizable RGB lighting.'
  },
  {
    id: '4',
    name: 'Noise Cancelling Headphones',
    price: 349.00,
    category: 'Audio',
    image: 'https://picsum.photos/seed/headphones/800/800',
    description: 'Industry-leading noise cancellation with 30-hour battery life and superior sound quality.'
  },
  {
    id: '5',
    name: 'Bamboo Laptop Stand',
    price: 45.00,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/stand/800/800',
    description: 'Sustainable bamboo stand that improves posture and laptop airflow.'
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    price: 39.00,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/charger/800/800',
    description: 'Fast 15W wireless charging for all Qi-compatible devices with a non-slip surface.'
  }
];

export { PRODUCTS }