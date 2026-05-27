import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
            Confiança & Satisfação
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-light tracking-tight text-brand-text">
            O que nossos clientes dizem <br />
            <span className="font-serif italic text-brand-accent font-normal">sobre a nossa entrega</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent/30 mx-auto mt-4" />
        </div>

        {/* Testimonials Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="bg-brand-card backdrop-blur-xs border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/5 transition-all duration-300 relative group"
            >
              {/* Double quotation watermark */}
              <Quote className="absolute right-6 bottom-6 w-16 h-16 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors" />

              <div className="space-y-6">
                
                {/* Visual Stars */}
                <div className="flex gap-1.5">
                  {Array.from({ length: review.stars }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                {/* Main Quote text */}
                <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed relative">
                  "{review.quote}"
                </p>
              </div>

              {/* Author and location information */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-col space-y-1">
                <span className="font-sans text-sm font-semibold tracking-wide text-brand-text">
                  {review.name}
                </span>
                <span className="font-mono text-[9px] text-[#A69C89] uppercase tracking-wider">
                  {review.location}
                </span>
                <span className="font-sans text-[10px] text-brand-muted font-light mt-1">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time rating highlight from Google Review concept */}
        <div className="mt-16 text-center border-t border-white/5 pt-12 max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-1">
            <span className="font-sans text-3xl font-light text-brand-accent">4.9</span>
            <span className="text-[#888] text-sm font-sans">/ 5.0</span>
            <div className="flex ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
              ))}
            </div>
          </div>
          <p className="font-sans text-xs text-brand-muted font-light leading-normal">
            Pontuação média baseada em centenas de feedbacks de clientes reais no Google e WhatsApp de Limeira, Americana, Piracicaba, Santa Bárbara d’Oeste e Campinas.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/5519982646086"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-brand-accent hover:text-white font-mono text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale Conosco e conheça nosso trabalho</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
