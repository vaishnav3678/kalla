import React from 'react';
import { BRAND_INFO, getWhatsAppGeneralUrl } from '../data/brandData';
import { Instagram, MessageCircle, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1815] text-[#FAF8F5] pt-16 pb-12 border-t border-[#38312B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#352D26]">
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold tracking-wider text-[#FAF8F5]">
                KALAA VIBE
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89047] font-medium -mt-1">
                Indian Art & Decor
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#E6DDD3] max-w-sm">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs text-[#A89C8F] leading-relaxed max-w-sm font-light">
              Artistic and handcrafted decor pieces designed to bring character, culture and creativity into your space.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#2A241F] hover:bg-[#8A381A] text-[#FAF8F5] flex items-center justify-center transition-colors border border-[#3E342C]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#245D3B] hover:bg-[#1D4A2F] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-[#D4C8BC]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FAF8F5] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold mb-5">
              Contact & Studio
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#D4C8BC]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8072] text-xs block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                    className="hover:text-white font-medium"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8072] text-xs block">Instagram</span>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white font-medium"
                  >
                    {BRAND_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8072] text-xs block">Address</span>
                  <p className="leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8072] text-xs block">Business Hours</span>
                  <p>{BRAND_INFO.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8072] gap-4">
          <p>© 2026 KALAA VIBE. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
