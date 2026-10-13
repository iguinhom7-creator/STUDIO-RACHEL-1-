import React from 'react';
import { MessageCircle, Instagram, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const ContactSection: React.FC = () => {
  const contactButtons = [
    {
      label: 'WhatsApp',
      subtitle: 'Agendamentos e dúvidas rápidas',
      href: STUDIO_LINKS.whatsapp,
      icon: MessageCircle,
      primary: true,
      buttonText: 'Conversar no WhatsApp',
    },
    {
      label: 'Instagram',
      subtitle: '@rachelcaetanonail',
      href: STUDIO_LINKS.instagram,
      icon: Instagram,
      primary: false,
      buttonText: 'Seguir no Instagram',
    },
    {
      label: 'Google',
      subtitle: 'Localização e avaliações',
      href: STUDIO_LINKS.google,
      icon: MapPin,
      primary: false,
      buttonText: 'Ver no Google Maps',
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-[#ECE4D4]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#8C6A24] font-medium border-b border-[#E3CA8D]/50">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span>Atendimento Exclusivo</span>
        </div>

        {/* Title as requested */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F1C18] tracking-tight mb-4">
          Agende seu horário
        </h2>

        <p className="text-sm sm:text-base text-[#605A52] font-light max-w-md mx-auto mb-10 leading-relaxed">
          Escolha o canal de sua preferência para reservar seu atendimento ou tirar dúvidas sobre procedimentos e cursos.
        </p>

        {/* 3 Large, Easy-to-tap Buttons */}
        <div className="flex flex-col gap-4">
          {contactButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group min-h-[64px] px-6 py-4 rounded-2xl flex items-center justify-between transition-all duration-300 active:scale-[0.98] ${
                  btn.primary
                    ? 'bg-[#B8923F] hover:bg-[#A88438] text-white shadow-lg shadow-[#C5A059]/20 border border-[#A88438]'
                    : 'bg-white hover:bg-[#FAF6EE] text-[#1F1C18] border border-[#E3CA8D]/50 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
                      btn.primary
                        ? 'bg-white/20 text-white'
                        : 'bg-[#FAF5EB] text-[#8C6A24]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold tracking-wide flex items-center gap-1.5">
                      <span>{btn.label}</span>
                    </div>
                    <div
                      className={`text-xs ${
                        btn.primary ? 'text-white/80' : 'text-[#7A7365]'
                      }`}
                    >
                      {btn.subtitle}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    btn.primary ? 'bg-white/20 text-white' : 'bg-[#FAF5EB] text-[#8C6A24]'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
