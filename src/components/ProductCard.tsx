
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { GetAllProductData } from '@/services/AllApi';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const products2 = GetAllProductData(''); 
  console.log(products2);
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-sm text-purple-600 font-medium">View Details →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

