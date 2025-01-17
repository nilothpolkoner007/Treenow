import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Plant Food',
    description: 'Complete nutrition for healthy plant growth. Perfect for all types of trees and plants.',
    price: 499,
    category: 'packet',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800',
  },
  {
    id: '2',
    name: 'Organic Fertilizer',
    description: 'Natural and organic fertilizer for sustainable tree care. Available in bulk quantities.',
    price: 999,
    category: 'wait',
    stock: 500,
    image: 'https://images.unsplash.com/photo-1628452018605-d86487b34a91?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    name: 'Tree Growth Booster',
    description: 'Specially formulated solution to enhance tree growth and health.',
    price: 799,
    category: 'packet',
    stock: 75,
    image: 'https://images.unsplash.com/photo-1603436326383-696a917f3126?auto=format&fit=crop&w=800',
  },
];

export default function Home() {
  const handleAddToCart = (product: Product, type: 'wait' | 'packet') => {
    console.log('Adding to cart:', product, type);
    // TODO: Implement cart functionality
  };

  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      
      <section className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Plant Diagnosis
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use our AI-powered tool to identify plant issues and get personalized care recommendations.
            </p>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200"
              alt="Plant diagnosis"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}