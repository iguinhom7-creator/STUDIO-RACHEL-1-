import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { STUDIO_LINKS } from '../data/studioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Trabalhos', href: '#trabalhos' },
    { label: 'Curso', href: '#curso' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E2D6]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="text-xl sm:text-2xl font-serif tracking-wide text-[#1F1C18] whitespace-nowrap shrink-0 hover:text-[#A88438] transition-colors"
        >
          Studio Rachel Caetano
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.16em] text-[#605A52]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#A88438] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={STUDIO_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1F1C18] bg-[#F7F1E1] hover:bg-[#EEDEB8] border border-[#D6B362]/40 rounded-full transition-all duration-300 hover:shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#A88438]" />
            <span>Agendar</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#2C2926] hover:text-[#A88438] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E2D6] bg-[#FAF9F6] px-6 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide uppercase text-[#474138] hover:text-[#A88438] py-2 border-b border-[#F0EBE1] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C5A059] text-xs">→</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href={STUDIO_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#B8923F] hover:bg-[#A88438] rounded-full shadow-md shadow-[#C5A059]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Horário</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
