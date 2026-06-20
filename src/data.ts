import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: "consultoria-master",
    title: "Corte de Cabelo Feminino (Corte)",
    description: "Corte de cabelo feminino personalizado para valorizar seu formato de rosto e movimento natural. Se você busca um corte perto de mim na Zona Sul de São Paulo, agende para renovar seu estilo com acabamento de alto padrão.",
    price: "R$ 180",
    duration: "45min",
    category: "Corte",
    tags: ["Corte Feminino", "Corte perto de mim"]
  },
  {
    id: "aplicacao-mechas",
    title: "Mechas e Iluminação Capilar (Mechas)",
    description: "Técnica de mechas e iluminação com contorno suave para iluminar os fios com proteção da saúde capilar. Perfeito para quem busca mechas perto de mim na região.",
    price: "R$ 450",
    duration: "2h 30min",
    category: "Mechas",
    tags: ["Mechas", "Cabelo Iluminado"]
  },
  {
    id: "colorimetria",
    title: "Coloração Capilar Profissional (Coloração)",
    description: "Coloração completa com cobertura excelente de fios brancos ou mudança de tom com brilho de alta duração. Ideal para quem procura coloração perto de mim.",
    price: "R$ 220",
    duration: "1h 30min",
    category: "Coloração",
    tags: ["Coloração", "Tintura Capilar"]
  }
];

export const TEMPERAMENTS = [
  {
    name: "Sanguíneo",
    element: "Ar / Sol",
    traits: ["Comunicativo", "Vibrante", "Expansivo", "Otimista"],
    visualLines: "Inclinadas, diagonais e formas em triângulos, que transmitem dinamismo, rapidez, flexibilidade e brilho pessoal.",
    recommendations: "Evitar cortes de cabelo extremamente retos ou estáticos que abafem sua energia solar. Abusar de texturas leves, fios desconectados e franjas com movimento.",
    archetypes: "O Criador / O Mágico"
  },
  {
    name: "Colérico",
    element: "Fogo / Força",
    traits: ["Determinado", "Líder", "Focado", "Íntegro"],
    visualLines: "Retas horizontais e verticais nítidas, em formas quadradas e retangulares, transmitindo poder, liderança, independência e foco inabalável.",
    recommendations: "Se o objetivo for suavizar a imagem imponente ou corporativa severa, adicionar algumas linhas curvas ao cabelo ou iluminação degradê. Se quiser maximizar poder, usar corte tipo chanel reto ou geométricos limpos.",
    archetypes: "O Soberano / O herói"
  },
  {
    name: "Melancólico",
    element: "Terra / Intelecto",
    traits: ["Sensível", "Analítico", "Sofisticado", "Profundo"],
    visualLines: "Linhas verticais longas e curvas sofisticadas, formas em trapézios e triângulos invertidos, expressando elegância poética, discrição e detalhismo estético.",
    recommendations: "Para equilibrar a sensibilidade introspectiva, mechas ao redor do contorno facial que tragam luz interna. Cortes equilibrados, franjas cortinas macias e sobrancelhas bem preenchidas sem agressividade.",
    archetypes: "O Sábio / O Amante"
  },
  {
    name: "Fleumático",
    element: "Água / Serenidade",
    traits: ["Sereno", "Diplomático", "Constante", "Amigável"],
    visualLines: "Linhas curvas suaves e círculos, formas arredondadas puras que denotam acessibilidade, acolhimento confortável, calma exemplar, escuta ativa e empatia.",
    recommendations: "Sendo um temperamento de acolhimento e escuta, você pode usar linhas retas sutis em brincos, colares e óculos retangulares para introduzir leve poder de decisão à sua assinatura visual sem perder seu carisma acolhedor.",
    archetypes: "O Protetor / O Cidadão Comum"
  }
];

export const STUDIO_INFO = {
  address: "Rua Dr. Ferreira Lopes, 703 - Jardim Marajoara",
  city: "São Paulo - SP, CEP 04671-011",
  phone: "(11) 99227-9655",
  instagram: "@beatrizbittencourt.visagismo",
  email: "contato@beatrizbittencourt.com.br",
  hours: [
    { days: "Terça a Sexta-feira", time: "09:00h às 19:00h" },
    { days: "Sábados", time: "09:00h às 16:00h" },
    { days: "Domingo e Segunda", time: "Fechado" }
  ],
  coordinates: { lat: -23.6429, lng: -46.6974 } // Jardim Marajoara / Chácara Flora boundary
};

export const FAQ = [
  {
    question: "O que é o Visagismo?",
    answer: "O visagismo é a arte de criar uma imagem pessoal personalizada que revela a identidade, temperamento e intenções comunicativas de uma pessoa, sincronizando a estrutura de corte capilar, maquiagem, acessórios e vestuário com o seu modo de viver."
  },
  {
    question: "Como funciona a Análise IA do Ateliê?",
    answer: "Nossa inteligência artificial analisa seus traços faciais estruturais (ângulo da mandíbula, distância ocular, sobrancelhas e formato declarado) e seus objetivos de vida para prever seu temperamento e traçar recomendações profissionais imediatas baseadas nos materiais de estudo do Ateliê."
  },
  {
    question: "A consulta é feita perto de mim?",
    answer: "Sim! Se você está em São Paulo, especialmente na região de Jardim Marajoara, Chácara Flora, Vila Sofia, Alto da Boa Vista, Santo Amaro ou Panamby, nosso ateliê físico fica extremamente próximo, na Rua Dr. Ferreira Lopes, 703, com estacionamento privativo e atendimento boutique reservado."
  },
  {
    question: "Preciso ir sem maquiagem para a consulta presencial?",
    answer: "Sim. Para a colorimetria presencial e análise de linhas faciais ideais, solicitamos que venha de rosto limpo para que a pele neutra reflita os tecidos de draping sazonal com fidelidade perfeita."
  }
];

export interface LocalRegion {
  landmark: string;
  distance: string;
  transport: string;
  context: string;
  seoKeywords: string[];
}

export const LOCAL_SEO_REGIONS: LocalRegion[] = [
  {
    landmark: "Colégio Chapel / Chapel School",
    distance: "A apenas 200 metros",
    transport: "a pé 🚶‍♀️ (cerca de 2 min)",
    context: "Siga reto pela Rua Dr. Ferreira Lopes para maior conveniência de pais e alunos da Chácara Flora.",
    seoKeywords: ["ChácaraFlora", "Visagismo", "DrFerreiraLopes"]
  },
  {
    landmark: "Escola Suíço-Brasileira de São Paulo",
    distance: "A 450 metros",
    transport: "a pé 🚶‍♂️ (cerca de 5 min)",
    context: "Excelente conveniência para agendamento rápido durante o contra-turno escolar na Vila Sofia.",
    seoKeywords: ["VilaSofia", "CabeloFeminino", "Estilo"]
  },
  {
    landmark: "Supermercado Pão de Açúcar Jardim Marajoara",
    distance: "A 300 metros",
    transport: "a pé 🚶 ou 1 min de carro 🚗",
    context: "Localizado na mesma calçada principal, ideal para otimizar suas compras diárias com seu atendimento de imagem e barbearia.",
    seoKeywords: ["JardimMarajoara", "Barbearia", "Conveniência"]
  },
  {
    landmark: "Cruzamento da Avenida Washington Luís",
    distance: "A 350 metros",
    transport: "de carro 🚗 (menos de 1 min)",
    context: "Acesso direto e super rápido à principal via que conecta o Aeroporto de Congonhas a Santo Amaro.",
    seoKeywords: ["AvWashingtonLuis", "Estética", "ZonaSul"]
  },
  {
    landmark: "Pizzaria Vicolo Nostro / Chácara Flora",
    distance: "A 500 metros",
    transport: "a pé 🚶‍♀️ ou 2 min de carro 🚗",
    context: "Ponto gastronômico icônico e histórico da Chácara Flora, nas redondezas do nosso ateliê boutique.",
    seoKeywords: ["ChácaraFlora", "VicoloNostro", "Boutique"]
  },
  {
    landmark: "Parque Cordeiro - Martin Luther King",
    distance: "A 800 metros",
    transport: "cerca de 3 min de carro 🚗",
    context: "Belíssima área verde residencial de alto padrão localizada entre a Chácara Monte Alegre e Jardim Marajoara.",
    seoKeywords: ["ParqueCordeiro", "BemEstar", "ChácaraMonteAlegre"]
  },
  {
    landmark: "Estação Alto da Boa Vista (Metrô Linha 5-Lilás)",
    distance: "A 1.2 km",
    transport: "5 min de carro 🚗 ou Uber",
    context: "Fácil acesso para quem vem pela linha metroviária principal, desembarcando próximo à paz residencial de nossa rua.",
    seoKeywords: ["AltoDaBoaVista", "Mobilidade", "MetrôLinha5"]
  },
  {
    landmark: "Avenida Interlagos & Shopping SP Market",
    distance: "A 1.8 km",
    transport: "6 min de carro 🚗 ou ônibus",
    context: "Roteiro perfeito para quem reside ou trabalha em frente ao complexo corporativo e residencial do SP Market.",
    seoKeywords: ["AvInterlagos", "SPMarket", "VilaSofia"]
  },
  {
    landmark: "Bairros vizinhos: Brooklin, Moema & Campo Belo",
    distance: "A menos de 2.5 km",
    transport: "de 7 a 10 min de carro 🚗",
    context: "Deslocamento reto pela Av. Vereador José Diniz ou Av. Santo Amaro, evitando faixas pesadas de trânsito.",
    seoKeywords: ["Brooklin", "CampoBelo", "Moema"]
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana S. Albuquerque",
    role: "Diretora de Marketing",
    location: "Chácara Flora (a 300m do ateliê)",
    service: "Corte de Cabelo Feminino (Corte)",
    rating: 5,
    text: "Moro a poucos metros do ateliê na Chácara Flora e estava procurando um cabeleireiro para corte de cabelo feminino perto de mim de confiança. A Beatriz fez um corte magnífico! O novo estilo adaptado com leveza e movimento elevou absurdamente minha expressão visual. O atendimento boutique é impecável e privativo.",
    source: "Google Reviews",
    date: "Junho 2026"
  },
  {
    id: "t2",
    name: "Amanda Mendes Prado",
    role: "Profissional Liberal",
    location: "Jardim Marajoara (a 200m do ateliê)",
    service: "Coloração Capilar Profissional (Coloração)",
    rating: 5,
    text: "Estava em busca de um local confiável para coloração perto de mim perto da Chapel School. O ateliê é maravilhoso! Fizeram uma coloração capilar impecável, com cobertura uniforme dos brancos e um brilho fora do comum. Fiquei muito feliz com o cuidado e carinho no atendimento.",
    source: "Google Reviews",
    date: "Maio 2026"
  },
  {
    id: "t3",
    name: "Camila F. Vasconcellos",
    role: "Arquiteta & Designer",
    location: "Vila Sofia (a 450m do ateliê)",
    service: "Aplicação de Mechas Capilares (Mechas)",
    rating: 5,
    text: "Fui ao ateliê fazer mechas de contorno facial logo após indicação de uma vizinha da Escola Suíço-Brasileira. As mechas ficaram super naturais e iluminaram totalmente meu semblante sem danificar os fios. Encontrar especialistas em mechas perto de mim com essa qualidade na Zona Sul é precioso.",
    source: "Google Reviews",
    date: "Junho 2026"
  }
];

export interface BridalPackage {
  id: string;
  name: string;
  price: number;
  priceString: string;
  idealFor: string;
  included: string[];
  features: string[];
}

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "noiva-essencial",
    name: "Pacote Essencial: Preparação de Noiva & Penteado de noiva na Zona Sul, São Paulo",
    price: 1500,
    priceString: "R$ 1.500",
    idealFor: "Noivas que desejam um atendimento concentrado com maquiagem HD e penteado de noiva de alta fixação.",
    included: [
      "Teste prévio de penteado de noiva e makeup",
      "Penteado de noiva e maquiagem profissional no salão no Grande Dia da noiva",
      "Hidratação capilar essencial e preparação de noiva para o penteado autoral",
      "Consultoria de visagismo express para harmonização de véu, acessórios e decote na Zona Sul, São Paulo"
    ],
    features: ["Penteado de noiva", "Makeup", "Dia da noiva Slim"]
  },
  {
    id: "noiva-classico",
    name: "Pacote Clássico: Dia da noiva Premium & Penteado de noiva na Zona Sul, São Paulo",
    price: 2600,
    priceString: "R$ 2.600",
    idealFor: "A escolha favorita para o dia dela no salão com máximo conforto, relaxamento e bem-estar completo.",
    included: [
      "Delicioso café da manhã completo no salão boutique",
      "Massagem relaxante corporal para aliviar a tensão do casamento",
      "Manicure e pedicure delicada dedicada para o grande dia",
      "Hidratação capilar profunda e preparação completa do penteado de noiva",
      "Penteado de noiva sofisticado personalizado + Maquiagem (makeup) blindada",
      "Pausa estruturada para sessões de fotos e filmagens (por conta da noiva/seus fotógrafos)",
      "Uso de camarim e espaço privativo boutique no ateliê na Zona Sul, São Paulo"
    ],
    features: ["Penteado de noiva", "Makeup", "Dia da noiva", "Boutique no Salão"]
  },
  {
    id: "noiva-signature",
    name: "Pacote Signature: Dia da noiva & Book de noiva de Luxo na Zona Sul, São Paulo",
    price: 3900,
    priceString: "R$ 3.900",
    idealFor: "A experiência absoluta de luxo, beleza e privacidade total para o dia dela no salão e book de fotos.",
    included: [
      "Todos os serviços do pacote clássico (Café da manhã, Massagem, Depilação, Manicure & Pedicure)",
      "Tratamento capilar intensivo, hidratação capilar e preparação exclusiva do penteado",
      "Espaço boutique reservado com suporte a pausas planejadas para fotos e filmagens (por conta da noiva/seus fotógrafos)",
      "Acompanhamento personalizado da visagista Beatriz Bittencourt até a cerimônia (retoque final no altar)",
      "Acesso ao lounge VIP reservado do ateliê para mãe da noiva ou até 2 madrinhas na Zona Sul, São Paulo",
      "Design de sobrancelha e análise de colorimetria express na semana do casamento"
    ],
    features: ["Book de noiva", "Fazer Fotos & Filmes", "Dia da noiva", "Zona Sul, São Paulo"]
  }
];

export const BRIDAL_FAQS = [
  {
    question: "Qual o valor médio e estimativa de custos para o Dia da noiva na Zona Sul, São Paulo?",
    answer: "O valor de investimento estimado para o Dia da noiva no nosso ateliê boutique na Zona Sul, São Paulo varia de R$ 1.500 no Pacote Essencial até R$ 3.900 no Pacote Signature. O Pacote Clássico, por R$ 2.600, é a escolha favorita e oferece uma experiência completa: delicioso café da manhã no salão, massagem relaxante corporal, manicure e pedicure, hidratação capilar profissional, preparação cuidadosa do penteado de noiva, penteado autoral com makeup blindada e uma pausa especial para fotos e filmagens por conta da noiva. Valores adicionais consistem em produção de Madrinhas/Mães por R$ 300 cada e ensaio prévio extra por R$ 350."
  },
  {
    question: "Como funciona a etapa de Preparação de Noiva e cuidados com o penteado de noiva?",
    answer: "O Dia da noiva no nosso salão é planejado milimetricamente para ser relaxante e inabalável. Toda a preparação inclui hidratação capilar de alta performance para a fibra capilar, preparação cuidadosa do penteado autoral, além de spa facial e depilação. Tudo isso cria a base perfeita para o penteado de noiva e a maquiagem (makeup) dos seus sonhos, garantindo durabilidade extrema e visual impecável frente a luzes e câmeras."
  },
  {
    question: "Como é a escolha de cada Penteado de noiva em sintonia com o vestido?",
    answer: "Através da nossa consultoria de visagismo profissional para noivas na Zona Sul, São Paulo, analisamos o formato do seu rosto, decote do vestido, véu e acessórios para recomendar a melhor harmonia física. Realizamos o Teste Prévio Completo de 30 a 60 dias antes da cerimônia, onde montamos e validamos fisicamente o penteado de noiva escolhido (seja o Coque Atemporal, Semi-Preso Waves ou Trança Boho Premium), garantindo total tranquilidade para o seu Dia da noiva."
  },
  {
    question: "O Ateliê boutique oferece suporte de camarim para o Book de noiva (Making Of) na Zona Sul, São Paulo?",
    answer: "Com certeza! Nosso espaço boutique na Zona Sul, São Paulo conta com camarim profissional iluminado de forma natural e neutra. Oferecemos um buffet gourmet (com café da manhã/coquetel) e estruturamos uma pausa especial planejada para fotos e filmagens por conta da noiva (equipes de fotografia do seu book de noiva), permitindo capturar os melhores momentos do making of com total privacidade."
  },
  {
    question: "Quais são as localizações atendidas na Zona Sul, São Paulo para o Dia da noiva?",
    answer: "Somos um ateliê boutique premium localizado na Rua Dr. Ferreira Lopes, 703, region da Chácara Flora, Jardim Marajoara, Vila Sofia, Brooklin e Santo Amaro (Zona Sul, São Paulo). Atendemos noivas e acompanhantes sob agendamento exclusivo com estacionamento privativo de cortesia. Caso prefira atendimento on-location em domicílios ou hotéis boutique selecionados da Zona Sul, também oferecemos suporte de deslocamento da equipe."
  },
  {
    question: "Como posso tirar dúvidas personalizadas e fazer o agendamento do meu Dia da noiva?",
    answer: "Para agendar uma pré-avaliação ou sanar dúvidas sobre os serviços inclusos (como café da manhã, massagem, manicure, pedicure, hidratação capilar, maquiagem e penteado), você pode clicar em qualquer botão de Call to Action nesta página para simular o orçamento do seu Dia da noiva e falar instantaneamente com a visagista Beatriz Bittencourt via WhatsApp comercial. Recomendamos o agendamento prévio com 6 a 12 meses de antecedência."
  }
];


