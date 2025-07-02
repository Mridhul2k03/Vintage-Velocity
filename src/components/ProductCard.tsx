import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const displayPrice = product.is_offer
    ? parseFloat(product.offer_price)
    : parseFloat(product.price);
  const originalPrice = parseFloat(product.price);
  const mainImage = product.images.length > 0 ? product.images[0].image : "";

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Logo image at top-left */}
        <img
          src="./logo.jpg" // Replace with your actual logo path
          alt="Logo"
          className="absolute top-3 left-3 w-10 h-10 rounded-full border border-white shadow"
        />

        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={mainImage}
            alt={product.product_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {product.category.category}
            </span>
            {product.is_offer && (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                Sale
              </span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {product.product_name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ₹{displayPrice}
              </span>
              {product.is_offer && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-sm text-purple-600 font-medium">
                View Details →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
