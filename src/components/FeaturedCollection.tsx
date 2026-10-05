import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedCollectionProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onExploreAll: () => void;
  savedProductIds: string[];
  onToggleSave: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onViewDetails,
  onExploreAll,
  savedProductIds,
  onToggleSave,
}) => {
  const featuredItems = products.filter((p) => p.featured);
  const displayItems = featuredItems.length > 0 ? featuredItems : products.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE8] border-y border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
              <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
              Featured Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
              Handpicked decorative wall-hanging and traditional-style decor pieces crafted to bring warmth, heritage, and artistic elegance to contemporary living spaces.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8A381A] hover:text-[#5E2410] group transition-colors cursor-pointer"
            >
              <span>Explore All Pieces</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              isSaved={savedProductIds.includes(product.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
