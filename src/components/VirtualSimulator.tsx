import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Columns, Eye, EyeOff, Sliders, Info, MessageSquare, ArrowRight, Compass, Upload, Trash2 } from 'lucide-react';
import { ROOMS, PRODUCT_TYPES, COLORS } from '../data';
import { RoomType } from '../types';

export default function VirtualSimulator() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType>('sala');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_TYPES[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [isClosed, setIsClosed] = useState(false); // Curtains/Blinds open state

  // Custom user photo simulation states
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [curtainWidth, setCurtainWidth] = useState<number>(100);
  const [curtainHeight, setCurtainHeight] = useState<number>(100);
  const [curtainX, setCurtainX] = useState<number>(0);
  const [curtainY, setCurtainY] = useState<number>(0);
  const [curtainOpacity, setCurtainOpacity] = useState<number>(100);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target?.result as string);
        // Reset default realistic values
        setCurtainWidth(100);
        setCurtainHeight(100);
        setCurtainX(0);
        setCurtainY(0);
        setCurtainOpacity(100);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearPhoto = () => {
    setCustomImage(null);
  };

  // Context-aware dynamic tips based on selections
  const getSimulatedTip = () => {
    if (customImage) {
      return 'Dica do Designer: Arraste os controles de posicionamento ao lado para simular o caimento perfeito em cima das dimensões da sua janela real!';
    }
    if (selectedRoom === 'quarto' && selectedColor.id === 'offwhite') {
      return 'Dica do Designer: Cortinas claras em quartos trazem paz, mas recomendamos acrescentar Forro Microfibra ou Blackout 100% sob trilho suíço para garantir vedação total de luz de manhã.';
    }
    if (selectedRoom === 'sala' && selectedProduct.id.includes('rolo')) {
      return 'Dica do Designer: Persianas Rolô na sala de estar são perfeitas se você tem varanda integrada. Elas filtram os reflexos na TV sem comprometer a vista.';
    }
    if (selectedRoom === 'escritorio' && selectedColor.id === 'charcoal') {
      return 'Dica do Designer: Divisórias ou detalhes grafite no escritório aumentam a elegância, mas cuidado com a fadiga visual. A persiana Double Vision nesse tom é ideal para dosar a claridade.';
    }
    return `Dica do Designer: A combinação de ${selectedProduct.name} na tonalidade "${selectedColor.name}" traz alta sensação de modernidade e sofisticação para a sua ${ROOMS.find(r => r.id === selectedRoom)?.name.toLowerCase()}.`;
  };

  // Build simulated Whatsapp link based on simulation selection
  const handleSimulateRequest = () => {
    const roomName = customImage ? 'meu próprio ambiente (foto anexada)' : ROOMS.find(r => r.id === selectedRoom)?.name;
    const rawMsg = `Olá, Palácio das Cortinas! Simulei meu ambiente no site e adorei para o meu *${roomName}* o seguinte estilo:\n\n` +
      `- *Produto:* ${selectedProduct.name}\n` +
      `- *Tonalidade:* ${selectedColor.name}\n` +
      `- *Modo inicial:* ${isClosed ? 'Fechado/Privacidade' : 'Aberto/Luz natural'}\n` +
      (customImage ? `- *Observação:* Realizei a simulação utilizando a foto da minha própria parede no simulador!\n\n` : `\n`) +
      `Gostaria de agendar uma visita técnica gratuita para conferir minhas janelas e ver as amostras pessoalmente!`;
    window.open(`https://wa.me/5519982646086?text=${encodeURIComponent(rawMsg)}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
              Elegância Interativa
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-text">
              Simulador Visual <span className="font-serif italic font-normal text-brand-accent">de Cortinas</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-brand-muted font-light max-w-xl">
              Escolha um ambiente abaixo, selecione os modelos e as cores exclusivas para ver instantaneamente a harmonia visual antes de solicitar a sua visita técnica.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => setIsClosed(!isClosed)}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-brand-card text-brand-text hover:text-white shadow-lg border border-white/10 text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              {isClosed ? <Eye className="w-4 h-4 text-brand-accent" /> : <EyeOff className="w-4 h-4 text-brand-accent" />}
              <span>{isClosed ? 'Abrir Cortina' : 'Fechar Cortina'}</span>
            </button>
          </div>
        </div>

        {/* Main Simulator Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Beautiful Interactive Canvas / Preview Box */}
          <div className="lg:col-span-8 bg-brand-card rounded-3xl overflow-hidden relative shadow-xl border border-white/10 aspect-[16/10] flex flex-col justify-end group">
            
            {/* Ambient Background Scenery (Visible through window) or Custom Client Photo */}
            {customImage ? (
              <div className="absolute inset-0 z-0 bg-stone-950 flex items-center justify-center overflow-hidden">
                <img
                  src={customImage}
                  alt="Meu Ambiente"
                  className="w-full h-full object-cover select-none animate-fadeIn"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-0 bg-sky-100 transition-colors duration-700 overflow-hidden">
                {/* Day Sky with gradient and slow clouds */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-amber-100/10 to-transparent" />
                
                {/* Decorative garden outline behind window */}
                <div className="absolute bottom-4 left-0 right-0 h-40 flex justify-between items-end px-12 opacity-40">
                  <div className="w-20 h-32 rounded-t-full bg-emerald-800/20 blur-sm scale-110" />
                  <div className="w-32 h-24 rounded-t-full bg-emerald-900/15 blur-md" />
                  <div className="w-24 h-40 rounded-t-full bg-emerald-800/20 blur-sm" />
                </div>

                {/* Solar rays indicator overlay */}
                <div className="absolute -top-10 -left-10 w-44 h-44 bg-amber-200/20 rounded-full blur-3xl saturate-150 animate-pulse" />
              </div>
            )}

            {/* Window Frame Graphic Overlay */}
            {!customImage && (
              <div className="absolute inset-4 z-10 border-[6px] border-stone-800 rounded-2xl bg-transparent pointer-events-none flex">
                <div className="flex-1 border-r-2 border-stone-800/40" />
                <div className="flex-1" />
              </div>
            )}

            {/* Simulated Product Overlays */}
            <div
              className="absolute z-20 overflow-hidden pointer-events-none rounded-2xl"
              style={customImage ? {
                position: 'absolute',
                left: `${50 + curtainX}%`,
                top: `${50 + curtainY}%`,
                width: `${curtainWidth}%`,
                height: `${curtainHeight}%`,
                transform: 'translate(-50%, -50%)',
                opacity: curtainOpacity / 100,
                transition: 'width 0.1s ease-out, height 0.1s ease-out, opacity 0.15s ease-out'
              } : {
                position: 'absolute',
                left: '16px',
                right: '16px',
                top: '16px',
                bottom: '16px'
              }}
            >
              
              {/* Type 1: WAVE CURTAIN */}
              {selectedProduct.category === 'cortinas' && (
                <div className="w-full h-full flex justify-between relative">
                  
                  {/* Left Curtain Section with wave folds */}
                  <div
                    className="h-full flex transition-all duration-1000 ease-in-out"
                    style={{
                      width: isClosed ? '51%' : '14%',
                      backgroundColor: selectedColor.hex,
                      boxShadow: 'inset -25px 0 30px -15px rgba(0,0,0,0.25), 5px 0 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Generates wave line dividers */}
                    <div className="w-full h-full flex">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-full border-r border-stone-950/5"
                          style={{
                            background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.06) 60%, rgba(255,255,255,0.15) 85%, transparent)'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Curtain Section with wave folds */}
                  <div
                    className="h-full flex transition-all duration-1000 ease-in-out"
                    style={{
                      width: isClosed ? '51%' : '14%',
                      backgroundColor: selectedColor.hex,
                      boxShadow: 'inset 25px 0 30px -15px rgba(0,0,0,0.25), -5px 0 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    <div className="w-full h-full flex">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-full border-l border-stone-950/5"
                          style={{
                            background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.06) 60%, rgba(255,255,255,0.15) 85%, transparent)'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Header Valance overlay */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-stone-800/10 shadow-md backdrop-blur-xs" />
                </div>
              )}

              {/* Type 2: MANDATORY BLINDS (Double Vision or Rolô) */}
              {selectedProduct.category === 'persianas' && (
                <div className="w-full h-full relative">
                  <div
                    className="absolute top-0 left-0 right-0 bg-amber-50 shadow-md transition-all duration-[1200ms] ease-out flex flex-col pointer-events-none"
                    style={{
                      height: isClosed ? '100%' : '15%',
                      backgroundColor: selectedColor.hex,
                      boxShadow: 'inset 0 -15px 25px -10px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.05)',
                    }}
                  >
                    {/* If double vision, render horizontal translucent slatted strips */}
                    {selectedProduct.id.includes('double') ? (
                      <div className="w-full h-full flex flex-col justify-between overflow-hidden">
                        {Array.from({ length: 14 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-full bg-stone-900/35 transition-all duration-300"
                            style={{
                              height: '24px',
                              opacity: isClosed ? 0.35 : 0.45,
                              borderBottom: '1px solid rgba(255,255,255,0.08)'
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Flat Roller Blind look */
                      <div className="w-full h-full bg-gradient-to-b from-black/5 via-transparent to-black/15 flex flex-col justify-end">
                        {/* Sub-mesh or screen texture */}
                        {selectedProduct.id.includes('tela') && (
                          <div className="absolute inset-0 bg-stone-900/5 mix-blend-overlay opacity-50" style={{ backgroundImage: 'radial-gradient(#000 12%, transparent 12%)', backgroundSize: '3px 3px' }} />
                        )}
                        <div className="h-2 w-full bg-stone-850/60 shadow" />
                      </div>
                    )}
                  </div>

                  {/* Top Roller cassete mechanism */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-stone-300 rounded-t-sm shadow-md border-b border-stone-400/30 flex items-center px-4">
                    <div className="w-full h-1.5 bg-stone-400/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Room Furniture Graphics Placement (Sofa, rug, plants in foreground) */}
            {!customImage && (
              <div className="relative z-30 pointer-events-none px-8 pb-4 flex items-end justify-between">
                
                {/* Left element: Indoor House Plant pots */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-12 bg-[#8C5E3B] rounded-b-xl shadow-lg border border-stone-750 flex flex-col justify-start">
                    <div className="h-1 bg-stone-700 w-full" />
                  </div>
                  {/* Visual leaves */}
                  <div className="w-16 h-12 -mt-16 flex justify-around">
                    <div className="w-3.5 h-14 bg-emerald-800/80 rounded-full rotate-20 filter drop-shadow-md origin-bottom transform translate-x-1" />
                    <div className="w-4 h-16 bg-emerald-700/85 rounded-full filter drop-shadow-md origin-bottom" />
                    <div className="w-3.5 h-14 bg-emerald-800/80 rounded-full -rotate-20 filter drop-shadow-md origin-bottom transform -translate-x-1" />
                  </div>
                </div>

                {/* Center element: Cozy Modern Sofa (Fits correctly across bottom) */}
                <div
                  className="w-7/12 bg-stone-800 text-stone-300 border border-stone-700 rounded-t-3xl pt-5 pb-2 px-6 flex flex-col items-center shadow-2xl transition-all duration-300"
                  style={{
                    transform: selectedRoom === 'sala' ? 'translateY(0)' : 'translateY(110%)',
                    opacity: selectedRoom === 'sala' ? 1 : 0
                  }}
                >
                  <div className="w-full h-1.5 bg-stone-750 rounded-full mb-3 shadow-inner" />
                  {/* Sofa cushions */}
                  <div className="flex gap-1.5 w-full justify-center">
                    <div className="bg-stone-750 border border-stone-700 flex-1 h-7 rounded-lg flex items-center justify-center font-mono text-[8px] text-stone-500 uppercase tracking-widest leading-none">
                      LIVING ROOM
                    </div>
                    <div className="bg-stone-750 border border-stone-700 flex-1 h-7 rounded-lg" />
                  </div>
                </div>

                {/* Center Element Alternative: Sleek Bed (Fills space when Bedroom) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8/12 bg-stone-800 text-stone-300 border border-stone-750 rounded-t-2xl px-8 pt-4 pb-2 flex flex-col items-center shadow-2xl transition-all duration-300"
                  style={{
                    transform: selectedRoom === 'quarto' ? 'translateY(0)' : 'translateY(110%)',
                    opacity: selectedRoom === 'quarto' ? 1 : 0
                  }}
                >
                  {/* Pillows and Blanket */}
                  <div className="flex gap-4 mb-2 justify-center w-full">
                    <div className="bg-white/90 border border-stone-300 w-16 h-6 rounded-md shadow-sm" />
                    <div className="bg-white/90 border border-stone-300 w-16 h-6 rounded-md shadow-sm" />
                  </div>
                  <div className="w-full h-10 bg-amber-950/20 rounded-md border border-stone-700 flex items-center justify-center font-mono text-[8px] text-stone-500 uppercase tracking-widest leading-none">
                    BEDROOM SCENE
                  </div>
                </div>

                {/* Center Element Alternative: Office Desk & Chair */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8/12 bg-stone-850 rounded-t-xl py-3 px-6 flex items-center justify-between border-t border-stone-700 shadow-2xl transition-all duration-300"
                  style={{
                    transform: selectedRoom === 'escritorio' ? 'translateY(0)' : 'translateY(110%)',
                    opacity: selectedRoom === 'escritorio' ? 1 : 0
                  }}
                >
                  <div className="w-20 h-10 bg-stone-700 border border-stone-600 rounded-md shadow-sm flex items-center justify-center font-mono text-[8px] text-stone-400">
                    MONITOR
                  </div>
                  <div className="text-right font-mono text-[8px] text-[#A69C89] uppercase tracking-widest leading-none">
                    OFFICE DESK
                  </div>
                </div>

                {/* Right element: Elegant floor lamp */}
                <div className="flex flex-col items-center h-28 justify-end">
                  <div className="w-10 h-6 bg-amber-50 rounded-t-full border border-stone-200 shadow-lg" style={{ boxShadow: '0 -10px 20px rgba(253,246,227,0.5)' }} />
                  <div className="w-1 h-20 bg-stone-400" />
                  <div className="w-8 h-1 bg-stone-500 rounded-full" />
                </div>

              </div>
            )}

            {/* Simulated Watermark Info tag in left top */}
            <div className="absolute top-6 left-6 z-40 bg-brand-dark/80 border border-white/10 text-[8px] font-mono tracking-widest text-[#E0E0E0] px-3 py-1.5 rounded-md flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-brand-accent animate-spin" style={{ animationDuration: '10s' }} />
              <span>SIMULADOR DIGITAL</span>
            </div>
          </div>

          {/* Right: Rich Configuration Sidepanel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Room Selection */}
            <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-lg space-y-4">
              <h3 className="font-sans text-xs font-bold tracking-widest text-brand-text uppercase flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                <span>1. Escolha o Cômodo</span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {ROOMS.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setSelectedRoom(room.id);
                      setCustomImage(null); // Clear custom image when choosing preset room
                    }}
                    className={`p-3 rounded-2xl flex flex-col items-center text-center justify-center transition-all border cursor-pointer ${
                      selectedRoom === room.id && !customImage
                        ? 'border-brand-accent bg-white/5 text-brand-text'
                        : 'border-white/5 bg-[#1F1F1F]/40 hover:border-[#333] text-brand-muted'
                    }`}
                  >
                    <span className="font-sans text-xs font-semibold">{room.name}</span>
                  </button>
                ))}
              </div>
              <p className="font-sans text-[11px] text-brand-muted leading-normal font-light italic">
                {customImage ? 'Focando no seu ambiente personalizado carregado.' : ROOMS.find(r => r.id === selectedRoom)?.description}
              </p>
            </div>

            {/* Custom Wall Photo Upload Panel */}
            <div className="bg-brand-card rounded-3xl p-6 border border-brand-accent/20 shadow-lg space-y-4 relative overflow-hidden animate-fadeIn">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="font-sans text-xs font-bold tracking-widest text-[#B5B5B5] uppercase flex items-center space-x-2 text-brand-accent">
                <Upload className="w-4 h-4 text-brand-accent" />
                <span>Simular na Minha Parede</span>
              </h3>
              
              {!customImage ? (
                <div className="space-y-3">
                  <p className="font-sans text-[11px] text-[#B5B5B5] leading-relaxed font-light">
                    Tire uma foto de frente para a sua parede/janela atual e faça o upload para simular as cortinas na sua própria casa!
                  </p>
                  
                  <label className="flex flex-col items-center justify-center border border-dashed border-white/10 hover:border-brand-accent/50 rounded-2xl p-6 cursor-pointer bg-white/5 hover:bg-[#2A2A2A] transition-all duration-300 group">
                    <Upload className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform mb-2" />
                    <span className="text-xs font-semibold text-brand-text">Anexar Foto do Local</span>
                    <span className="text-[9px] text-[#888] mt-1 font-mono">Formatos: JPG, PNG, WEBP</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="font-sans text-[11px] text-brand-muted leading-relaxed font-light">
                    Arraste os controles abaixo para redimensionar, mover e alinhar a cortina perfeitamente em cima da sua janela real.
                  </p>
                  
                  {/* Miniature and Revert Button */}
                  <div className="flex items-center justify-between p-2.5 bg-brand-dark/60 border border-white/5 rounded-xl">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={customImage}
                        alt="Miniatura"
                        className="w-10 h-10 object-cover rounded-lg border border-brand-accent/20"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs text-brand-text font-semibold">Meu Espaço</span>
                        <span className="text-[9px] text-brand-accent font-mono">Simulando...</span>
                      </div>
                    </div>
                    <button
                      onClick={handleClearPhoto}
                      className="p-1.5 px-3 rounded-lg bg-red-400/10 hover:bg-red-400/20 text-red-400 text-[10px] font-sans font-bold flex items-center space-x-1 cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>
                  </div>

                  {/* Positioning sliders */}
                  <div className="space-y-3.5 pt-3 border-t border-white/5 text-xs">
                    
                    {/* Horizontal position slider */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted">
                        <span>Posição Horizontal (X)</span>
                        <span className="text-brand-accent font-bold">{curtainX > 0 ? `+${curtainX}` : curtainX}px</span>
                      </div>
                      <input
                        type="range"
                        min="-150"
                        max="150"
                        value={curtainX}
                        onChange={(e) => setCurtainX(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                    {/* Vertical position slider */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted">
                        <span>Posição Vertical (Y)</span>
                        <span className="text-brand-accent font-bold">{curtainY > 0 ? `+${curtainY}` : curtainY}px</span>
                      </div>
                      <input
                        type="range"
                        min="-150"
                        max="150"
                        value={curtainY}
                        onChange={(e) => setCurtainY(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                    {/* Width adjustment slider */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted">
                        <span>Largura da Cortina</span>
                        <span className="text-brand-accent font-bold">{curtainWidth}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="200"
                        value={curtainWidth}
                        onChange={(e) => setCurtainWidth(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                    {/* Height adjustment slider */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted">
                        <span>Altura da Cortina</span>
                        <span className="text-brand-accent font-bold">{curtainHeight}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="200"
                        value={curtainHeight}
                        onChange={(e) => setCurtainHeight(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                    {/* Opacity adjustment slider */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted">
                        <span>Opacidade do Tecido</span>
                        <span className="text-brand-accent font-bold">{curtainOpacity}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={curtainOpacity}
                        onChange={(e) => setCurtainOpacity(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. Product Style Selection */}
            <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-lg space-y-4">
              <h3 className="font-sans text-xs font-bold tracking-widest text-brand-text uppercase flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                <span>2. Modelo do Tecido/Trilho</span>
              </h3>
              <div className="space-y-2">
                {PRODUCT_TYPES.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedProduct.id === prod.id
                        ? 'border-brand-accent bg-white/5 text-brand-text font-medium'
                        : 'border-white/5 bg-[#1F1F1F]/40 hover:border-[#333] text-[#B5B5B5]'
                    }`}
                  >
                    <span className="font-sans text-xs">{prod.name}</span>
                    <span className="font-mono text-[9px] text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-0.5 rounded-full uppercase">
                      {prod.category === 'cortinas' ? 'Suíça' : 'Rolo'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Color Palette Selector */}
            <div className="bg-brand-card rounded-3xl p-6 border border-white/10 shadow-lg space-y-4">
              <h3 className="font-sans text-xs font-bold tracking-widest text-brand-text uppercase flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                <span>3. Tonalidade da Coleção</span>
              </h3>
              
              <div className="flex gap-3 justify-center py-2 border-b border-white/10">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-9 h-9 rounded-full cursor-pointer relative transition-all duration-300 drop-shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center ${
                      selectedColor.id === color.id ? 'ring-2 ring-brand-accent ring-offset-2 ring-offset-black' : ''
                    }`}
                    title={color.name}
                  >
                    {selectedColor.id === color.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <h4 className="font-sans text-xs font-semibold text-brand-text">{selectedColor.name}</h4>
                <p className="font-sans text-[10px] text-brand-muted font-light leading-relaxed">
                  {selectedColor.description}
                </p>
              </div>
            </div>

            {/* Smart Architect Tip Block */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start space-x-3 text-brand-muted text-xs leading-relaxed font-light">
              <Info className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
              <span>{getSimulatedTip()}</span>
            </div>

            {/* Call to action */}
            <button
              onClick={handleSimulateRequest}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl font-sans text-xs font-bold tracking-widest text-black bg-brand-accent hover:bg-white transition-colors shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              QUERO ASSIM NO MEU AMBIENTE
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
