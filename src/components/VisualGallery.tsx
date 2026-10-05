import React, { useState } from 'react';
import { GALLERY_ITEMS, getWhatsAppProductUrl } from '../data/brandData';
import { Eye, MessageCircle, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface VisualGalleryProps {
  onOpenImageDetails?: (title: string) => void;
}

export const VisualGallery: React.FC<VisualGalleryProps> = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F5EFE8] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
            Visual Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
            A visual glimpse into our handcrafted wall decor and artistic pieces. Click any visual to inspect in high resolution.
          </p>
        </div>

        {/* Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-[#EAE2D6] border border-[#DDD3C5] shadow-xs hover:shadow-xl transition-all duration-300 ${
                item.aspect === 'tall' ? 'sm:row-span-2 aspect-[3/4] sm:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#231F1C]/80 via-[#231F1C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-wider text-[#E8D0B3] font-medium block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-white font-medium mt-1">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#FAF8F5]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {/* Bottom Caption & WhatsApp Enquiry */}
            <div className="mt-4 w-full bg-[#1C1917]/90 text-white p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
              <div className="text-center sm:text-left">
                <span className="text-[11px] text-[#D8B48D] uppercase tracking-wider block">
                  {currentItem.category}
                </span>
                <h4 className="font-serif text-lg font-medium">
                  {currentItem.title}
                </h4>
              </div>

              <a
                href={getWhatsAppProductUrl(currentItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#245D3B] hover:bg-[#1D4A2F] text-white text-xs font-medium rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
