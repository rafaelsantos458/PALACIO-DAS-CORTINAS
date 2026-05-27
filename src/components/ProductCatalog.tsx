import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, Shield, Sparkles, AlertCircle, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<'todos' | 'cortinas' | 'persianas' | 'almofadas' | 'papeis'>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'cortinas', label: 'Cortinas sob Medida' },
    { id: 'persianas', label: 'Persianas & Automação' },
    { id: 'almofadas', label: 'Almofadas Finas' },
    { id: 'papeis', label: 'Papel de Parede' },
  ];

  const filteredProducts = activeTab === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="produtos" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
            Nossa Loja & Confecção
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-light tracking-tight text-brand-text">
            Peças exclusivas formuladas com <br />
            <span className="font-serif italic text-brand-accent font-normal">as melhores matérias-primas</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent/35 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light max-w-md mx-auto">
            Explore nossa linha sob medida. Diga-nos qual estilo se adequa ao seu sonho e criamos de forma sob medida em nossa oficina.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-accent text-black shadow-md shadow-brand-accent/20'
                  : 'bg-brand-card text-brand-muted border border-white/10 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-brand-card rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/30 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/30 transition-colors" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 inline-block bg-black/85 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-semibold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full">
                    {product.category === 'cortinas' ? 'Cortinas' : 
                     product.category === 'persianas' ? 'Persianas' : 
                     product.category === 'almofadas' ? 'Almofadas' : 'Papel de Parede'}
                  </span>

                  {/* Icon Trigger */}
                  <div className="absolute bottom-4 right-4 bg-brand-accent p-2.5 rounded-full shadow-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-sans text-base font-semibold tracking-wide text-brand-text">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-muted font-light leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  {/* High level features listing */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="font-sans text-[10px] font-medium text-brand-text bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative bg-brand-card rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 border border-white/10 flex flex-col md:flex-row"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-4 top-4 z-20 bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left: Product Image Panel */}
                <div className="md:w-1/2 relative bg-brand-dark max-h-[350px] md:max-h-full">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover min-h-[250px] md:min-h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/40 to-transparent" />
                </div>

                {/* Right: Detailed Content Panel */}
                <div className="p-8 md:w-1/2 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-brand-accent uppercase font-bold">
                      {selectedProduct.category.toUpperCase()} SOB MEDIDA
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-light tracking-wide text-brand-text">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-brand-muted font-light leading-relaxed">
                    {selectedProduct.fullDetails}
                  </p>

                  {/* Highlights/Benefits Checklist */}
                  <div className="space-y-3">
                    <h4 className="font-sans text-[11px] font-semibold tracking-widest text-brand-text uppercase flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent mr-1.5" /> Diferenciais Técnicos
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-brand-muted font-light">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Materials & Finishes */}
                  <div className="space-y-3">
                    <h4 className="font-sans text-[11px] font-semibold tracking-widest text-brand-text uppercase flex items-center">
                      <Shield className="w-3.5 h-3.5 text-brand-accent mr-1.5" /> Tecidos e Acabamentos
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.materials.map((mat, idx) => (
                        <span key={idx} className="font-sans text-[10px] text-brand-text bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Informational tip or lead in */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-start space-x-2 text-brand-muted text-xs font-light">
                    <AlertCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>Nossa alfaiataria de cortinas realiza a barra italiana, bainhas duplas de 15cm ou 20cm e trilhos revestidos. Atendimento premium e exclusivo!</span>
                  </div>

                  {/* Custom lead trigger button */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/5519982646086?text=Olá!%20Estou%20no%20site%20e%20fiquei%20interessado(a)%20no%20produto:%20${encodeURIComponent(selectedProduct.name)}.%20Gostaria%20de%20saber%20mais%20detalhes.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl font-sans text-xs font-bold tracking-widest text-black bg-brand-accent hover:bg-white focus:outline-none shadow-lg transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 mr-2" />
                      QUERO UM ORÇAMENTO DISTO
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
