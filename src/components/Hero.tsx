import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sliders } from 'lucide-react';
import { HERO_IMAGE } from '../data';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center justify-center bg-stone-950 overflow-hidden pt-20"
    >
      {/* Background Image Overlay with parallax & slow scale effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Palácio das Cortinas - Cortinas Wave de Alto Padrão em Gaze de Linho"
          className="w-full h-full object-cover opacity-60 scale-105 animate-subtleZoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-brand-dark/90 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-text py-12 md:py-24">
        {/* Sub-badge indicating high sewing/custom standards */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-accent mr-2" />
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#E0E0E0] uppercase">
            Alta Costura & Automação de Ambientes desde 2012
          </span>
        </motion.div>

        {/* Catchy headline with elegant styling */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-none"
        >
          Cortinas e Persianas <br />
          <span className="font-serif italic font-normal text-brand-accent">sob medida</span> exclusivas
        </motion.h1>

        {/* Exquisite subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto font-sans text-sm sm:text-lg text-brand-muted font-light leading-relaxed tracking-wider mb-10"
        >
          Sofisticação, aconchego e exclusividade para vestir o seu lar com tecidos selecionados, acabamento impecável e tecnologia inteligente.
        </motion.p>

        {/* Dynamic CTA cluster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#simulador"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-xs font-semibold tracking-widest text-black bg-brand-accent hover:bg-white transition-all duration-300 shadow-xl cursor-pointer"
          >
            <Sliders className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
            SIMULAR MEU AMBIENTE
          </a>
          <a
            href="#produtos"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm font-sans text-xs font-semibold tracking-widest text-brand-text transition-all duration-300 cursor-pointer"
          >
            VER COLEÇÕES
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Gentle Floating Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase mb-2">
            Rolar Para Explorar
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
