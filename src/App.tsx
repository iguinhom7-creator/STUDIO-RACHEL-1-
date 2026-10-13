/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { CourseSection } from './components/CourseSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageLightbox } from './components/ImageLightbox';
import { PortfolioItem } from './data/studioData';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2926] flex flex-col font-sans selection:bg-[#E5D3B3] selection:text-[#1F1C18]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Topo / Hero */}
        <Hero />

        {/* 2. Portfólio — Trabalhos (Touch Carousel) */}
        <PortfolioCarousel onSelectImage={(item) => setSelectedImage(item)} />

        {/* 3. Curso de Nail Design */}
        <CourseSection />

        {/* 4. Encontre o Studio */}
        <LocationSection />

        {/* 5. Contato (Agende seu horário) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
