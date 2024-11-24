export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'mens' | 'womens' | 'caps' | 'bags' | 'shoes';
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
    name: 'Minimalist Tote Bag',
    price: 59.99,
    description: 'Sleek canvas tote with leather trim and magnetic closure.',
    category: 'bags',
    images: [
      'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80'
    ],
    sizes: ['ONE SIZE'],
    colors: ['Black', 'White'],
    quantity: 30,
    status: 'available'
  },
  {
    id: '3',
    name: 'Essential Crop Top',
    price: 34.99,
    description: 'Versatile crop top with ribbed fabric and modern cut.',
    category: 'womens',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Beige'],
    quantity: 0,
    status: 'sold-out'
  }
];