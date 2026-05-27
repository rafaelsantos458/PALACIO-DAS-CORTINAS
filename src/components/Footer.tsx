import { Mail, Phone, MapPin, Clock, ShieldCheck, Heart, Sparkles, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-brand-dark text-brand-muted border-t border-white/5 relative pt-20 pb-12 overflow-hidden">
      
      {/* Visual Map Layout Block prior to Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-brand-card rounded-3xl border border-white/10 shadow-xl overflow-hidden">
          
          {/* Left panel: details */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-accent uppercase font-bold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-accent" /> Atendimento Presencial
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-light tracking-tight text-brand-text leading-tight">
                Visite nosso Showroom <br />
                <span className="font-serif italic font-normal text-brand-accent">em Limeira</span>
              </h3>
              <p className="font-sans text-xs text-brand-muted font-light leading-relaxed">
                Venha conferir ao vivo a textura linho paco, as opções de veludos, nossa tecnologia de motores inteligentes e as últimas coleções de papel de parede. Oferecemos estacionamento exclusivo para clientes no local.
              </p>
            </div>

            {/* Direct Contact points */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-brand-text font-sans">Endereço:</p>
                  <p className="text-brand-muted font-light mt-0.5 leading-normal">
                    Rua Dr. Trajano de Barros Camargo, 387<br />
                    Centro, Limeira - SP, 13480-200, Brasil
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Phone className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-brand-text font-sans">Contatos Telefônicos:</p>
                  <p className="text-brand-muted font-light mt-0.5">
                    WhatsApp: <a href="https://wa.me/5519982646086" className="hover:text-brand-accent font-mono transition-colors font-medium">(19) 98264-6086</a> <br />
                    Telefone: <a href="tel:19982646086" className="hover:text-brand-accent font-mono transition-colors font-medium">(19) 98264-6086</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Clock className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-brand-text font-sans">Expediente Oficial:</p>
                  <p className="text-brand-muted font-light mt-0.5 leading-relaxed">
                    Segunda a Sexta: 08:00h às 18:00h<br />
                    Sábados: 08:00h às 12:00h
                  </p>
                </div>
              </div>
            </div>

            {/* Micro guarantee badge */}
            <div className="pt-2">
              <a
                href="https://wa.me/5519982646086"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#E0E0E0] hover:text-brand-accent font-mono text-[9px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
                title="Agendar visita"
              >
                <MessageSquare className="w-4 h-4 mr-1 text-brand-accent" />
                <span>Agendar visita agora no whatsapp</span>
              </a>
            </div>
          </div>

          {/* Right panel: Embedded Google Map iframe (safe and fully stylized) */}
          <div className="lg:col-span-7 h-[300px] lg:h-auto min-h-[350px] relative bg-[#1E1E1E]">
            <iframe
              title="Localização Palácio das Cortinas - Limeira"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5878479576403!2d-47.404561024699566!3d-22.564585179496678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880816828aeff%3A0xe2da2ea8f1d3e874!2sR.%20Dr.%20Trajano%20de%20Barros%20Camargo%2C%20387%20-%20Centro%2C%20Limeira%20-%20SP%2C%2013480-200!5e0!3m2!1spt-BR!2sbr!4v1714482012012!5m2!1spt-BR!2sbr5"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) invert(0.9) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>

      {/* Main Footer Links & Copyright Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand identity */}
        <div className="md:col-span-4 space-y-4">
          <a href="#inicio" className="flex flex-col items-start group">
            <span className="font-sans text-2xl font-semibold tracking-wider text-brand-text group-hover:text-brand-accent transition-colors">
              PALÁCIO
            </span>
            <span className="font-mono text-xs tracking-[0.3em] text-brand-muted uppercase -mt-1 group-hover:text-brand-text transition-colors">
              DAS CORTINAS
            </span>
          </a>
          <p className="font-sans text-xs text-brand-muted font-light leading-relaxed">
            Sinônimo de luxo, durabilidade e sofisticação desde 2012. Vestindo os lares de Limeira e região com o verdadeiro carinho e a alta estampa da decoração personalizada.
          </p>
          <div className="flex gap-3 text-[#555] text-xs font-mono">
            <span>CNPJ: 20.174.625/0001-87</span>
          </div>
        </div>

        {/* Useful links */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase">
            Navegação Rápida
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'História', href: '#sobre' },
              { label: 'Coleções', href: '#produtos' },
              { label: 'Simulador', href: '#simulador' },
              { label: 'Calculadora', href: '#calculadora' },
              { label: 'Inspirações', href: '#galeria' },
              { label: 'Depoimentos', href: '#depoimentos' },
              { label: 'Contato', href: '#contato' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="font-sans text-xs text-brand-muted hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Custom values statement */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-[#B5B5B5] uppercase flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-brand-accent" /> Garantia de Qualidade
          </h4>
          <p className="font-sans text-xs text-brand-muted font-light leading-relaxed">
            Todas as nossas instalações contam com assistência técnica permanente e garantia oficial expressa. Nosso compromisso é o caimento perfeito das suas cortinas por gerações.
          </p>
          <div className="p-3.5 bg-white/5 rounded-xl max-w-sm flex items-center space-x-2 text-brand-text">
            <Heart className="w-4 h-4 text-red-500 flex-shrink-0 fill-red-500 animate-pulse" />
            <span className="text-xs font-light text-[#B5B5B5]">Fabricado no Brasil com carinho e dedicação.</span>
          </div>
        </div>

      </div>

      {/* Extreme Bottom details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#777] font-sans font-light">
        <p>© {currentYear} Palácio das Cortinas. Todos os direitos reservados.</p>
        <p className="mt-2 sm:mt-0 text-brand-muted">
          Projetado com excelência, modernidade e elegância.
        </p>
      </div>

    </footer>
  );
}
