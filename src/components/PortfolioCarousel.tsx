import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS, STUDIO_LINKS, PortfolioItem } from '../data/studioData';

interface PortfolioCarouselProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ onSelectImage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync activeIndex with scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth === 0) return;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex >= 0 && newIndex < PORTFOLIO_ITEMS.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % PORTFOLIO_ITEMS.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (activeIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    scrollToIndex(prev);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="trabalhos" className="py-14 sm:py-24 bg-[#FAF9F6] border-t border-[#EAE4D8]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6A24] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Portfólio Exclusivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F1C18] tracking-tight">
              Nossos Trabalhos
            </h2>
          </div>

          {/* Discreet swipe cue & Gallery external link */}
          <div className="flex items-center justify-between sm:justify-end gap-5">
            <span className="text-xs uppercase tracking-wider text-[#8A8275] flex items-center gap-1.5 animate-pulse">
              <span>Deslize para ver mais</span>
              <span className="text-[#C5A059] font-bold">→</span>
            </span>

            {/* Desktop Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Foto anterior"
                className="w-10 h-10 rounded-full border border-[#D6B362]/50 bg-white hover:bg-[#F7F1E1] text-[#2C2926] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4 text-[#8C6A24]" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próxima foto"
                className="w-10 h-10 rounded-full border border-[#D6B362]/50 bg-white hover:bg-[#F7F1E1] text-[#2C2926] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4 text-[#8C6A24]" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-xl mx-auto">
          {/* Main scrollable area */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-2xl sm:rounded-3xl shadow-xl shadow-[#C5A059]/10 border border-[#E8E2D6] bg-white cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="w-full shrink-0 snap-center relative aspect-[3/4] sm:aspect-[4/5] bg-[#F7F4EE] flex flex-col justify-end overflow-hidden group select-none"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => {
                    // Fallback to postimg URL if local fails
                    if (e.currentTarget.src !== item.fallbackSrc) {
                      e.currentTarget.src = item.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Subtle scrim at bottom for minimal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Floating zoom trigger */}
                <button
                  type="button"
                  onClick={() => onSelectImage(item)}
                  aria-label="Ampliar foto do procedimento"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-[#1F1C18] flex items-center justify-center shadow-md transition-all hover:scale-105"
                >
                  <Maximize2 className="w-4 h-4 text-[#8C6A24]" />
                </button>

                {/* Minimal discreet caption as requested (no big text over photos) */}
                <div className="relative z-10 p-5 sm:p-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FAF0DA] font-medium block">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif tracking-normal text-white">
                      {item.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectImage(item)}
                    className="text-xs uppercase tracking-wider text-[#FAF0DA] hover:text-white underline underline-offset-4 font-medium shrink-0 ml-3 py-1"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation overlay arrows on mobile */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Foto anterior"
            className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md text-[#2C2926] flex items-center justify-center shadow-md"
          >
            <ChevronLeft className="w-4 h-4 text-[#8C6A24]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próxima foto"
            className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md text-[#2C2926] flex items-center justify-center shadow-md"
          >
            <ChevronRight className="w-4 h-4 text-[#8C6A24]" />
          </button>

          {/* Discreet Pagination Dots as requested */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {PORTFOLIO_ITEMS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Ir para foto ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-6 h-2 bg-[#B8923F]'
                    : 'w-2 h-2 bg-[#D6B362]/40 hover:bg-[#D6B362]/70'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
