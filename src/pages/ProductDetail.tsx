import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';
import { fetchProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Product } from '@/contexts/CartContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(p => p.id === parseInt(id || '0'));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

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
      description: `${product.product_name} has been added to your cart.`,
    });
  };

  const displayPrice = product.is_offer ? parseFloat(product.offer_price) : parseFloat(product.price);
  const originalPrice = parseFloat(product.price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/products" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((imageObj) => (
                  <CarouselItem key={imageObj.id}>
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                      <img
                        src={imageObj.image}
                        alt={`${product.product_name} - Image ${imageObj.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
            
            {/* Image indicators */}
            {product.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {product.category.category}
                </span>
                {product.is_offer && (
                  <span className="inline-block text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    On Sale
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.product_name}
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

            <div className="mb-4">
              <span className="text-sm text-gray-600">Material: {product.material.material}</span>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ₹{displayPrice}
                </span>
                {product.is_offer && (
                  <span className="text-2xl text-gray-500 line-through">
                    ₹{originalPrice}
                  </span>
                )}
              </div>
              {product.is_offer && (
                <span className="text-green-600 font-medium">
                  Save ₹{(originalPrice - displayPrice).toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex space-x-4 mb-6">
              <Button
                onClick={handleAddToCart}
                disabled={!product.is_stock}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.is_stock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                variant="outline"
                className="p-6 border-2 border-gray-200 hover:border-purple-300 rounded-2xl transition-colors"
              >
                <Heart size={24} className="text-gray-400 hover:text-purple-600" />
              </Button>
            </div>

            {!product.is_stock && (
              <div className="text-red-600 text-sm mb-6">
                This item is currently out of stock
              </div>
            )}

            {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm font-medium text-gray-900">All over Shipping</div>
                <div className="text-xs text-gray-600">All over the world</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">🔄</div>
                <div className="text-sm font-medium text-gray-900">Guaranteed items</div>
                <div className="text-xs text-gray-600">100% guarantee</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-medium text-gray-900">Fast Delivery</div>
                <div className="text-xs text-gray-600">2-3 business days</div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;