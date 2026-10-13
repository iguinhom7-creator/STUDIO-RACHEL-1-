import React, { useState } from 'react';
import { MessageCircle, Instagram, Star, MapPin, Share2, Check } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Rachel Caetano Nail Design',
          text: 'Conheça o Studio Rachel Caetano Nail Design - Beleza, cuidado e elegância em cada detalhe.',
          url: window.location.href,
        });
      } catch {
        // user cancelled or share failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        // clipboard unavailable
      }
    }
  };

  return (
    <section id="inicio" className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-[#F5EEDB]/40 via-[#FAF6ED]/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          
          {/* Foto Completa de Corpo Todo da Rachel Caetano acima do nome */}
          <div className="relative mx-auto mb-5 w-full max-w-[200px] sm:max-w-[230px] aspect-[450/800]">
            <div className="w-full h-full rounded-2xl sm:rounded-3xl p-[3px] bg-gradient-to-tr from-[#D6B362] via-[#FAF0DA] to-[#B8923F] shadow-xl shadow-[#C5A059]/15">
              <div className="w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-white border border-[#E8E2D6]">
                <img
                  src="/profile/rachel_caetano.jpg"
                  alt="Rachel Caetano Nail Design"
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://i.postimg.cc/YSkX78x3/8970b41e-5ef0-46a3-bebd-1ee39a49cc2d.jpg') {
                      e.currentTarget.src = 'https://i.postimg.cc/YSkX78x3/8970b41e-5ef0-46a3-bebd-1ee39a49cc2d.jpg';
                    }
                  }}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Nome em destaque absoluto */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1F1C18] leading-[1.1] tracking-tight mb-4 text-balance">
            Rachel Caetano
            <span className="block font-normal italic text-[#A88438] text-2xl sm:text-3xl md:text-4xl mt-1.5">
              Nail Design
            </span>
          </h1>

          {/* Frase curta e sofisticada */}
          <p className="text-base sm:text-lg text-[#605A52] font-light max-w-md mx-auto mb-8 sm:mb-9 leading-relaxed text-balance">
            Beleza, cuidado e elegância em cada detalhe.
          </p>

          {/* Camadas / Botões de ação (otimizados para bio do Instagram e celular) */}
          <div className="flex flex-col gap-3 max-w-sm mx-auto mb-6">
            
            {/* Camada 1: WhatsApp */}
            <a
              href={STUDIO_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-6 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white bg-[#B8923F] hover:bg-[#A88438] active:scale-[0.98] rounded-full shadow-lg shadow-[#C5A059]/25 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Agendar Horário</span>
            </a>

            {/* Camada 2: Instagram */}
            <a
              href={STUDIO_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-6 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#2C2926] bg-[#FFFFFF] hover:bg-[#FAF7F0] border border-[#E3CA8D]/60 active:scale-[0.98] rounded-full shadow-sm transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Ver no Instagram</span>
            </a>

            {/* Camada 3: Ver Avaliações do Google */}
            <a
              href={STUDIO_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-6 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#2C2926] bg-[#FAF5EB] hover:bg-[#F3EADA] border border-[#D6B362]/60 active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all duration-300"
            >
              <Star className="w-4 h-4 text-[#B8923F] fill-[#B8923F]" />
              <span>Ver Avaliações do Google</span>
            </a>

            {/* Camada 4: Localização do Studio */}
            <a
              href={STUDIO_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-6 py-3.5 inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#2C2926] bg-[#FFFFFF] hover:bg-[#FAF7F0] border border-[#E3CA8D]/60 active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Localização do Studio</span>
            </a>
          </div>

          {/* Informações de perfil e compartilhamento */}
          <div className="flex items-center justify-center gap-4 text-xs text-[#8A8275]">
            <a
              href={STUDIO_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A88438] transition-colors flex items-center gap-1.5"
            >
              <span>@rachelcaetanonail</span>
            </a>
            <span aria-hidden="true" className="text-[#D6B362]">·</span>
            <button
              onClick={handleShare}
              className="hover:text-[#A88438] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
