import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

function Product({ product, addToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        {product.isNew && (
          <span className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 m-2 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Color:</span>
          <div className="flex mt-2 space-x-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Size:</span>
          <div className="flex mt-2 space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-2 py-1 text-sm border rounded ${
                  selectedSize === size
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
