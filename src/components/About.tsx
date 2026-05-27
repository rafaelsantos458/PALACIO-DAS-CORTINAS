import { motion } from 'motion/react';
import { Compass, Award, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Compass className="w-5 h-5 text-brand-accent" />,
      title: 'Visita Técnica Gratuita',
      description: 'Vamos até o seu ambiente em Limeira e região para aferir medidas milimétricas e apresentar mostruários com centenas de tecidos.',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-accent" />,
      title: 'Alta Oficina de Costura',
      description: 'Cortinas produzidas artesanalmente sob rigoroso padrão europeu, com bainhas invisíveis, tecidos pré-encolhidos e caimento impecável.',
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-accent" />,
      title: 'Consultoria Personalizada',
      description: 'Ajudamos a harmonizar as texturas e padrões de acordo com o design de interiores, paletas de cores e incidência de luz solar do local.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-brand-accent" />,
      title: 'Instalação Própria e Limpa',
      description: 'Equipe especializada que realiza a colocação dos trilhos, persianas e acessórios com as devidas aspirações de poeira e ajustes finais.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase block font-semibold">
                Nossa Essência
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-text leading-tight">
                Mais de uma década <br />
                <span className="font-serif italic text-brand-accent font-normal">vestindo lares & sonhos</span>
              </h2>
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base text-brand-muted font-light leading-relaxed">
              <p>
                Fundado em <strong className="text-brand-text font-semibold">2012</strong>, o <strong className="text-brand-text font-semibold">Palácio das Cortinas</strong> nasceu de um sonho focado em traduzir afeto, fé e trabalho duro em elementos de design exclusivos. Acreditamos que uma cortina ou persiana não é simplesmente um acessório para cobrir janelas, mas a alma e a pulsação do espaço, trazendo aconchego e finalizando com maestria cada projeto.
              </p>
              <p>
                Cada detalhe é cuidadosamente planejado e executado inteiramente sob medida para harmonizar com seu projeto residencial ou corporativo. Combinamos tecidos importados inovadores, automações residenciais silenciosas, papéis de parede elegantes e almofadas de acabamento invisível para entregar uma experiência incomparável de conforto visual e bem-estar.
              </p>
            </div>

            {/* Quick Metrics grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="font-sans text-3xl md:text-4xl font-light text-brand-accent">14 anos</p>
                <p className="font-mono text-[9px] tracking-wider text-brand-muted uppercase mt-1">De Experiência</p>
              </div>
              <div>
                <p className="font-sans text-3xl md:text-4xl font-light text-brand-accent">3.5k+</p>
                <p className="font-mono text-[9px] tracking-wider text-brand-muted uppercase mt-1">Projetos Entregues</p>
              </div>
              <div>
                <p className="font-sans text-3xl md:text-4xl font-light text-brand-accent">100%</p>
                <p className="font-mono text-[9px] tracking-wider text-brand-muted uppercase mt-1">Amor na Costura</p>
              </div>
            </div>
          </div>

          {/* Graphical/Cards Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card rounded-3xl p-8 border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -z-10 opacity-40" />
              
              <h3 className="font-sans text-lg font-medium tracking-wide text-brand-text text-center border-b border-white/10 pb-4">
                Por que escolher o Palácio?
              </h3>

              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-2.5 bg-white/5 rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold tracking-wide text-brand-text">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-brand-muted font-light leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
