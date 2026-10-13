import React from 'react';
import { MapPin, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-14 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D6] shadow-sm text-center max-w-2xl mx-auto">
          
          {/* Location Pin Icon */}
          <div className="w-14 h-14 rounded-full bg-[#FAF5EB] border border-[#E3CA8D]/50 flex items-center justify-center mx-auto mb-5 text-[#8C6A24] shadow-sm">
            <MapPin className="w-6 h-6 text-[#A88438]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1F1C18] tracking-tight mb-3">
            Encontre o Studio
          </h2>

          <p className="text-sm sm:text-base text-[#605A52] font-light max-w-md mx-auto mb-6 leading-relaxed">
            Ambiente climatizado, aconchegante e pensado com carinho para que você relaxe enquanto cuidamos da sua autoestima.
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#736B5E] mb-8 pb-6 border-b border-[#F2ECE1]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Atendimento com horário agendado</span>
            </div>
            <span aria-hidden="true" className="text-[#D6B362]">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Espaço acolhedor e exclusivo</span>
            </div>
          </div>

          {/* Action Button as requested */}
          <div>
            <a
              href={STUDIO_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] px-8 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#1F1C18] bg-[#FAF5EB] hover:bg-[#F3EADA] border border-[#D6B362]/60 active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#8C6A24]" />
              <span>Ver no Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8C6A24]/70" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
