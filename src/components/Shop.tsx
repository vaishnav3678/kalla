import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data/brandData';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, X, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../data/brandData';

interface ShopProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  savedProductIds: string[];
  onToggleSave: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({
  products,
  onViewDetails,
  selectedCategory,
  onSelectCategory,
  savedProductIds,
  onToggleSave,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc'>('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All Pieces' || product.category === selectedCategory;

        // Search query
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          (product.style && product.style.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        // default featured
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    onSelectCategory('All Pieces');
  };

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A] block mb-2">
            Artistic Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
            Shop Wall & Home Decor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
            Explore handcrafted and traditional artistic decor items designed to transform any interior into a soulful space.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#F4EFEB] p-4 sm:p-6 rounded-xl border border-[#E8DFD5] mb-10 shadow-2xs">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#887869]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wall hangings, brass art, decor..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF8F5] border border-[#DDD3C5] rounded-md text-sm text-[#231F1C] placeholder-[#887869] focus:outline-none focus:ring-2 focus:ring-[#8A381A] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#887869] hover:text-[#231F1C]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Buttons (Interactive Filter Controls) */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#231F1C] text-[#FAF8F5] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#554C43] hover:text-[#231F1C] hover:bg-[#EAE2D6] border border-[#DDD3C5]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end lg:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#887869]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'name-asc')}
                className="bg-[#FAF8F5] border border-[#DDD3C5] rounded-md px-3 py-2 text-xs font-medium text-[#4A423B] focus:outline-none focus:ring-2 focus:ring-[#8A381A] transition-all cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Alphabetical (A–Z)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(selectedCategory !== 'All Pieces' || searchQuery) && (
            <div className="mt-4 pt-3 border-t border-[#E5DC CE] flex items-center justify-between text-xs text-[#6B5F54]">
              <div className="flex items-center gap-2 flex-wrap">
                <span>Active filters:</span>
                {selectedCategory !== 'All Pieces' && (
                  <span className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D5C7B7] text-[#231F1C] font-medium">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D5C7B7] text-[#231F1C] font-medium">
                    Query: "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={handleClearFilters}
                className="text-[#8A381A] hover:underline font-medium text-xs ml-auto"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Count & Meta Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#887869]">
          <span>
            Showing <strong className="text-[#231F1C]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>
          <span className="hidden sm:inline">
            Direct pricing and inquiries via WhatsApp
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                isSaved={savedProductIds.includes(product.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-[#F5EFE8] rounded-xl border border-[#E8DFD5] max-w-lg mx-auto">
            <h3 className="font-serif text-2xl text-[#231F1C] font-normal">
              No matching pieces found
            </h3>
            <p className="mt-2 text-sm text-[#685C50]">
              We couldn't find any decor items matching your filter. Try adjusting your search or explore the complete collection.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-5 px-5 py-2.5 bg-[#231F1C] text-[#FAF8F5] text-xs font-medium rounded-md hover:bg-[#8A381A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Decor Consultation Box */}
        <div className="mt-16 bg-[#F2ECE4] rounded-xl p-8 sm:p-10 border border-[#E2D6C5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A381A] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#B89047]" />
              <span>Custom Requirements</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#231F1C] font-normal">
              Looking for a Specific Wall Hanging or Custom Decor?
            </h3>
            <p className="mt-2 text-sm text-[#685C50] leading-relaxed">
              If you have a specific space dimension, wall color, or artistic style in mind, talk to our team directly on WhatsApp for tailored recommendations.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#245D3B] hover:bg-[#1D4A2F] text-white rounded-md text-sm font-medium shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
