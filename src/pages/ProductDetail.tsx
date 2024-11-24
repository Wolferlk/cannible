import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!product) {
    return (
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        quantity,
        size: selectedSize,
        color: selectedColor,
      },
    });
    navigate('/cart');
  };

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === 0 ? product.images.length - 1 : prev - 1
                  )}
                  className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === product.images.length - 1 ? 0 : prev + 1
                  )}
                  className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-black'
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                <select
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="rounded-full border-gray-300 focus:border-black focus:ring-black"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={product.status === 'sold-out'}
                className={`w-full py-3 rounded-full ${
                  product.status === 'sold-out'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {product.status === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}