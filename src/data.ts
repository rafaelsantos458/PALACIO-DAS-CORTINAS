import { Product, RoomOption, ProductTypeOption, ColorOption } from './types';

export const HERO_IMAGE = '/src/assets/images/curtain_hero_banner_1779832166206.png';
export const BLINDS_IMAGE = '/src/assets/images/persianas_blinds_1779832185637.png';
export const WALLPAPER_IMAGE = '/src/assets/images/papel_parede_1779832201591.png';

// Standard high quality Unsplash placeholders for products that aren't generated
export const CORTINA_WAVE_IMAGE = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800';
export const ALMOFADAS_IMAGE = 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800';

export const PRODUCTS: Product[] = [
  {
    id: 'cortina-wave',
    name: 'Cortina Wave (Gaze de Linho)',
    category: 'cortinas',
    description: 'Efeito ondas perfeitas com fluidez natural e caimento impecável. Ideal para salas de estar e quartos sofisticados.',
    fullDetails: 'A Cortina Wave é o ápice da alta costura em decoração. Seu sistema de trilho deslizante mantém pregas perfeitamente onduladas e espaçadas uniformemente. Confeccionada com Gaze de Linho importada de alto padrão, proporciona suavidade, controle suave de luminosidade e atmosfera acolhedora.',
    features: ['Pregas perfeitamente simétricas', 'Instalação em trilho suíço tradicional ou embutido em gesso', 'Fácil remoção para limpeza', 'Compatível com automação residencial'],
    materials: ['Gaze de Linho Premium', 'Linho Rústico com Poliéster (maior durabilidade)', 'Seda Sintética', 'Forro Corta-Luz/Blackout opcional'],
    image: CORTINA_WAVE_IMAGE
  },
  {
    id: 'cortina-romana',
    name: 'Cortina Romana',
    category: 'cortinas',
    description: 'Elegância em módulos que se dobram horizontalmente ao subir. Perfeita para quem busca um design clássico e estruturado.',
    fullDetails: 'A Cortina Romana possui divisões estruturadas em varetas que criam gomos horizontais elegantes que sobem de forma escalonada. É versátil, moderna e ocupa pouco espaço nas laterais da janela, sendo muito requisitada para home offices e quartos.',
    features: ['Efeito em cascata estruturado', 'Excelente controle de altura', 'Fácil de operar', 'Acabamento minimalista na parte superior'],
    materials: ['Gaze de Linho semitransparente', 'Polyester de alta resistência', 'Tecido Blackout emborrachado', 'Tecido Solar Screen / Tela Solar'],
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'persiana-double-vision',
    name: 'Persiana Double Vision',
    category: 'persianas',
    description: 'Faixas alternadas de tecido translúcido e opaco que proporcionam controle total de luminosidade e privacidade.',
    fullDetails: 'A Persiana Double Vision (também conhecida como rolo noite e dia) traz o controle de luz definitivo. Através de um tecido duplo com faixas horizontais de trama fechada e translúcida, permite sobrepor as faixas para total privacidade, abertura parcial ou recolhimento total de forma moderna.',
    features: ['Controle milimétrico da luz', 'Estilo extremamente contemporâneo', 'Manuseio leve e silencioso', 'Mecanismo em alumínio escovado'],
    materials: ['Poliéster Antiestático', 'Tecidos Metalizados e Perolados', 'Fibra Ecológica', 'Tratamento Dust-Repellent'],
    image: BLINDS_IMAGE
  },
  {
    id: 'persiana-rolo-screen',
    name: 'Persiana Rolô Tela Solar',
    category: 'persianas',
    description: 'Proteção UV inteligente com transparência visual. Reduz o calor e protege móveis sem bloquear a vista externa.',
    fullDetails: 'A Persiana Rolô Screen (Tela Solar) é a escolha ideal para varandas gourmet, cozinhas, salas com incidência direta de sol e escritórios. Desenvolvida com tecnologia de trama técnica de poliéster e PVC, ela filtra o calor nocivo dos raios UV e reduz o brilho em telas, mantendo a luminosidade ideal no ambiente.',
    features: ['Bloqueio de até 95% dos Raios UV', 'Redução térmica de até 30% no ambiente', 'Material totalmente lavável e anti-chamas', 'Opções de abertura de 1%, 3% e 5%'],
    materials: ['Composto de PVC de Alta Densidade e Fibra de Vidro', 'Poliéster de Alta Costura com proteção UV'],
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'almofadas-luxo',
    name: 'Almofadas sob Medida',
    category: 'almofadas',
    description: 'Complemento fundamental para trazer aconchego e harmonia nas cores e texturas do seu ambiente.',
    fullDetails: 'Nossas almofadas exclusivas são projetadas para amarrar os tons de suas cortinas com os estofados. Confeccionadas sob medida, utilizam enchimento de fibra siliconada antialérgica de alto retorno e fechamento inteligente com zíper invisível para acabamento impecável.',
    features: ['Zíper invisível em todas as peças', 'Enchimento ultra macio de silicone sustentável', 'Costuras reforçadas com debrum ou vivo', 'Fácil de lavar e trocar as capas'],
    materials: ['Veludo Nobre', 'Linho Puro Cru', 'Couro Ecológico Premium', 'Jacquard Bordado'],
    image: ALMOFADAS_IMAGE
  },
  {
    id: 'papel-parede-premium',
    name: 'Papel de Parede Importado',
    category: 'papeis',
    description: 'Transformação rápida, limpa e sofisticada de paredes com texturas ricas e alta durabilidade.',
    fullDetails: 'Coleções de papéis de parede nacionais e importados de altíssima qualidade (Itália, França e Alemanha). Opções vinílicas super-resistentes que podem ser limpas com facilidade. Perfeito para agregar profundidade, sofisticação e estilo às paredes de quartos, salas e lavabos.',
    features: ['Instalação rápida e sem qualquer sujeira', 'Cola atóxica e sem cheiro inclusa no serviço', 'Alta durabilidade (até 15 anos)', 'Excelente para disfarçar imperfeições superficiais'],
    materials: ['Papel Vinílico Super Lavável', 'Non-Woven (fácil reposicionamento)', 'Textura Palha Natural', 'Detalhes com Relevo e Brilho Metalizado'],
    image: WALLPAPER_IMAGE
  }
];

export const ROOMS: RoomOption[] = [
  {
    id: 'sala',
    name: 'Sala de Estar',
    description: 'Ambiente aconchegante, iluminado e perfeito para receber visitas. Cortinas fluidas e controle moderado de reflexo.'
  },
  {
    id: 'quarto',
    name: 'Quarto',
    description: 'Seu refúgio de descanso profundo. Exige bloqueio solar total (Blackout) e isolamento térmico suave.'
  },
  {
    id: 'escritorio',
    name: 'Escritório/Home Office',
    description: 'Foco na produtividade e redução térmica de brilhos de tela. Telas solares (Rolô screen) ou Romana são indicadas.'
  }
];

export const PRODUCT_TYPES: ProductTypeOption[] = [
  {
    id: 'wave-gaze',
    name: 'Cortina Wave (Gaze de Linho)',
    category: 'cortinas',
    imagePlaceholder: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    basePricePerSqm: 180 // R$/m² aproximado para cálculo simulado realista
  },
  {
    id: 'wave-velvet',
    name: 'Cortina Wave Premium (Veludo & Forro)',
    category: 'cortinas',
    imagePlaceholder: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    basePricePerSqm: 250
  },
  {
    id: 'rolo-tela-3',
    name: 'Persiana Rolô Tela Solar 3%',
    category: 'persianas',
    imagePlaceholder: 'https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&q=80&w=800',
    basePricePerSqm: 140
  },
  {
    id: 'persiana-double',
    name: 'Persiana Central Double Vision',
    category: 'persianas',
    imagePlaceholder: BLINDS_IMAGE,
    basePricePerSqm: 195
  },
  {
    id: 'romana-tecido',
    name: 'Cortina Romana em Linho',
    category: 'persianas', // Romana categoriza aqui por mecanismo
    imagePlaceholder: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=120&blur=10',
    basePricePerSqm: 210
  }
];

export const COLORS: ColorOption[] = [
  {
    id: 'offwhite',
    name: 'Branco Panna Cotta',
    hex: '#F9F8F4',
    description: 'Clássico toque suave, amplia a luz e combina perfeitamente com qualquer decoração moderna.'
  },
  {
    id: 'sand',
    name: 'Areia Rústica',
    hex: '#E2DEC9',
    description: 'Tom quente e natural, evoca a sensação de aconchego orgânico e tranquilidade.'
  },
  {
    id: 'slate-grey',
    name: 'Cinza Platina',
    hex: '#CCD2C9',
    description: 'Modernidade fria e neutra, perfeita para escritórios ou salas com estilo industrial de gesso clean.'
  },
  {
    id: 'charcoal',
    name: 'Grafite Urbano',
    hex: '#3E3E3E',
    description: 'Ousadia e contraste, excelente para ambientes cinema ou quartos com alta demanda blackout.'
  },
  {
    id: 'terracotta',
    name: 'Terracota Warm',
    hex: '#C67A5C',
    description: 'Um toque sutil de cor aconchegante que conecta a sala com elementos amadeirados.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Mariana Mendonça',
    location: 'Condomínio San Marino, Limeira - SP',
    quote: 'Atendimento excepcional e pontualidade incrível! Comprei as cortinas Wave em Gaze de Linho para a minha sala de pé direito duplo e o resultado ficou cinematográfico. A costura é impecável e o trilho corre tão leve que parece flutuar.',
    stars: 5,
    date: 'Abril de 2026'
  },
  {
    name: 'Douglas Ferreira',
    location: 'Centro, Limeira - SP',
    quote: 'Fiz a automação das persianas rolo da minha varanda gourmet e ficou espetacular. O atendimento da Palácio foi do início ao fim com extrema dedicação e conhecimento técnico. O fechamento das persianas pelo comando de voz é maravilhoso.',
    stars: 5,
    date: 'Maio de 2026'
  },
  {
    name: 'Beatriz Vasconcelos',
    location: 'Jardim Aquarius, Campinas - SP',
    quote: 'As cortinas romanas e o papel de parede do quarto do meu bebê foram colocados em tempo recorde e sem sujeira nenhuma! A equipe de instalação é extremamente educada e limpa. Recomendo de olhos fechados!',
    stars: 5,
    date: 'Março de 2026'
  }
];

export const INSTAGRAM_INSPIRATIONS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600',
    alt: 'Cortina Wave Linho instalada em cortineiro iluminado com fita LED em sala de estar moderna.',
    category: 'cortinas'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
    alt: 'Persiana Double Vision em quarto de casal de alto padrão, combinando tons areia e off-white.',
    category: 'persianas'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=600',
    alt: 'Sala com papel de parede rústico de palha natural e almofadas coordenadas em veludo verde-oliva.',
    category: 'papeis'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600',
    alt: 'Cortina Romana sobre janela de Home Office clean, filtrando perfeitamente os reflexos nas telas.',
    category: 'cortinas'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600',
    alt: 'Persianas Rolô Blackout instaladas rente à folha da janela em apartamento contemporâneo.',
    category: 'persianas'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600',
    alt: 'Conjunto de almofadas sob medida com estampas geométricas discretas e acabamento impecável.',
    category: 'almofadas'
  }
];
