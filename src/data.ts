import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: "consultoria-master",
    title: "Consultoria Master: Cabeleireira & Visagista perto de mim",
    description: "Análise facial detalhada baseada no método Philip Hallawell, mapeamento cromático sazonal expansivo e definição do arquétipo de imagem. Ideal para quem busca um atendimento autoral de cabeleireira, visagista perto de mim na Zona Sul de São Paulo com certificação e relatório digital completo de 30 páginas.",
    price: "R$ 480",
    duration: "1h 30min",
    category: "Consultoria",
    tags: ["Formato de Rosto", "Linhas Faciais", "Cabeleireira Visagista"]
  },
  {
    id: "visagismo-integrated",
    title: "Cortes de cabelo feminino perto de mim • Visagismo",
    description: "Definição geométrica e comportamental para cortes de cabelo feminino perto de mim. Sessão presencial de direção visual em nosso ateliê perto de Vila Sofia e Jardim Marajoara para desenhar a moldura perfeita que valoriza sua expressão natural e beleza singular.",
    price: "R$ 290",
    duration: "45min",
    category: "Cabelos",
    tags: ["Cortes Femininos", "Mudança de Visual", "Design de Fios"]
  },
  {
    id: "aplicacao-mechas",
    title: "Aplicação de mechas perto de mim com Visagismo",
    description: "Mapeamento das mechas de contorno facial personalizadas com coloração premium e proteção capilar. Se você procura aplicação de mechas perto de mim especializada em iluminar os traços do temperamento, nossa técnica une a colorimetria com o design facial para resultados sublimes.",
    price: "R$ 450",
    duration: "2h 30min",
    category: "Coloração",
    tags: ["Mechas Criativas", "Contorno Iluminado", "Colorimetria"]
  },
  {
    id: "colorimetria",
    title: "Análise de Colorimetria Pessoal Sazonal",
    description: "Mapeamento clássico de temperatura, valor e croma de sua pele por meio do método das doze estações. Descubra sua melhor cartela de cores para roupas, cores de maquiagem e tintura de mechas capilares com kit físico incluído.",
    price: "R$ 350",
    duration: "1h",
    category: "Colorimetria",
    tags: ["Estação Cromática", "Roupas e Cores", "Paleta Digital"]
  },
  {
    id: "imagem-corporativa",
    title: "Visagismo de Imagem & Marca Pessoal",
    description: "Específico para executivos, palestrantes e profissionais que necessitam alinhar sua assinatura de estilo e gestual com seu público-alvo. Otimização de retratos corporativos no LinkedIn, vestimenta de autoridade e suavização de traços na comunicação.",
    price: "R$ 680",
    duration: "2h",
    category: "Corporativo",
    tags: ["LinkedIn", "Arquétipo de Poder", "Posicionamento"]
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
    service: "Consultoria Master de Visagismo & Corte",
    rating: 5,
    text: "Moro a poucos metros do ateliê na Chácara Flora e estava procurando uma visagista perto de mim de confiança. A consultoria da Beatriz superou tudo! O relatório de 30 páginas e o novo corte adaptado ao meu temperamento colérico elevaram absurdamente minha autoimagem. O atendimento boutique é impecável e privativo.",
    source: "Google Reviews",
    date: "Junho 2026"
  },
  {
    id: "t2",
    name: "Rodrigo Mendonça Prado",
    role: "Advogado Tributarista",
    location: "Jardim Marajoara (a 200m do ateliê)",
    service: "Barbearia Premium & Harmonização de Imagem",
    rating: 5,
    text: "Sempre sofri para achar uma barbearia perto de mim que fizesse design de barba visagista de verdade. Como o ateliê fica a menos de 200m da Chapel School, fica muito fácil passar lá após deixar as crianças. A experiência de corte de barba e cabelo com análise de linhas faciais e simetria é incomparável. Sem fila, sem barulho, atendimento personalizado.",
    source: "Google Reviews",
    date: "Maio 2026"
  },
  {
    id: "t3",
    name: "Camila F. Vasconcellos",
    role: "Arquiteta & Designer",
    location: "Vila Sofia (a 450m do ateliê)",
    service: "Aplicação de Mechas Capilares com Colorimetria",
    rating: 5,
    text: "Fui ao ateliê fazer mechas de contorno facial logo após indicação de uma vizinha da Escola Suíço-Brasileira. Incrível como o mapeamento cromático de 12 estações acerta as cores que nos valorizam. As mechas ficaram super naturais e iluminaram meu rosto. Encontrar colorimetria e cortes de cabelo feminino perto de mim com essa qualidade na Zona Sul é precioso.",
    source: "Google Reviews",
    date: "Junho 2026"
  },
  {
    id: "t4",
    name: "Dr. Gustavo Henrique Neves",
    role: "Médico Cardiologista",
    location: "Alto da Boa Vista (a 1.2 km)",
    service: "Barber Shop & Visagismo Masculino",
    rating: 5,
    text: "O atendimento com hora marcada é o diferencial absoluto. O estúdio fica muito perto de mim aqui no Alto da Boa Vista, a rota é direta e rápida. O design de barba com visagismo me deu um visual bem mais sério e confiável para os congressos. Indico para todo mundo que quer fugir do agito de salões barulhentos.",
    source: "Recomendação Direta",
    date: "Abril 2026"
  }
];

