import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, MessageSquare, Info, Shield, Check, Ruler } from 'lucide-react';
import { PRODUCT_TYPES } from '../data';

export default function QuoteCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_TYPES[0]);
  const [width, setWidth] = useState<number>(2.5); // Meters
  const [height, setHeight] = useState<number>(2.8); // Meters
  const [quality, setQuality] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [controlType, setControlType] = useState<'manual' | 'motorized'>('manual');
  const [hasLining, setHasLining] = useState<boolean>(true); // Add blackout lining

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  // Auto calculate estimated price when values modify
  useEffect(() => {
    let calculatedArea = width * height;
    if (calculatedArea < 1.5) calculatedArea = 1.5; // Minimum billing area for high-quality curtains/blinds
    setArea(calculatedArea);

    // Dynamic price factors
    let basePrice = selectedProduct.basePricePerSqm;
    
    // Quality adjustments
    if (quality === 'standard') basePrice *= 0.85;
    if (quality === 'luxury') basePrice *= 1.35;

    let cost = calculatedArea * basePrice;

    // Add lining blackout
    if (hasLining && selectedProduct.category === 'cortinas') {
      cost += calculatedArea * 45; // R$ 45/m² flat blackout lining
    }

    // Smart automations
    if (controlType === 'motorized') {
      cost += 480; // Add R$ 480 flat for premium somfy-like motors
    }

    setTotalPrice(Math.round(cost));
  }, [selectedProduct, width, height, quality, controlType, hasLining]);

  const qualityLabels = {
    standard: 'Classic Costura (Excelente custo-benefício)',
    premium: 'Elegance Fine (Linhos selecionados e barras de 15cm)',
    luxury: 'Imperial Luxury (Double gaze de linho rústica e alta costura)',
  };

  const handleSendWhatsAppQuote = () => {
    const rawMsg = `Olá, Palácio das Cortinas! Realizei um cálculo de orçamento prévio no site para ter uma estimativa:\n\n` +
      `- *Modelo selecionado:* ${selectedProduct.name}\n` +
      `- *Dimensões:* ${width.toFixed(2)}m largura × ${height.toFixed(2)}m altura (Área: ${area.toFixed(2)}m²)\n` +
      `- *Nível de Alfaiataria:* ${qualityLabels[quality]}\n` +
      `- *Acionamento:* ${controlType === 'motorized' ? 'Motorizado por Controle/Comando de Voz' : 'Manual Cordonê/Corrente'}\n` +
      `- *Forro Corta-Luz:* ${hasLining ? 'Sim, incluso blackout' : 'Não'}\n\n` +
      `- *Estimativa Prévia:* R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n` +
      `Gostaria de falar com o consultor para confirmar os valores com as estampas e tecidos que desejo!`;

    window.open(`https://wa.me/5519982646086?text=${encodeURIComponent(rawMsg)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
            Orçamento Transparente
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-light tracking-tight text-brand-text">
            Simulador de Custos <span className="font-serif italic text-brand-accent font-normal">sob Medida</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent/35 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light">
            Tenha uma prévia do investimento para suas janelas informando as dimensões abaixo em metros.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left inputs column */}
          <div className="lg:col-span-7 bg-brand-card rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
            
            {/* 1. Window Selection */}
            <div className="space-y-2">
              <label className="block text-brand-text font-sans text-xs font-bold tracking-widest uppercase">
                1. Selecione o Produto
              </label>
              <select
                value={selectedProduct.id}
                onChange={(e) => {
                  const found = PRODUCT_TYPES.find(p => p.id === e.target.value);
                  if (found) setSelectedProduct(found);
                }}
                className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
              >
                {PRODUCT_TYPES.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Dimensions input sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-brand-text font-sans text-xs font-bold tracking-widest uppercase flex items-center">
                    <Ruler className="w-3.5 h-3.5 text-brand-accent mr-1" /> Largura (Metros)
                  </label>
                  <span className="font-mono text-xs font-semibold text-brand-text bg-[#1E1E1E] border border-white/10 px-2 py-0.5 rounded-md">
                    {width.toFixed(2)} m
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="8.0"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <span className="text-[10px] font-sans text-brand-muted font-light block">Min: 0.80m / Max: 8.00m</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-brand-text font-sans text-xs font-bold tracking-widest uppercase flex items-center">
                    <Ruler className="w-3.5 h-3.5 text-brand-accent mr-1" /> Altura (Metros)
                  </label>
                  <span className="font-mono text-xs font-semibold text-brand-text bg-[#1E1E1E] border border-white/10 px-2 py-0.5 rounded-md">
                    {height.toFixed(2)} m
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <span className="text-[10px] font-sans text-brand-muted font-light block">Min: 1.00m / Max: 6.00m</span>
              </div>
            </div>

            {/* 3. Materials quality Tier */}
            <div className="space-y-3">
              <label className="block text-brand-text font-sans text-xs font-bold tracking-widest uppercase">
                3. Nível e Padrão da Oficina
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { id: 'standard', title: 'Classic Costura', desc: 'Bainha simples de 5cm, tecidos mistos reforçados.' },
                  { id: 'premium', title: 'Elegance Fine (Mais Vendido)', desc: 'Bainha dupla impecável de 15cm, linhos puros e pré-encolhidos.' },
                  { id: 'luxury', title: 'Imperial Luxury', desc: 'Alta alfaiataria com barra de 20cm, dupla gaze de linho rústica.' },
                ].map((tier) => (
                  <label
                    key={tier.id}
                    onClick={() => setQuality(tier.id as any)}
                    className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      quality === tier.id
                        ? 'border-brand-accent bg-white/5 shadow-xs'
                        : 'border-white/5 bg-[#1F1F1F]/40 hover:border-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="quality-tier"
                      checked={quality === tier.id}
                      onChange={() => {}}
                      className="mt-1 accent-brand-accent"
                    />
                    <div>
                      <span className="font-sans text-xs font-bold text-brand-text block">{tier.title}</span>
                      <span className="font-sans text-[11px] text-brand-muted font-light block leading-normal">{tier.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Controls/Accessories */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="block text-brand-text font-sans text-xs font-bold tracking-widest uppercase">
                4. Acionamento & Acessórios
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Method toggler */}
                <div className="space-y-2">
                  <span className="text-[11px] text-brand-muted font-sans uppercase">Acionamento</span>
                  <div className="grid grid-cols-2 gap-2 bg-[#1E1E1E] border border-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setControlType('manual')}
                      className={`py-1.5 rounded-lg text-xs font-medium font-sans cursor-pointer ${
                        controlType === 'manual' ? 'bg-brand-accent text-black font-semibold' : 'text-brand-muted hover:text-brand-text'
                      }`}
                    >
                      Manual
                    </button>
                    <button
                      onClick={() => setControlType('motorized')}
                      className={`py-1.5 rounded-lg text-xs font-medium font-sans flex items-center justify-center space-x-1 cursor-pointer ${
                        controlType === 'motorized' ? 'bg-brand-accent text-black font-semibold' : 'text-brand-muted hover:text-brand-text'
                      }`}
                    >
                      <span>Automático</span>
                    </button>
                  </div>
                </div>

                {/* Optional lining toggle for curtains only */}
                {selectedProduct.category === 'cortinas' && (
                  <div className="space-y-2">
                    <span className="text-[11px] text-brand-muted font-sans uppercase">Acessório Extra</span>
                    <button
                      onClick={() => setHasLining(!hasLining)}
                      className={`w-full py-2 px-3 border border-transparent rounded-xl text-left text-xs font-sans flex items-center justify-between transition-all cursor-pointer ${
                        hasLining ? 'bg-brand-accent/15 border-brand-accent/40 text-brand-accent font-semibold' : 'bg-[#1F1F1F]/40 border-white/5 text-[#B5B5B5]'
                      }`}
                    >
                      <span>Incluir Blackout / Forro</span>
                      {hasLining ? <Check className="w-4 h-4 text-brand-accent" /> : <div className="w-4 h-4 rounded border-white/20 border" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Price Estimation Summary Card */}
          <div className="lg:col-span-5 bg-brand-card rounded-3xl p-8 text-brand-text border border-white/10 shadow-lg space-y-6">
            <h3 className="font-sans text-xs font-bold tracking-widest text-[#E2DEC9] uppercase flex items-center">
              <Calculator className="w-4 h-4 mr-2 text-brand-accent" /> Estimativa do Projeto
            </h3>

            {/* Calculated Breakdown rows */}
            <div className="space-y-4 border-b border-white/5 pb-6 text-brand-muted text-xs font-light">
              <div className="flex justify-between">
                <span>Produto Selecionado</span>
                <span className="text-brand-text font-medium text-right max-w-[180px] truncate">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Área Total Calculada</span>
                <span className="text-brand-text font-mono font-medium">{area.toFixed(2)} m² {width * height < 1.5 && '(Fat. Mínimo)'}</span>
              </div>
              <div className="flex justify-between">
                <span>Largura Trilho</span>
                <span className="text-brand-text font-mono font-medium">{width.toFixed(2)} m</span>
              </div>
              <div className="flex justify-between">
                <span>Nível de Costura</span>
                <span className="text-brand-accent font-semibold uppercase text-[10px] tracking-wide bg-brand-accent/10 border border-brand-accent/20 px-2 py-0.5 rounded">
                  {quality.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Automatizador</span>
                <span className="text-brand-text font-medium">
                  {controlType === 'motorized' ? 'Sim, incluso motor' : 'Manual Cordonê'}
                </span>
              </div>
              {selectedProduct.category === 'cortinas' && (
                <div className="flex justify-between">
                  <span>Forro Blackout Embutido</span>
                  <span className="text-brand-text font-medium">{hasLining ? 'Sim' : 'Não'}</span>
                </div>
              )}
            </div>

            {/* Huge Total Area */}
            <div className="space-y-1 text-center py-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#A69C89] uppercase">Investimento Estimado</span>
              <p className="font-sans text-3xl md:text-4xl font-light text-brand-accent animate-fadeIn">
                R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <span className="font-sans text-[9px] text-brand-muted font-light italic mt-1 block">
                Valor estimado. Visita técnica confirmará tecidos finais.
              </span>
            </div>

            {/* Benefit statements indicators */}
            <div className="space-y-3 pt-2">
              {[
                'Medição e gabaritos feitos a domicílio gratuitos',
                'Costureiras e instaladores formados com rigor',
                'Garantia certificada de 1 ano em costura e trilhos',
                'Motores de automação com 3 anos de garantia',
              ].map((benefit, i) => (
                <div key={i} className="flex items-start text-[11px] text-brand-muted font-light">
                  <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Legal prompt note */}
            <div className="p-3 bg-[#1E1E1E] border border-white/5 rounded-xl flex items-start space-x-2 text-[10px] text-brand-muted font-light leading-snug">
              <Shield className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <span>Para faturamento formal do pedido e escolha de cores/tecidos nos mostruários físicos, o agendador de visitas técnicas é acionado gratuitamente.</span>
            </div>

            {/* Quote Action button */}
            <button
               onClick={handleSendWhatsAppQuote}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-sans text-xs font-bold tracking-widest text-[#151515] bg-brand-accent hover:bg-white transition-all outline-none cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              ENVIAR PARA O WHATSAPP
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
