import React, { useState } from 'react';
import { Product } from './types';
import { PRODUCTS } from './data/brandData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Collections } from './components/Collections';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { WhyKalaaVibe } from './components/WhyKalaaVibe';
import { VisualGallery } from './components/VisualGallery';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { SearchModal } from './components/SearchModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Pieces');
  const [savedProductIds, setSavedProductIds] = useState<string[]>([]);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Lightbox state for zoom in product detail modal
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const handleToggleSave = (product: Product) => {
    setSavedProductIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleRemoveSaved = (productId: string) => {
    setSavedProductIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleClearSaved = () => {
    setSavedProductIds([]);
  };

  const savedProducts = PRODUCTS.filter((p) => savedProductIds.includes(p.id));

  const handleExploreClick = () => {
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelectFromCollections = (category: string) => {
    setSelectedCategory(category);
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] flex flex-col font-sans selection:bg-[#EAE0D3] selection:text-[#522915]">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenEnquiryDrawer={() => setIsEnquiryDrawerOpen(true)}
        enquiryCount={savedProductIds.length}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 3. Featured Collection */}
        <FeaturedCollection
          products={PRODUCTS}
          onViewDetails={(product) => setSelectedProduct(product)}
          onExploreAll={handleExploreClick}
          savedProductIds={savedProductIds}
          onToggleSave={handleToggleSave}
        />

        {/* 6. Collections Section */}
        <Collections onSelectCategory={handleCategorySelectFromCollections} />

        {/* 4. Complete Shop Section */}
        <Shop
          products={PRODUCTS}
          onViewDetails={(product) => setSelectedProduct(product)}
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
          savedProductIds={savedProductIds}
          onToggleSave={handleToggleSave}
        />

        {/* 7. About KALAA VIBE */}
        <About />

        {/* 9. Why KALAA VIBE */}
        <WhyKalaaVibe />

        {/* 8. Visual Gallery */}
        <VisualGallery />

        {/* 10. Instagram Section */}
        <InstagramSection />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp CTA */}
      <WhatsAppFloatingButton />

      {/* 5. Product Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isSaved={selectedProduct ? savedProductIds.includes(selectedProduct.id) : false}
        onToggleSave={handleToggleSave}
        onOpenImageLightbox={(imageUrl, title) => setLightboxImage({ url: imageUrl, title })}
      />

      {/* Standalone Lightbox for modal zoom */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-3 text-center text-white text-sm font-serif">
              {lightboxImage.title}
            </div>
          </div>
        </div>
      )}

      {/* Saved Enquiries Drawer */}
      <EnquiryDrawer
        isOpen={isEnquiryDrawerOpen}
        onClose={() => setIsEnquiryDrawerOpen(false)}
        savedProducts={savedProducts}
        onRemoveProduct={handleRemoveSaved}
        onClearAll={handleClearSaved}
        onViewProductDetails={(product) => setSelectedProduct(product)}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />
    </div>
  );
}
