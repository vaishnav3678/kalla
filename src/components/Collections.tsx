import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import wallHangingImg from '../assets/images/wall_hanging_one_1791192222560.jpg';
import terracottaImg from '../assets/images/terracotta_plate_1791192235135.jpg';
import carvedJharokhaImg from '../assets/images/carved_jharokha_1791192253816.jpg';
import heroArtImg from '../assets/images/kalaa_hero_art_1791192208276.jpg';

interface CollectionsProps {
  onSelectCategory: (category: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  const collectionCategories = [
    {
      title: 'Wall Decor',
      description: 'Artistic bells, hanging accents, and handcrafted metal focal points.',
      image: wallHangingImg,
      count: 'Curated Pieces',
    },
    {
      title: 'Traditional Art',
      description: 'Heritage carved jharokhas and folk motif mirror reliefs.',
      image: carvedJharokhaImg,
      count: 'Heritage Craft',
    },
    {
      title: 'Artistic Pieces',
      description: 'Terracotta wall plates and expressive artisanal creations.',
      image: terracottaImg,
      count: 'Folk & Earthy',
    },
    {
      title: 'Home Decor',
      description: 'Soulful accents designed to harmonize living and gallery walls.',
      image: heroArtImg,
      count: 'Living Spaces',
    },
  ];

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A] block mb-2">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
            Explore Our Collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
            Browse our decor pieces grouped by aesthetic and artistic tradition.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionCategories.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectCategory(item.title)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#F0E9DF] border border-[#E4DACD] hover:border-[#8A381A] transition-all duration-300 shadow-xs hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#231F1C]/80 via-[#231F1C]/25 to-transparent transition-opacity" />

                {/* Content details overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#E6CDAA] font-medium block mb-1">
                    {item.count}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-normal tracking-wide text-white group-hover:text-[#F3D7B5] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transform group-hover:bg-[#8A381A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
