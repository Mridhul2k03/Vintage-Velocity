
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link to="/" className="text-purple-600 hover:text-purple-700">
              ← Back to products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.8 rating)</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ₹{product.price}
              </span>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg rounded-2xl transition-all duration-200 transform hover:scale-105"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="p-6 border-2 border-gray-200 hover:border-purple-300 rounded-2xl transition-colors"
              >
                <Heart size={24} className="text-gray-400 hover:text-purple-600" />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm font-medium text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">On orders over $50</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">🔄</div>
                <div className="text-sm font-medium text-gray-900">Easy Returns</div>
                <div className="text-xs text-gray-600">30-day guarantee</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-medium text-gray-900">Fast Delivery</div>
                <div className="text-xs text-gray-600">2-3 business days</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
