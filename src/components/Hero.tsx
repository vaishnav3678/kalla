import React from 'react';
import { BRAND_INFO, getWhatsAppGeneralUrl } from '../data/brandData';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 bg-[#FAF8F5]">
      {/* Subtle background ambient accents */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F2E7DC]/60 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
              <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Authentic Indian Home & Wall Decor</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] font-normal leading-[1.12] tracking-tight">
              Art That Gives Your Space a Soul.
            </h1>

            {/* Supporting text */}
            <p className="mt-6 text-base sm:text-lg text-[#5E544B] leading-relaxed max-w-xl font-normal">
              {BRAND_INFO.heroSupportingText}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#231F1C] hover:bg-[#8A381A] text-[#FAF8F5] text-sm font-medium tracking-wide rounded-md shadow-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FAF8F5] hover:bg-[#F2ECE4] text-[#231F1C] border border-[#D8CEBF] hover:border-[#8A381A] text-sm font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quiet metadata features */}
            <div className="mt-10 pt-6 border-t border-[#EAE2D7] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#6B5F54]">
              <div>
                <span className="block font-semibold text-[#231F1C] text-sm">Decorative Wall Art</span>
                <span className="text-[#86786C]">Traditional & Modern</span>
              </div>
              <div>
                <span className="block font-semibold text-[#231F1C] text-sm">Direct Enquiries</span>
                <span className="text-[#86786C]">{BRAND_INFO.phoneDisplay}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-semibold text-[#231F1C] text-sm">Studio Location</span>
                <span className="text-[#86786C]">Chhattisgarh, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EDE4D8] border border-[#E2D5C4]/80 p-2 sm:p-3">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#E7DDD0]">
                  <img
                    src={BRAND_INFO.heroImage}
                    alt="KALAA VIBE Handcrafted Wall Hanging Art"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231F1C]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating card caption inside hero image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-lg border border-[#E8DFD5] shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] tracking-wider uppercase text-[#8A381A] font-semibold block">
                          Featured Installation
                        </span>
                        <span className="font-serif text-base text-[#231F1C] font-semibold">
                          Artistic Wall Hanging Piece
                        </span>
                      </div>
                      <span className="text-[#6B5F54] font-medium text-xs bg-[#EFE9DF] px-2 py-1 rounded">
                        Enquire for Price
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background geometry */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-[#B89047]/40 rounded-full -z-10 hidden sm:block pointer-events-none" />
              <div className="absolute -top-5 -left-5 w-28 h-28 bg-[#EFE6DB] rounded-2xl -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
