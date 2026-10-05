import React, { useState } from 'react';
import { BRAND_INFO, getWhatsAppGeneralUrl } from '../data/brandData';
import { Phone, MapPin, Clock, Globe, Instagram, MessageCircle, Send, CheckCircle, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please provide your name, phone number, and message.');
      return;
    }

    setSubmitted(true);
    // simulated smooth submission
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name before sending via WhatsApp.');
      return;
    }

    const text = `Hello KALAA VIBE,\nMy name is ${formData.name}.\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nEnquiry / Message:\n${formData.message || 'I would like to enquire about your wall decor collection.'}`;
    const url = `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A381A]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231F1C] font-normal tracking-tight">
            Let’s Talk About Your Space
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#685C50] leading-relaxed">
            Reach out for product inquiries, custom requirements, or to explore how our decor pieces can enhance your home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Details & Location Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Info Cards */}
            <div className="bg-[#F4EFEB] rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#231F1C] border-b border-[#E5DCCE] pb-3">
                Business Information
              </h3>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#DDD3C5] text-[#8A381A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#887869] font-medium block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-[#231F1C] hover:text-[#8A381A] transition-colors"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                  <div className="mt-1">
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#245D3B] font-medium hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat directly on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#DDD3C5] text-[#8A381A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#887869] font-medium block">
                    Business Address
                  </span>
                  <p className="text-sm text-[#3E362E] leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#DDD3C5] text-[#8A381A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#887869] font-medium block">
                    Business Hours
                  </span>
                  <p className="text-sm font-semibold text-[#231F1C]">
                    {BRAND_INFO.businessHours}
                  </p>
                  <span className="text-xs text-[#887869]">
                    Monday through Saturday
                  </span>
                </div>
              </div>

              {/* Website & Social */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#DDD3C5] text-[#8A381A] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#887869] font-medium block">
                    Online Presence
                  </span>
                  <a
                    href={BRAND_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#231F1C] hover:text-[#8A381A] block transition-colors"
                  >
                    {BRAND_INFO.websiteDisplay}
                  </a>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8A381A] font-medium hover:underline mt-0.5"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram {BRAND_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Google Maps Location Card */}
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD5] bg-[#F0E9DF] p-6 text-left relative shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8A381A]" />
                  <span className="font-serif text-base font-semibold text-[#231F1C]">
                    Studio Location
                  </span>
                </div>
                <span className="text-[11px] text-[#887869] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E2D5C4]">
                  Mathpura, Chhattisgarh
                </span>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-[#E5DCCE] border border-[#DDD3C5] flex items-center justify-center p-4">
                {/* Visual grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(#8A381A 1px, transparent 1px), radial-gradient(#8A381A 1px, #E5DCCE 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                />

                <div className="relative z-10 text-center bg-[#FAF8F5]/90 backdrop-blur-xs p-4 rounded-lg border border-[#E2D5C4] max-w-xs shadow-md">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#8A381A] text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#231F1C]">
                    KALAA VIBE
                  </h4>
                  <p className="text-[11px] text-[#6B5F54] mt-0.5">
                    RDA Colony, Tikrapara, Mathpura, Chhattisgarh 492001
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      'NEW, RDA Colony, Tikrapara, Mathpura, Chhattisgarh 492001, India'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-block text-[11px] text-[#8A381A] font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F4EFEB] rounded-2xl p-8 sm:p-10 border border-[#E8DFD5] shadow-xs">
            <h3 className="font-serif text-2xl font-medium text-[#231F1C] mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#665B51] mb-8">
              Fill out your details below and our team will get back to you promptly during business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#CDE1CE] text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#2E7D32] mx-auto flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#231F1C] font-medium">
                  Thank You, {formData.name}
                </h4>
                <p className="mt-2 text-sm text-[#5E544B] max-w-md mx-auto">
                  We have received your enquiry. We will connect with you via phone ({formData.phone}) or email during our business hours (10:00 AM – 6:00 PM).
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 bg-[#FAF8F5] border border-[#DDD3C5] text-[#231F1C] text-xs font-medium rounded-md hover:bg-[#EFEAE2]"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={getWhatsAppGeneralUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#245D3B] text-white text-xs font-medium rounded-md hover:bg-[#1D4A2F] flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-[#FDF2F2] border border-[#F5C2C2] text-[#B91C1C] text-xs rounded-md">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#4A423B] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#8A381A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD3C5] rounded-md text-sm text-[#231F1C] placeholder-[#887869] focus:outline-none focus:ring-2 focus:ring-[#8A381A] focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#4A423B] uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp <span className="text-[#8A381A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD3C5] rounded-md text-sm text-[#231F1C] placeholder-[#887869] focus:outline-none focus:ring-2 focus:ring-[#8A381A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#4A423B] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD3C5] rounded-md text-sm text-[#231F1C] placeholder-[#887869] focus:outline-none focus:ring-2 focus:ring-[#8A381A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#4A423B] uppercase tracking-wider mb-1.5">
                    Your Message / Decor Inquiry <span className="text-[#8A381A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the pieces you're interested in or the wall space you're looking to decorate..."
                    required
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD3C5] rounded-md text-sm text-[#231F1C] placeholder-[#887869] focus:outline-none focus:ring-2 focus:ring-[#8A381A] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-[#231F1C] hover:bg-[#8A381A] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-3.5 px-6 bg-[#245D3B] hover:bg-[#1D4A2F] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
