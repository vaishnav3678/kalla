import React, { useState } from 'react';
import { BRAND_INFO, getWhatsAppGeneralUrl } from '../data/brandData';
import { MessageCircle, X, Sparkles, Clock, Send } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Hello KALAA VIBE, I am interested in your wall hanging decor pieces.',
    'Hello, do you have custom sizes for wall hangings?',
    'Hello, I would like to inquire about pricing and availability.',
  ];

  const handleSendPrompt = (prompt: string) => {
    const url = `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(prompt)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = `https://wa.me/${BRAND_INFO.phoneNumeric}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#D5C7B7] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#245D3B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-base font-semibold leading-tight">
                  KALAA VIBE Support
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#C8E6C9]">
                  <span className="w-2 h-2 rounded-full bg-[#81C784] animate-pulse" />
                  <span>Online · {BRAND_INFO.businessHours}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              className="text-white/80 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F8F5F0] space-y-3">
            <div className="bg-white p-3 rounded-lg border border-[#E8DFD5] text-xs text-[#4A423B] leading-relaxed shadow-2xs">
              <p className="font-medium text-[#231F1C] mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                Namaste! Welcome to KALAA VIBE
              </p>
              How can we assist you with our artistic wall-hanging & decor collection today?
            </div>

            {/* Quick prompts */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-semibold text-[#887869] tracking-wider block">
                Quick Options:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left text-xs p-2.5 rounded-md bg-white hover:bg-[#EFEAE2] border border-[#E2D8CC] text-[#332D28] transition-colors leading-snug cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2 flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs bg-white border border-[#D5C7B7] rounded-md text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#245D3B]"
              />
              <button
                type="submit"
                aria-label="Send WhatsApp message"
                className="p-2 bg-[#245D3B] hover:bg-[#1D4A2F] text-white rounded-md transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#EFEAE2] text-[10px] text-[#7A6E63] flex items-center justify-between border-t border-[#E2D8CC]">
            <span>Official WhatsApp: {BRAND_INFO.phoneDisplay}</span>
            <Clock className="w-3 h-3 text-[#8A381A]" />
          </div>
        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with KALAA VIBE on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#245D3B] hover:bg-[#1D4A2F] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#245D3B]"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#81C784] rounded-full border-2 border-[#FAF8F5] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#81C784] rounded-full border-2 border-[#FAF8F5]" />
      </button>
    </div>
  );
};
