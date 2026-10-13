import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Acesso rápido ao WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={STUDIO_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário no WhatsApp da Rachel Caetano"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:bg-[#20BD5A] transition-all duration-300 active:scale-95"
      >
        {/* Soft pulse aura */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform group-hover:scale-110" />

        {/* Discreet tooltip on desktop hover */}
        <span className="hidden sm:group-hover:block absolute right-full mr-3 px-3 py-1.5 bg-[#1F1C18] text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-md pointer-events-none transition-opacity">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
