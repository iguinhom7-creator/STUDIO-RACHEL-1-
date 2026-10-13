import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1815] text-[#D8D2C6] py-12 sm:py-16 border-t border-[#3A352C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2E2B25] text-center sm:text-left">
          
          {/* Brand */}
          <div>
            <span className="text-xl sm:text-2xl font-serif text-[#F5EEDB] tracking-wide block">
              Rachel Caetano
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-light">
              Nail Design Studio
            </span>
          </div>

          {/* Quick social links */}
          <div className="flex items-center gap-5">
            <a
              href={STUDIO_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Rachel Caetano"
              className="w-10 h-10 rounded-full bg-[#26231E] hover:bg-[#332F28] text-[#C5A059] flex items-center justify-center transition-colors border border-[#423C32]"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={STUDIO_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Rachel Caetano"
              className="w-10 h-10 rounded-full bg-[#26231E] hover:bg-[#332F28] text-[#C5A059] flex items-center justify-center transition-colors border border-[#423C32]"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={STUDIO_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Rachel Caetano"
              className="w-10 h-10 rounded-full bg-[#26231E] hover:bg-[#332F28] text-[#C5A059] flex items-center justify-center transition-colors border border-[#423C32]"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8275]">
          <p>
            © {new Date().getFullYear()} Studio Rachel Caetano. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span>Beleza, cuidado e elegância em cada detalhe.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
