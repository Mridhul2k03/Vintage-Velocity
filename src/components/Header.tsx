import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V V</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vintage Velocity
            </span> */}
            <img src="/logo.jpg" className='w-10 h-10 rounded-full' alt="" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</Link>
            <Link to="/cart" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Cart</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 hover:text-purple-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative ml-4 text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            <ShoppingCart size={24} />
            {state.itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/products" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 font-medium">Products</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
            <Link to="/cart" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 font-medium">Cart</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
