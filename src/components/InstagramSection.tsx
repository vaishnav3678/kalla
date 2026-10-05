import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { Instagram, ArrowUpRight } from 'lucide-react';
import wallHangingImg from '../assets/images/wall_hanging_one_1791192222560.jpg';
import terracottaImg from '../assets/images/terracotta_plate_1791192235135.jpg';
import carvedJharokhaImg from '../assets/images/carved_jharokha_1791192253816.jpg';
import lippanImg from '../assets/images/lippan_wall_art_1791192270416.jpg';
import dhokraImg from '../assets/images/dhokra_wall_art_1791192285978.jpg';

export const InstagramSection: React.FC = () => {
  const socialImages = [
    { src: wallHangingImg, alt: 'KALAA VIBE Instagram Post 1' },
    { src: terracottaImg, alt: 'KALAA VIBE Instagram Post 2' },
    { src: carvedJharokhaImg, alt: 'KALAA VIBE Instagram Post 3' },
    { src: lippanImg, alt: 'KALAA VIBE Instagram Post 4' },
    { src: dhokraImg, alt: 'KALAA VIBE Instagram Post 5' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F5EFE8] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
              <Instagram className="w-4 h-4 text-[#8A381A]" />
              <span>Social Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
              Follow KALAA VIBE
            </h2>
            <p className="mt-2 text-sm text-[#685C50]">
              Join our community of art and decor enthusiasts on Instagram{' '}
              <strong className="text-[#231F1C]">{BRAND_INFO.instagramHandle}</strong>
            </p>
          </div>

          <div className="mt-6 sm:mt-0">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF8F5] hover:bg-[#231F1C] text-[#231F1C] hover:text-white border border-[#DDD3C5] rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-2xs group"
            >
              <Instagram className="w-4 h-4 text-[#8A381A] group-hover:text-white transition-colors" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {socialImages.map((item, index) => (
            <a
              key={index}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View post ${index + 1} on Instagram`}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#EAE2D6] border border-[#DDD3C5] shadow-2xs"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#231F1C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram className="w-6 h-6 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
