import React from 'react';
import { Sparkles, MapPin, Clock, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import terracottaPlateImg from '../assets/images/terracotta_plate_1791192235135.jpg';
import wallHangingImg from '../assets/images/wall_hanging_one_1791192222560.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden border border-[#E2D5C4] shadow-xl bg-[#F0E9DF] aspect-[4/5]">
                <img
                  src={terracottaPlateImg}
                  alt="KALAA VIBE Traditional Artistry"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Offset Secondary Image Accent */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 aspect-square rounded-xl overflow-hidden border-4 border-[#FAF8F5] shadow-2xl bg-[#E8E0D5] hidden sm:block">
                <img
                  src={wallHangingImg}
                  alt="Handcrafted Wall Decor Details"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Decorative motif element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-[#B89047]/40 pointer-events-none -z-10" />
            </div>
          </div>

          {/* Right Column: Authentic Story Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 mb-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
              <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
              <span>About KALAA VIBE</span>
            </div>

            {/* Required Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#231F1C] font-normal tracking-tight leading-tight">
              Where Art Meets Expression
            </h2>

            {/* Required Supporting Body */}
            <p className="mt-6 text-base sm:text-lg text-[#554B42] leading-relaxed font-normal">
              KALAA VIBE brings artistic and expressive pieces together for people who appreciate creativity, culture and beautiful spaces.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#6B5F54] leading-relaxed">
              Rooted in Mathpura, Chhattisgarh, our focus is bringing distinctive wall-hanging and traditional-style decor to life. Every piece is selected to introduce an inviting aura of warmth, culture, and thoughtful design into residential and creative spaces.
            </p>

            {/* Core Values / Business Information */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8DFD5]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#F2ECE4] text-[#8A381A] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#231F1C] uppercase tracking-wider">
                    Our Philosophy
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6E63] leading-relaxed">
                    Celebrating art, culture, and expressive interior character.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#F2ECE4] text-[#8A381A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#231F1C] uppercase tracking-wider">
                    Origin
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6E63] leading-relaxed">
                    NEW, RDA Colony, Tikrapara, Mathpura, Chhattisgarh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#F2ECE4] text-[#8A381A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#231F1C] uppercase tracking-wider">
                    Studio Hours
                  </h4>
                  <p className="mt-1 text-xs text-[#7A6E63] leading-relaxed">
                    {BRAND_INFO.businessHours} for direct consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
