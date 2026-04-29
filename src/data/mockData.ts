import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'mobiles', name: 'Mobiles', icon: 'Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
  { id: 'laptops', name: 'Laptops', icon: 'Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
  { id: 'audio', name: 'Audio', icon: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
  { id: 'watches', name: 'Watches', icon: 'Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { id: 'accessories', name: 'Accessories', icon: 'Cable', image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400&q=80' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max - 256GB',
    price: 485000,
    originalPrice: 512000,
    discount: 5,
    category: 'mobiles',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    description: 'The iPhone 15 Pro Max is the most powerful iPhone ever, featuring a titanium design, the A17 Pro chip, and a 5x Telephoto camera.',
    rating: 4.9,
    reviews: 128,
    isFeatured: true,
    stock: 12
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 399000,
    originalPrice: 425000,
    discount: 6,
    category: 'mobiles',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1707323136270-207036a1656c?w=800&q=80',
    description: 'Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 6.8-inch flat display.',
    rating: 4.8,
    reviews: 85,
    isFeatured: true,
    stock: 15
  },
  {
    id: '3',
    name: 'MacBook Air M3 - 13.6-inch',
    price: 345000,
    originalPrice: 360000,
    discount: 4,
    category: 'laptops',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: 'The M3 chip brings even greater capabilities to the superportable MacBook Air. With up to 18 hours of battery life.',
    rating: 4.9,
    reviews: 56,
    isFeatured: true,
    stock: 8
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Noise Canceling',
    price: 85000,
    originalPrice: 95000,
    discount: 10,
    category: 'audio',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426ff4737?w=800&q=80',
    description: 'Experience industry-leading noise cancellation with the Sony WH-1000XM5 headphones.',
    rating: 4.7,
    reviews: 210,
    isDeal: true,
    stock: 25
  },
  {
    id: '5',
    name: 'Galaxy Watch 6 Classic',
    price: 65000,
    originalPrice: 72000,
    discount: 9,
    category: 'watches',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1508685096489-7aac291ba597?w=800&q=80',
    description: 'The Galaxy Watch6 Classic features a timeless rotating bezel and our largest screen yet.',
    rating: 4.6,
    reviews: 42,
    isDeal: true,
    stock: 10
  }
];
