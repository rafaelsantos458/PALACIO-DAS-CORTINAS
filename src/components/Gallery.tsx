import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, Info, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { INSTAGRAM_INSPIRATIONS } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'cortinas' | 'persianas' | 'almofadas' | 'papeis'>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Ver Tudo' },
    { id: 'cortinas', label: 'Cortinas' },
    { id: 'persianas', label: 'Persianas' },
    { id: 'almofadas', label: 'Almofadas' },
    { id: 'papeis', label: 'Papel de Parede' },
  ];

  const filteredInspirations = activeCategory === 'todos'
    ? INSTAGRAM_INSPIRATIONS
    : INSTAGRAM_INSPIRATIONS.filter(item => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredInspirations.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredInspirations.length) % filteredInspirations.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
            Portfólio & Ambiência
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-light tracking-tight text-brand-text">
            Inspire-se com <br />
            <span className="font-serif italic text-brand-accent font-normal">nossas instalações reais</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent/30 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light max-w-md mx-auto">
            Garantimos sofisticação palpável. Explore alguns dos nossos projetos concluídos recentemente para salas, quartos e escritórios de alto padrão.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 border rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-brand-accent border-brand-accent text-black font-bold shadow'
                  : 'bg-white/5 border-white/5 text-brand-muted hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInspirations.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative group aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl border border-white/5 bg-brand-card"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant dark overlay */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

              {/* Text metadata appearing on hover */}
              <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-25 text-white space-y-1.5 pointer-events-none">
                <span className="font-mono text-[8px] uppercase tracking-widest text-brand-accent bg-black/60 px-2 py-0.5 rounded backdrop-blur-md inline-block">
                  {item.category === 'cortinas' ? 'Cortinas' : 
                   item.category === 'persianas' ? 'Persianas' : 
                   item.category === 'almofadas' ? 'Almofadas' : 'Papel de Parede'}
                </span>
                <p className="font-sans text-xs text-brand-text font-light leading-snug">
                  {item.alt}
                </p>
                <span className="font-mono text-[9px] text-[#E0E0E0] flex items-center pt-2">
                  <ZoomIn className="w-3.5 h-3.5 mr-1 text-brand-accent" /> Clique para ampliar
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Lightbox Dialog */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop black */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
              />

              {/* Close Button above */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute right-6 top-6 z-20 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Selector Navigation */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main lightbox container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full z-10 flex flex-col items-center justify-center space-y-4"
              >
                <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950">
                  <img
                    src={filteredInspirations[lightboxIndex].url}
                    alt={filteredInspirations[lightboxIndex].alt}
                    className="max-h-[70vh] object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center text-white max-w-xl px-4 space-y-1">
                  <p className="font-sans text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                    {filteredInspirations[lightboxIndex].alt}
                  </p>
                  <span className="font-mono text-[9px] text-[#A69C89] uppercase tracking-widest block font-semibold pt-1">
                    Coleção Palácio das Cortinas — Limeira - SP
                  </span>
                </div>
              </motion.div>

              {/* Right Selector Navigation */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
