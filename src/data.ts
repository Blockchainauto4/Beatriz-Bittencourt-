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
    name: "Pacote Essencial: Preparação de Noiva & Penteado",
    price: 1500,
    priceString: "R$ 1.500",
    idealFor: "Noivas que desejam um ritual focado com maquiagem de alta definição e penteado sofisticado de alta fixação.",
    included: [
      "Teste prévio completo de penteado de noiva",
      "Penteado de noiva profissional no Grande Dia",
      "Maquiagem HD com cílios de alta qualidade e pele blindada resistente a lágrimas",
      "Consultoria de visagismo express para harmonização de véu, acessórios e decote"
    ],
    features: ["Penteados de Noiva", "Preparação de Noiva", "Dia da Noiva Slim"]
  },
  {
    id: "noiva-classico",
    name: "Pacote Clássico: Dia da Noiva Premium com Visagismo",
    price: 2600,
    priceString: "R$ 2.600",
    idealFor: "A escolha favorita para máximo conforto e tranquilidade completa. Inclui espaço reservado para relaxamento.",
    included: [
      "Consultoria completa de visagismo profissional para noivas (análise de linhas e arquétipo facial)",
      "Teste prévio com simulação real de penteados de noiva e maquiagem completa",
      "Spa facial biotecnológico e hidratação profunda pré-maquiagem no Grande Dia",
      "Penteado de noiva sofisticado personalizado + Maquiagem blindada ultra resistente",
      "Uso de camarim e espaço privativo boutique no ateliê para o Dia da Noiva (com buffet gourmet)",
      "Assessoria e suporte especializado para vestimenta, colocação de véu e grinalda"
    ],
    features: ["Penteados de Noiva", "Dia da Noiva", "Preparo de Noiva", "Visagismo"]
  },
  {
    id: "noiva-signature",
    name: "Pacote Signature: Experiência Completa & Book de Noivas",
    price: 3900,
    priceString: "R$ 3.900",
    idealFor: "A experiência absoluta de luxo e exclusividade. Perfeito para noivas que desejam registrar cada segundo do making of.",
    included: [
      "Todos os serviços do pacote clássico com privacidade total do ateliê",
      "Coordenação de camarim e facilitação de cenários para fotógrafos e vídeo (Book de Noiva)",
      "Acompanhamento personalizado da visagista Beatriz Bittencourt até a cerimônia (retoque final no altar)",
      "Acesso ao lounge VIP reservado do para mãe da noiva ou até 2 madrinhas",
      "Design de sobrancelha e análise de colorimetria express na semana do casamento"
    ],
    features: ["Book de Noivas", "Penteados de Noiva", "Preparação de Noiva", "Experiência de Luxo VIP"]
  }
];

export const BRIDAL_FAQS = [
  {
    question: "Qual o valor médio e formas de pagamento do Dia da Noiva?",
    answer: "Os valores dos nossos pacotes exclusivos com penteados de noiva e maquiagem blindada variam de R$ 1.500 a R$ 3.900. O preço é reflexo da personalização, do nível de exclusividade e da infraestrutura de camarim para o Book de Noivas. Dividimos o valor das parcelas em até 10x sem juros no cartão para facilitar o planejamento do casamento."
  },
  {
    question: "O que compreende a etapa de Preparação de Noiva?",
    answer: "A etapa de preparação de noiva envolve tratamentos para que a pele e o cabelo estejam radiantes. Inclui revitalização facial profunda para melhor fixação da maquiagem HD, higienização terapêutica dos fios, escova modeladora de alinhamento e cronograma de relaxamento para que você se sinta plena e descansada."
  },
  {
    question: "Como é estruturado o Teste de Penteado de Noiva?",
    answer: "O teste de penteados de noiva é realizado com antecedência sugerida de 30 a 60 dias da cerimônia de casamento. Analisamos todas as referências preferidas da noiva e testamos o penteado e a maquiagem até obter a composição perfeita de acordo com o decote do vestido, véu e acessórios."
  },
  {
    question: "Pode ser realizado o Book de Noivas fotográfico no Ateliê?",
    answer: "Sim! Nosso espaço físico boutique foi projetado com uma estética neutra chique e iluminação de camarim de alto padrão, ideal para capturar as fotos espontâneas e posadas do seu book de noivas de fabricação sofisticada. Sua equipe de fotos e filmagem terá infraestrutura e lanche gourmet garantidos."
  },
  {
    question: "Vocês atendem em domicílio ou no local da festa de casamento?",
    answer: "Atendemos de forma reservada no conforto do nosso ateliê boutique próximo ao Jardim Marajoara e Chácara Flora na Zona Sul de SP. Para noivas que adquiriram o pacote Signature de alta exclusividade, oferecemos suporte VIP para deslocamento até hotéis boutique e salões na capital."
  }
];


