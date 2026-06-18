import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: "consultoria-master",
    title: "Consultoria Master de Visagismo",
    description: "Análise facial aprofundada baseada em técnicas de Philip Hallawell, mapeamento cromático sazonal expansivo, definição do arquétipo de imagem pessoal, relatório digital de 30 páginas e recomendação exata para cabelo, maquiagem e acessórios.",
    price: "R$ 480",
    duration: "1h 30min",
    category: "Consultoria",
    tags: ["Formato de Rosto", "Linhas Faciais", "Relatório PDF"]
  },
  {
    id: "visagismo-integrated",
    title: "Visagismo Integrado para Corte & Cor",
    description: "Análise express direcionada para mudança de cabelo. Sessão conjunta em nosso ateliê com definição geométrica e comportamental, seguida da entrega do plano de direção visual para o seu cabeleireiro ou execução direta com nossos profissionais credenciados.",
    price: "R$ 290",
    duration: "45min",
    category: "Cabelo",
    tags: ["Direção de Corte", "Coloração Pessoal", "Manual Prático"]
  },
  {
    id: "colorimetria",
    title: "Análise de Colorimetria Pessoal Sazonal",
    description: "Mapeamento clássico de temperatura, valor e croma de sua pele por meio do método das doze estações. Descubra sua melhor cartela de cores para roupas, coloração capilar, joias e maquiagem com kit físico de cartelas incluído.",
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
  },
  {
    id: "noiva-visagista",
    title: "Experiência Noiva Visagista",
    description: "Consultoria completa de noivas englobando teste de adaptabilidade de coques, tiaras, decotes, iluminação da maquiagem conforme o horário da cerimônia, análise do temperamento do casal e adaptação perfeita com o vestido dos sonhos.",
    price: "R$ 1.200",
    duration: "Sessões Múltiplas",
    category: "Especial",
    tags: ["Casamento", "Guia de Vestido", "Teste Presencial"]
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
  address: "Rua Verbo Divino, 1045 - Suite 5B - Chácara Flora / Vila Sofia",
  city: "São Paulo - SP, CEP 04719-002",
  phone: "(11) 98754-0321",
  instagram: "@beatrizbittencourt.visagismo",
  email: "contato@beatrizbittencourt.com.br",
  hours: [
    { days: "Terça a Sexta-feira", time: "09:00h às 19:00h" },
    { days: "Sábados", time: "09:00h às 16:00h" },
    { days: "Domingo e Segunda", time: "Fechado" }
  ],
  coordinates: { lat: -23.6358, lng: -46.7032 } // Vila Sofia
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
    answer: "Sim! Se você está em São Paulo, especialmente na região da Chácara Flora, Vila Sofia, Alto da Boa Vista, Santo Amaro ou Panamby, nosso ateliê físico fica extremamente próximo, na Rua Verbo Divino, com estacionamento privativo e atendimento boutique reservado."
  },
  {
    question: "Preciso ir sem maquiagem para a consulta presencial?",
    answer: "Sim. Para a colorimetria presencial e análise de linhas faciais ideais, solicitamos que venha de rosto limpo para que a pele neutra reflita os tecidos de draping sazonal com fidelidade perfeita."
  }
];
