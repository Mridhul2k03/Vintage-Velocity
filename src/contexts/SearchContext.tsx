
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/contexts/CartContext';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 16000]);
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const itemsPerPage = 8;

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
