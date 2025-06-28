import React, { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import AdvancedSearch from '@/components/AdvancedSearch';
import ProductPagination from '@/components/ProductPagination';
import { fetchProducts } from '@/data/products';
import { useSearch } from '@/contexts/SearchContext';
import { Product } from '@/contexts/CartContext';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
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

  // Fetch products from API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter and sort products based on search criteria
  const processedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category.category === selectedCategory;
      const productPrice = product.is_offer ? parseFloat(product.offer_price) : parseFloat(product.price);
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      const priceA = a.is_offer ? parseFloat(a.offer_price) : parseFloat(a.price);
      const priceB = b.is_offer ? parseFloat(b.offer_price) : parseFloat(b.price);
      
      switch (sortBy) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'category':
          return a.category.category.localeCompare(b.category.category);
        case 'name':
        default:
          return a.product_name.localeCompare(b.product_name);
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

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
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
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
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on all orders over $50</p>
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
        </div> */}
      </main>
    </div>
  );
};

export default Index;