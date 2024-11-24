export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'mens' | 'womens' | 'caps' | 'bags' | 'shoes' | 'unisex';
  images: string[];
  sizes: string[];
  colors: string[];
  quantity: number;
  status: 'available' | 'low-stock' | 'sold-out';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Urban Streetwear Hoodie',
    price: 89.99,
    description: 'Premium cotton blend hoodie with minimalist design and superior comfort.',
    category: 'mens',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    quantity: 50,
    status: 'available'
  },
  {
    id: '2',
    name: 'Urban Oversize Tee - Unisex',
    price: 2500.00,
    description: 'Cotton interlock 220gsm with minimalist design and superior comfort.',
    category: 'mens',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80'
    ],
    sizes: ['Xs', 'S', 'M', 'L'],
    colors: ['Black'],
    quantity: 0,
    status: 'sold-out'
  },
  {
    id: '3',
    name: 'Retro Oversize Tee - Unisex',
    price: 2300.00,
    description: 'Cotton interlock 220gsm with minimalist design and superior comfort.',
    category: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80'
    ],
    sizes: ['Xs', 'S', 'M', 'L'],
    colors: ['Black'],
    quantity: 0,
    status: 'sold-out'
  },
  {
    id: '4',
    name: 'Cannibal Desire Oversize Tee - Unisex',
    price: 2000.00,
    description: 'Cotton interlock 220gsm with minimalist design featuring a subtle Cannibal wording logo embroidered on the front for a sleek look.',
    category: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black'],
    quantity: 0,
    status: 'sold-out'
  },
  {
    id: '5',
    name: 'Deluxe Oversize Tee',
    price: 2300.00,
    description: 'Cotton interlock 220gsm with superior comfort.',
    category: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black'],
    quantity: 0,
    status: 'sold-out'
  },
  {
    id: '6',
    name: 'Classic Oversize Tee - Unisex',
    price: 2200.00,
    description: '100% cotton with minimalist design and superior comfort.',
    category: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Green', 'Brown'],
    quantity: 7,
    status: 'available'
  },
  {
    id: '7',
    name: 'Finished Oversize Tee - Unisex',
    price: 2350.00,
    description: '100% cotton with minimalist design and superior comfort.',
    category: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Green', 'Brown'],
    quantity: 9,
    status: 'available'
  }
];
