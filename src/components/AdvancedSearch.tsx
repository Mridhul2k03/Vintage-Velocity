
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/contexts/SearchContext';

const AdvancedSearch: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
  } = useSearch();

  const categories = [
    'Sports Cars',
    'Muscle Cars',
    'Supercars',
    'Hypercars',
    'Race Cars',
    'Monster Trucks',
    'Off-Road Vehicles',
    'Police Cars',
    'Fire Trucks',
    'Construction Vehicles',
    'Motorcycles',
    'Military Vehicles',
    'Aircraft / Planes',
    'Boats & Watercraft',
    'Hot Wheels Originals',
    'Hot Wheels Legends',
    'HW Flames',
    'HW Race Team',
    'HW Rescue',
    'HW Metro',
    'HW Art Cars',
    'HW Exotics',
    'Street Beasts',
    'X-Raycers',
    'Track Stars',
    'Color Shifters',
    'For Collectors',
    'For Kids',
    'Track Builders',
    'Playsets',
    'Stunt Sets',
    'Die-Cast Basics',
    'Limited Editions',
    'Treasure Hunts',
    'Super Treasure Hunts',
    'First Editions',
    'Exclusive Variants',
    'Glow in the Dark',
    'Color Changers',
    'Premium Models',
    'Retro Series',
    'Real Riders (rubber tires)',
    'Movie & TV Series Cars',
    'Carded Singles',
    '5-Packs',
    '10-Packs',
    'Display Cases',
    'Box Sets',
    'Collector Editions'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-20"
          />
          <span className="text-gray-400">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-20"
          />
        </div>

        {/* Sort By */}
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
