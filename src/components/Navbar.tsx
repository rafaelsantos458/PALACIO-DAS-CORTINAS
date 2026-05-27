import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Nossa História', href: '#sobre' },
    { name: 'Coleções', href: '#produtos' },
    { name: 'Simulador 3D', href: '#simulador' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Inspirar', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav
      id="custom-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#inicio" className="flex flex-col items-start group">
            <span className="font-sans text-xl sm:text-2xl font-semibold tracking-wider text-brand-text group-hover:text-brand-accent transition-colors">
              PALÁCIO
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-brand-accent/80 uppercase -mt-1 group-hover:text-brand-accent transition-colors">
              DAS CORTINAS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-xs font-medium tracking-widest text-[#B5B5B5] hover:text-brand-accent uppercase transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions & WhatsApp Contact */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:19982646086"
              className="flex items-center space-x-1.5 text-[#B5B5B5] hover:text-brand-text transition-colors"
               title="Ligar para nós"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span className="font-sans text-xs font-medium tracking-wider">(19) 98264-6086</span>
            </a>
            <a
              href="https://wa.me/5519982646086?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20cortinas%20sob%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full font-sans text-xs font-medium tracking-widest text-black bg-brand-accent hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              SOLICITAR CONSULTA
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#B5B5B5] hover:text-brand-text hover:bg-white/5 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-brand-card/95 border-b border-white/10 shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center border-t border-white/5 mt-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-brand-text hover:text-brand-accent font-sans text-sm font-medium tracking-widest uppercase transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 flex flex-col items-center space-y-3">
              <a
                href="tel:19982646086"
                className="flex items-center space-x-2 text-[#B5B5B5] hover:text-brand-text"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span className="font-sans text-sm font-medium">(19) 98264-6086</span>
              </a>
              <a
                href="https://wa.me/5519982646086"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full font-sans text-xs font-medium tracking-widest text-black bg-brand-accent hover:bg-white shadow-sm transition-colors text-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                FALAR CONOSCO NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
