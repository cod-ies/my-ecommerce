import React, { useState, useEffect } from 'react';
import Product from './Product';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

// Sample product data (replace with your actual data or API call)
const sampleProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 19.99,
    image: "https://via.placeholder.com/300x300?text=White+Tee",
    description: "A timeless classic white t-shirt made from premium cotton.",
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 120,
    isNew: false,
    category: "T-Shirts"
  },
  {
    id: 2,
    name: "Vintage Black Hoodie",
    price: 39.99,
    image: "https://via.placeholder.com/300x300?text=Black+Hoodie",
    description: "Stay cozy in style with this vintage-inspired black hoodie.",
    colors: ["#000000", "#808080", "#4B0082"],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 85,
    isNew: true,
    category: "Hoodies"
  },
  // Add more sample products...
];

const categories = ["All", "T-Shirts", "Hoodies", "Sweatshirts", "Accessories"];
const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Most Popular"];

function ProductList({ addToCart }) {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulating API call
    setIsLoading(true);
    setTimeout(() => {
      setProducts(sampleProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Most Popular":
        return b.reviews - a.reviews;
      default:
        return b.id - a.id; // Newest
    }
  });

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Products</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
      
      {!isLoading && sortedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
