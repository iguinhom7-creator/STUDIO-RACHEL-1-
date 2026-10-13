import React, { useEffect } from 'react';
import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { PortfolioItem, STUDIO_LINKS } from '../data/studioData';

interface ImageLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappInquiryUrl = `${STUDIO_LINKS.whatsapp}?text=${encodeURIComponent(
    `Olá Rachel! Amei esse trabalho de ${item.category} (${item.title}) no seu site e gostaria de agendar um horário!`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#1F1C18] rounded-2xl overflow-hidden border border-[#D6B362]/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-res Image */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-900 w-full overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            onError={(e) => {
              if (e.currentTarget.src !== item.fallbackSrc) {
                e.currentTarget.src = item.fallbackSrc;
              }
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Caption & Actions */}
        <div className="p-5 bg-[#1A1815] text-white border-t border-[#D6B362]/20">
          <div className="text-[11px] uppercase tracking-widest text-[#D6B362] font-medium mb-1">
            {item.category}
          </div>
          <h3 className="text-lg font-serif tracking-normal text-white mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full bg-[#B8923F] hover:bg-[#A88438] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Quero este modelo</span>
            </a>

            <a
              href={STUDIO_LINKS.gallery}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Ver mais</span>
              <ExternalLink className="w-3 h-3 text-[#D6B362]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
