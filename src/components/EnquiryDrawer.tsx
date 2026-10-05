import React from 'react';
import { Product } from '../types';
import { getWhatsAppMultiEnquiryUrl, getWhatsAppProductUrl } from '../data/brandData';
import { X, Trash2, MessageCircle, ArrowRight, BookmarkCheck } from 'lucide-react';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onViewProductDetails: (product: Product) => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  savedProducts,
  onRemoveProduct,
  onClearAll,
  onViewProductDetails,
}) => {
  if (!isOpen) return null;

  const productNames = savedProducts.map((p) => p.name);
  const multiWhatsappUrl = getWhatsAppMultiEnquiryUrl(productNames);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-[#E2D5C4] flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8DFD5] flex items-center justify-between bg-[#F4EFEB]">
          <div className="flex items-center gap-2.5">
            <BookmarkCheck className="w-5 h-5 text-[#8A381A]" />
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#231F1C]">
                Enquiry List
              </h3>
              <span className="text-xs text-[#7A6E63]">
                {savedProducts.length} {savedProducts.length === 1 ? 'piece saved' : 'pieces saved'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Enquiry List"
            className="p-2 text-[#685C50] hover:text-[#231F1C] hover:bg-[#EAE2D6] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedProducts.length > 0 ? (
            <>
              <div className="flex items-center justify-between text-xs text-[#887869] pb-2 border-b border-[#EFE8DD]">
                <span>Saved Items</span>
                <button
                  onClick={onClearAll}
                  className="text-[#8A381A] hover:underline font-medium cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-lg bg-[#F5EFE8] border border-[#E5DCCE] items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover cursor-pointer"
                    onClick={() => {
                      onViewProductDetails(product);
                      onClose();
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-semibold text-[#8A381A] block">
                      {product.category}
                    </span>
                    <h4
                      onClick={() => {
                        onViewProductDetails(product);
                        onClose();
                      }}
                      className="font-serif text-sm font-semibold text-[#231F1C] hover:text-[#8A381A] truncate cursor-pointer"
                    >
                      {product.name}
                    </h4>
                    <span className="text-xs text-[#7A6E63] font-medium block mt-0.5">
                      Enquire for Price
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <button
                      onClick={() => onRemoveProduct(product.id)}
                      aria-label="Remove item"
                      className="p-1.5 text-[#887869] hover:text-[#B91C1C] transition-colors rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <a
                      href={getWhatsAppProductUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Enquire this item"
                      className="text-[#245D3B] hover:text-[#1D4A2F] p-1 rounded"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-[#EAE2D6] text-[#887869] flex items-center justify-center mx-auto mb-3">
                <BookmarkCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg text-[#231F1C] font-medium">
                No pieces saved yet
              </h4>
              <p className="mt-1 text-xs text-[#7A6E63] max-w-xs mx-auto">
                Bookmark items from our collection to enquire about multiple pieces in a single WhatsApp conversation.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer & Multi-Enquiry CTA */}
        {savedProducts.length > 0 && (
          <div className="p-6 border-t border-[#E8DFD5] bg-[#F4EFEB] space-y-3">
            <a
              href={multiWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#245D3B] hover:bg-[#1D4A2F] text-white font-medium text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire All on WhatsApp ({savedProducts.length})</span>
            </a>

            <p className="text-[11px] text-center text-[#887869]">
              Generates a prefilled WhatsApp list for direct pricing & delivery inquiry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
