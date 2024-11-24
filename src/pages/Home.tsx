import React from 'react';
import Hero from '../components/Hero';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-xl max-w-2xl mx-auto">
            At Cannible.co, we believe in the power of minimalist design and superior quality.
            Every piece tells a story of urban culture and contemporary lifestyle.
          </p>
        </div>
      </section>
    </div>
  );
}