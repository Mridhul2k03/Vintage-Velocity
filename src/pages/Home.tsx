
import React from 'react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Shield, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Welcome to Vintage Velocity
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover premium products that enhance your lifestyle with our curated collection of innovative and sustainable items.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag size={24} />
              <span>Shop Now</span>
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Vintage Velocity</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about bringing you the finest products that combine innovation, quality, and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2020, Vintage Velocity began with a simple mission: to make premium, sustainable products accessible to everyone. We believe that quality shouldn't come at the expense of our planet.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team carefully curates each product in our collection, ensuring they meet our high standards for quality, innovation, and environmental responsibility.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve thousands of customers worldwide, helping them discover products that enhance their daily lives while supporting sustainable practices.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">50K+</h4>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">100%</h4>
                    <p className="text-gray-600">Secure Shopping</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h4>
                    <p className="text-gray-600">Customer Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
                    <p className="text-gray-600">Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything we do is guided by our core values and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">We prioritize eco-friendly products and sustainable business practices in everything we do.</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600">Every product is carefully selected and tested to meet our high standards for quality and durability.</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We're here to provide exceptional service and support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Discover Amazing Products?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of satisfied customers and start shopping today.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag size={24} />
              <span>Start Shopping</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
