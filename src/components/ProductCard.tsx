import React from 'react';
import { Product } from '../types';
import { getWhatsAppProductUrl } from '../data/brandData';
import { MessageCircle, Eye, Bookmark, BookmarkCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  isSaved?: boolean;
  onToggleSave?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  isSaved = false,
  onToggleSave,
}) => {
  const whatsappUrl = getWhatsAppProductUrl(product.name);

  return (
    <div className="group flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E8DFD5] hover:border-[#C4B29E] transition-all duration-300 hover:shadow-lg">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#EFE9DF]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Category kicker */}
          <span className="bg-[#FAF8F5]/90 backdrop-blur-xs text-[#6B5F54] text-[11px] font-medium px-2.5 py-1 rounded-sm shadow-2xs border border-[#E8DFD5]">
            {product.category}
          </span>

          {/* Save/Wishlist button (interactive) */}
          {onToggleSave && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(product);
              }}
              aria-label={isSaved ? 'Remove from enquiry list' : 'Add to enquiry list'}
              className="pointer-events-auto p-2 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs text-[#4A423B] hover:text-[#8A381A] hover:bg-white shadow-2xs border border-[#E8DFD5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-[#8A381A]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {/* Hover Quick View Overlay button */}
        <div className="absolute inset-0 bg-[#231F1C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="px-4 py-2.5 bg-[#FAF8F5] text-[#231F1C] text-xs font-semibold tracking-wider uppercase rounded-md shadow-md hover:bg-[#231F1C] hover:text-white transition-colors duration-200 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-serif text-lg font-semibold text-[#231F1C] hover:text-[#8A381A] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#6B5F54] line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="mt-5 pt-4 border-t border-[#EFE8DD] flex flex-col gap-3">
          {/* Price specification: "Enquire for Price" (never fake prices) */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#86786C] font-medium">Pricing</span>
            <span className="text-sm font-semibold text-[#8A381A] tracking-tight">
              {product.price ? product.price : 'Enquire for Price'}
            </span>
          </div>

          {/* Buttons: View Details & WhatsApp Enquiry */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails(product)}
              className="w-full py-2.5 px-3 bg-[#EFE8DD] hover:bg-[#E2D7C8] text-[#231F1C] text-xs font-medium rounded-md transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
            >
              View Details
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#245D3B] hover:bg-[#1D4A2F] text-white text-xs font-medium rounded-md transition-colors text-center inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245D3B]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
