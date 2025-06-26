
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V V</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vintage Velocity
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Cart
            </Link>
          </nav>

          <Link 
            to="/cart" 
            className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <ShoppingCart size={24} />
            {state.itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
