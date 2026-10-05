import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Search, X, ArrowRight } from 'lucide-react';
import { getWhatsAppProductUrl } from '../data/brandData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        (p.style && p.style.toLowerCase().includes(term))
    );
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E2D5C4] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8DFD5] flex items-center gap-3 bg-[#F4EFEB]">
          <Search className="w-5 h-5 text-[#8A381A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search wall hangings, brass art, carved decor..."
            className="flex-1 bg-transparent text-[#231F1C] placeholder-[#887869] text-base focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#887869] hover:text-[#231F1C] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-[#8A381A] hover:text-[#5E2410] px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 sm:p-6">
          {searchTerm.trim() ? (
            searchResults.length > 0 ? (
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold text-[#887869] tracking-wider block mb-2">
                  Matching Pieces ({searchResults.length})
                </span>
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-[#F5EFE8] hover:bg-[#EFE8DD] border border-[#E5DCCE] cursor-pointer transition-colors group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#8A381A] block">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-[#231F1C] group-hover:text-[#8A381A] truncate transition-colors">
                        {product.name}
                      </h4>
                      <span className="text-xs text-[#7A6E63]">
                        Enquire for Price
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#887869] group-hover:text-[#8A381A] transform group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-[#685C50]">
                  No decor items found for "{searchTerm}".
                </p>
                <p className="text-xs text-[#887869] mt-1">
                  Try searching for "wall", "brass", "jharokha", or "traditional".
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-8 text-xs text-[#887869]">
              Type a product name or category keyword to instantly find decorative wall hangings and handcrafted pieces.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
