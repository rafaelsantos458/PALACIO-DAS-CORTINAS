import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, AlertCircle, ShieldAlert, ArrowRight, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductCatalog from './components/ProductCatalog';
import VirtualSimulator from './components/VirtualSimulator';
import QuoteCalculator from './components/QuoteCalculator';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Show cookie consent after a small timeout
    const timer = setTimeout(() => {
      const consentAccepted = localStorage.getItem('palacio_cookie_accepted');
      if (!consentAccepted) {
        setShowCookieConsent(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('palacio_cookie_accepted', 'true');
    setShowCookieConsent(false);
  };

  return (
    <div className="font-sans antialiased text-brand-text bg-brand-dark select-none selection:bg-brand-accent/20 selection:text-brand-accent scroll-smooth">
      {/* Premium Sticky / Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <ProductCatalog />
      <VirtualSimulator />
      <QuoteCalculator />
      <Gallery />
      <Reviews />

      {/* Integrated Footer with Address details & embedded showroom maps */}
      <Footer />

      {/* Floating Call-to-Action WhatsApp Trigger (Fixed right bottom) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
        <a
          href="https://wa.me/5519982646086?text=Olá!%20Encontrei%20vocês%25no%25site%20e%20gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20cortinas%20sob%20medida."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-350 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          title="Fale Conosco no WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        </a>
      </div>

      {/* Modern Cookie Consent Bar */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-brand-card text-brand-text p-5 rounded-2xl shadow-2xl border border-white/15 flex flex-col space-y-4"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-sans text-xs font-semibold text-brand-accent uppercase tracking-wider">
                  Política de Privacidade & Cookies
                </p>
                <p className="font-sans text-[11px] text-brand-muted font-light leading-relaxed">
                  Usamos cookies para analisar o tráfego do site e otimizar sua experiência navegando pelo simulador e calculadora de orçamentos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleAcceptCookies}
                className="flex-1 bg-brand-accent hover:bg-white text-black font-sans text-[11px] font-bold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-colors cursor-pointer text-center"
              >
                Aceitar e Continuar
              </button>
              <button
                onClick={() => setShowCookieConsent(false)}
                className="p-2 text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
