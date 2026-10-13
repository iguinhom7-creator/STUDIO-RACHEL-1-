import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const CourseSection: React.FC = () => {
  const highlights = [
    'Teoria e anatomia da lâmina ungueal',
    'Técnicas de preparação e controle de produto',
    'Lixamento técnico e curvatura C perfeita',
    'Mentoria prática e suporte para alunas',
  ];

  return (
    <section id="curso" className="py-16 sm:py-24 bg-[#FAF7F0] border-y border-[#ECE4D4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Distinctive Luxury Course Card */}
        <div className="relative rounded-3xl bg-white border border-[#D6B362]/40 shadow-xl shadow-[#C5A059]/10 p-7 sm:p-12 text-center overflow-hidden">
          
          {/* Subtle gold ribbon top accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D6B362] via-[#F3E1B5] to-[#B8923F]" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-[#FAF5EB] border border-[#E3CA8D]/50 flex items-center justify-center mx-auto mb-5 text-[#8C6A24] shadow-sm">
            <Sparkles className="w-5 h-5 text-[#A88438]" />
          </div>

          {/* Title as requested */}
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1C18] tracking-tight mb-4">
            Curso de Nail Design
          </h2>

          {/* Short inviting text */}
          <p className="text-base sm:text-lg text-[#5C5549] font-light max-w-lg mx-auto mb-8 leading-relaxed text-balance">
            Aprenda as técnicas mais modernas do mercado de unhas e eleve o padrão dos seus atendimentos com acabamento de alto nível.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4F493E]">
                <CheckCircle2 className="w-4 h-4 text-[#B8923F] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Button as requested */}
          <div>
            <a
              href={STUDIO_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-9 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white bg-[#B8923F] hover:bg-[#A88438] active:scale-[0.98] rounded-full shadow-lg shadow-[#C5A059]/25 transition-all duration-300"
            >
              <span>Quero Saber Mais</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
