
import React, { useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import AdvancedSearch from '@/components/AdvancedSearch';
import ProductPagination from '@/components/ProductPagination';
import { products } from '@/data/products';
import { useSearch } from '@/contexts/SearchContext';

const Index = () => {
  const {
    searchTerm,
    selectedCategory,
    priceRange,
    sortBy,
    currentPage,
    itemsPerPage,
    filteredProducts,
    setFilteredProducts,
    setCurrentPage,
  } = useSearch();

  // Filter and sort products based on search criteria
  const processedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  // Update filtered products when criteria change
  useEffect(() => {
    setFilteredProducts(processedProducts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [processedProducts, setFilteredProducts, setCurrentPage]);

  // Get products for current page
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Curated collection of premium products designed to enhance your lifestyle
          </p>
        </div>

        {/* Advanced Search */}
        <AdvancedSearch />

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentProducts.length} of {filteredProducts.length} products
            {searchTerm && ` for "₹{searchTerm}"`}
            {selectedCategory && ` in ₹{selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all products</p>
          </div>
        )}

        {/* Pagination */}
        <ProductPagination />

        {/* Feature Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">All India Shipping</h3>
            <p className="text-gray-600">all India shipping on all orders </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
            <p className="text-gray-600">Hand-picked products with guaranteed quality</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Secure Payment</h3>
            <p className="text-gray-600">Your payment information is always safe</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
