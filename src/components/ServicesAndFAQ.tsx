import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/studioData';

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-[#EAE4D8]/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#8C6A24] font-medium border-b border-[#E3CA8D]/50">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Transparência & Cuidado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1F1C18] tracking-tight">
            Dúvidas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#E8E2D6] bg-[#FAF9F6] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#1F1C18] hover:text-[#8C6A24] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#5E574D] font-sans leading-relaxed border-t border-[#F0EBE1] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Backwards compatibility export
export const ServicesAndFAQ = FAQSection;
