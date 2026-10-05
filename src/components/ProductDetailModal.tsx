import React, { useState } from 'react';
import { Product } from '../types';
import { BRAND_INFO, getWhatsAppProductUrl } from '../data/brandData';
import { X, MessageCircle, Phone, Bookmark, BookmarkCheck, CheckCircle2, ShieldCheck, Clock, MapPin, ZoomIn } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isSaved?: boolean;
  onToggleSave?: (product: Product) => void;
  onOpenImageLightbox: (imageUrl: string, title: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isSaved = false,
  onToggleSave,
  onOpenImageLightbox,
}) => {
  if (!product) return null;

  const images = product.additionalImages && product.additionalImages.length > 0
    ? product.additionalImages
    : [product.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = images[activeImageIndex] || product.image;
  const whatsappUrl = getWhatsAppProductUrl(product.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-y-auto border border-[#E2D5C4] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Product Details"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FAF8F5]/90 text-[#4A423B] hover:text-[#231F1C] hover:bg-[#EFEAE2] transition-colors border border-[#E2D5C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Image & Gallery */}
          <div className="md:col-span-6 bg-[#F4EFEB] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DFD5]">
            {/* Main Image with Zoom Trigger */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#EAE2D6] group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <button
                type="button"
                onClick={() => onOpenImageLightbox(activeImage, product.name)}
                aria-label="Enlarge Image"
                className="absolute bottom-3 right-3 p-2 bg-[#FAF8F5]/90 backdrop-blur-xs rounded-md text-[#231F1C] hover:bg-white shadow-xs transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Zoom View</span>
              </button>
            </div>

            {/* Additional Thumbnails if available */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#8A381A] shadow-xs'
                        : 'border-[#DDD3C5] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick authenticity note */}
            <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex items-center justify-between text-xs text-[#7A6E63]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                Actual product visual
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8A381A]" />
                Direct from KALAA VIBE
              </span>
            </div>
          </div>

          {/* Right Column: Product Information & Inquiries */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category kicker */}
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A381A] mb-2">
                {product.category}
              </div>

              {/* Product Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#231F1C] leading-snug">
                {product.name}
              </h2>

              {/* Price specification: "Enquire for Price" (never fake prices) */}
              <div className="mt-4 p-3.5 rounded-lg bg-[#F5EFE8] border border-[#E5DCCE] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A6E63] block font-medium">Pricing</span>
                  <span className="text-lg font-bold text-[#8A381A]">
                    {product.price ? product.price : 'Enquire for Price'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A6E63] block font-medium">Availability</span>
                  <span className="text-xs font-semibold text-[#2E7D32]">
                    {product.availability || 'Available on Order'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-[#887869] font-semibold mb-2">
                  Product Details & Description
                </h4>
                <p className="text-sm text-[#50473F] leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Additional specs if available */}
              {product.style && (
                <div className="mt-4 pt-4 border-t border-[#EFE8DD] text-xs text-[#6B5F54] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#887869]">Artistic Style:</span>
                    <span className="font-medium text-[#231F1C]">{product.style}</span>
                  </div>
                  {product.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-[#887869]">Estimated Dimensions:</span>
                      <span className="font-medium text-[#231F1C]">{product.dimensions}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CTAs and Contact Helper */}
            <div className="mt-8 pt-6 border-t border-[#EFE8DD] flex flex-col gap-3">
              {/* Primary WhatsApp Enquiry CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#245D3B] hover:bg-[#1D4A2F] text-white font-medium text-sm rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </a>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-2">
                {/* Save/Wishlist button */}
                {onToggleSave && (
                  <button
                    type="button"
                    onClick={() => onToggleSave(product)}
                    className="py-2.5 px-3 border border-[#DDD3C5] hover:bg-[#F2ECE4] text-[#4A423B] text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    {isSaved ? (
                      <>
                        <BookmarkCheck className="w-4 h-4 text-[#8A381A]" />
                        <span>Saved to Enquiry List</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4 h-4" />
                        <span>Save for Later</span>
                      </>
                    )}
                  </button>
                )}

                {/* Call phone directly */}
                <a
                  href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 border border-[#DDD3C5] hover:bg-[#F2ECE4] text-[#4A423B] text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Business timings & address reminder */}
              <div className="mt-2 text-[11px] text-[#86786C] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#B89047]" />
                  {BRAND_INFO.businessHours}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B89047]" />
                  Tikrapara, Chhattisgarh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
