import React from 'react';
import { WHY_KALAA_VIBE } from '../data/brandData';
import { Palette, Eye, MessageCircleQuestion, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyKalaaVibe: React.FC = () => {
  const icons = [
    <Palette className="w-6 h-6 text-[#8A381A]" key="palette" />,
    <Eye className="w-6 h-6 text-[#8A381A]" key="eye" />,
    <MessageCircleQuestion className="w-6 h-6 text-[#8A381A]" key="question" />,
    <HeartHandshake className="w-6 h-6 text-[#8A381A]" key="handshake" />,
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            <span>The KALAA VIBE Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
            Why KALAA VIBE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
            Thoughtfully bringing culture, craftsmanship, and transparent service to your home decor journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_KALAA_VIBE.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-8 rounded-xl bg-[#F4EFEB] border border-[#E8DFD5] hover:border-[#8A381A]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E2D5C4] flex items-center justify-center mb-6 shadow-2xs">
                  {icons[idx]}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#231F1C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665B51] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DCCE] text-[11px] text-[#887869] font-medium uppercase tracking-wider">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
