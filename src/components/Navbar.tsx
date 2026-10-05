import React, { useState, useEffect } from 'react';
import { BRAND_INFO, getWhatsAppGeneralUrl } from '../data/brandData';
import { Search, Instagram, MessageCircle, Menu, X, BookmarkCheck } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiryDrawer: () => void;
  enquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenEnquiryDrawer,
  enquiryCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD5]'
            : 'bg-[#FAF8F5] border-b border-transparent'
        }`}
      >
        {/* Subtle top banner */}
        <div className="bg-[#2E2823] text-[#FAF8F5] py-1.5 px-4 text-center text-xs tracking-wider font-light flex items-center justify-center gap-3">
          <span>Art That Gives Your Space a Soul</span>
          <span className="hidden sm:inline text-[#B89047]">·</span>
          <span className="hidden sm:inline">WhatsApp Enquiry: {BRAND_INFO.phoneDisplay}</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Identity */}
            <a
              href="#home"
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A] rounded-sm py-1"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#231F1C] group-hover:text-[#8A381A] transition-colors">
                KALAA VIBE
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#887869] font-medium -mt-1">
                Indian Art & Decor
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4A423B]">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-[#8A381A] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A] rounded-xs"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Collection"
                className="p-2 text-[#4A423B] hover:text-[#8A381A] hover:bg-[#EFEAE2] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Instagram Icon */}
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @kalaavibe"
                className="p-2 text-[#4A423B] hover:text-[#8A381A] hover:bg-[#EFEAE2] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 text-[#2E7D32] hover:text-[#1B5E20] hover:bg-[#E8F5E9] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Enquiry / Saved List Drawer Button */}
              <button
                onClick={onOpenEnquiryDrawer}
                aria-label="View Saved Enquiries"
                className="relative p-2 text-[#4A423B] hover:text-[#8A381A] hover:bg-[#EFEAE2] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A381A]"
              >
                <BookmarkCheck className="w-5 h-5" />
                {enquiryCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8A381A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {enquiryCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="md:hidden p-2 text-[#4A423B] hover:text-[#8A381A] transition-colors rounded-md"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8DFD5] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-lg font-serif text-[#231F1C] hover:text-[#8A381A] py-1 border-b border-[#F0E8DE] last:border-none"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#245D3B] text-white rounded-md text-sm font-medium hover:bg-[#1E4D31] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp ({BRAND_INFO.phoneDisplay})
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#D5C7B7] text-[#4A423B] rounded-md text-sm font-medium hover:bg-[#EFEAE2] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Follow @kalaavibe
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
