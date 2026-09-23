import { Service } from "./types";

export const SERVICES: Service[] = [
  // ✂️ CORTE & FINALIZAÇÃO
  {
    id: "corte-escova",
    title: "Corte Feminino + Escova Modelada",
    description: "Corte personalizado feito sob medida para valorizar a sua beleza e o formato do seu rosto, com lavagem relaxante e escova modelada impecável com movimento e brilho.",
    price: "R$ 490",
    duration: "1h",
    category: "Corte & Finalização",
    protocol: "Avaliação do visual + lavagem especial + corte + escova",
    tags: ["Corte Feminino", "Escova Inclusa", "Personalizado", "Perto de Mim"],
    isPopular: true
  },
  {
    id: "hidratacao-nutricao-escova",
    title: "Hidratação ou Nutrição Profunda + Escova",
    description: "Tratamento completo para eliminar o ressecamento, devolver a maciez instantânea e o toque sedoso aos fios, finalizado com escova modelada.",
    price: "R$ 299",
    duration: "1h",
    category: "Corte & Finalização",
    protocol: "Diagnóstico dos fios + máscara intensiva + escova modelada",
    tags: ["Maciez Instantânea", "Brilho Intenso", "Escova Inclusa", "Anti-Ressecamento"]
  },
  {
    id: "reconstrucao-truss-escova",
    title: "Reconstrução TRUSS + Escova",
    description: "Tratamento reconstrutor com a renomada linha TRUSS para recuperar cabelos danificados ou quebradiços, devolvendo força, balanço e vitalidade aos fios.",
    price: "R$ 299",
    duration: "1h",
    category: "Corte & Finalização",
    protocol: "Recuperação TRUSS + blindagem + escova modelada",
    tags: ["Linha TRUSS", "Recuperação de Fios", "Força e Brilho", "Escova Inclusa"],
    isPopular: true
  },

  // 🎨 COLORAÇÃO
  {
    id: "coloracao-escova",
    title: "Coloração Completa + Escova",
    description: "Aplicação de cor com cobertura 100% uniforme dos fios brancos ou renovação do seu tom favorito com reflexos luminosos, acompanhada de escova profissional.",
    price: "R$ 399",
    duration: "1h 30min",
    category: "Coloração",
    protocol: "Aplicação da cor + higienização protetora + escova",
    tags: ["Cobertura Perfeita", "Cor Radiante", "Brilho", "Escova Inclusa"]
  },
  {
    id: "coloracao-personalizada",
    title: "Coloração Personalizada com Tratamento",
    description: "Experiência completa de cor: escolha da tonalidade perfeita para realçar o seu tom de pele, aplicação cuidadosa, tratamento protetor pós-cor e escova finalizada.",
    price: "A partir de R$ 490",
    duration: "2h",
    category: "Coloração",
    protocol: "Diagnóstico + coloração + tratamento protetor + finalização",
    tags: ["Cor Sob Medida", "Fios Protegidos", "Tratamento Incluso", "Mais Pedido"],
    isPopular: true
  },

  // ✨ BLOND & MEchas
  {
    id: "mechas-personalizadas",
    title: "Mechas Personalizadas (Loiro ou Morena Iluminada)",
    description: "Iluminação feita sob medida para o seu estilo (morena iluminada, loiro perolado, dourado, mel ou baunilha). Clareamento seguro, tratamento protetor, tonalização perfeita e finalização.",
    price: "A partir de R$ 890",
    duration: "3h",
    category: "Blond & Mechas",
    protocol: "Diagnóstico + mechas sob medida + tratamento + tonalização + finalização",
    tags: ["Loiro Saudável", "Morena Iluminada", "Tonalização Inclusa", "Sem Danos"],
    isPopular: true
  },
  {
    id: "mechas-tratamento-botox",
    title: "Mechas Iluminadas + Tratamento ou Botox",
    description: "O combo ideal para clarear os fios e já sair com o cabelo totalmente hidratado, sem frizz e com as pontas seladas e macias.",
    price: "A partir de R$ 950",
    duration: "3h 30min",
    category: "Blond & Mechas",
    protocol: "Mechas completas + tratamento disciplinante ou botox + escova",
    tags: ["Clareamento Seguro", "Sem Frizz", "Pontas Saudáveis", "Alta Durabilidade"]
  },
  {
    id: "mechas-raiz",
    title: "Retoque de Mechas na Raiz (Até 3 meses)",
    description: "Retoque suave para disfarçar o crescimento da raiz de até 3 meses, mantendo a luminosidade do loiro contínua e sem marcações. Inclui tratamento e tonalização.",
    price: "R$ 750",
    duration: "2h",
    category: "Blond & Mechas",
    protocol: "Retoque de raiz + tratamento + tonalização da cor + escova",
    tags: ["Retoque Raiz", "Loiro Impecável", "Sem Marcação", "Até 3 Meses"]
  },
  {
    id: "blond-experience",
    title: "BLOND EXPERIENCE (Transformação Completa)",
    description: "O pacote completo para transformar o seu loiro com valor promocional por tempo limitado (de R$ 1.500 por R$ 1.200). Inclui mechas completas com protetor contra quebra, corte feminino, tonalização na cor desejada, tratamento profundo e escova luxuosa.",
    price: "R$ 1.200",
    originalPrice: "R$ 1.500",
    isPromo: true,
    duration: "4h",
    category: "Blond & Mechas",
    protocol: "Mechas completas + protetor anti-quebra + corte + tonalização + tratamento + escova",
    tags: ["De R$ 1.500 por R$ 1.200", "Promoção Especial", "Corte Incluso", "Transformação Total"],
    isPopular: true
  },

  // 💎 TRANSFORMAÇÃO & ALINHAMENTO
  {
    id: "progressiva",
    title: "Escova Progressiva Orgânica (Zero Formol)",
    description: "Alisamento suave e duradouro com fórmula 100% orgânica, sem formol, sem cheiro forte e sem ardor nos olhos. Deixa o cabelo alinhado, macio, com volume reduzido e muito brilho.",
    price: "R$ 650",
    duration: "2h 30min",
    category: "Transformação",
    protocol: "Aplicação orgânica + alinhamento térmico + finalização espelhada",
    tags: ["Zero Formol", "Sem Cheiro Forte", "Liso Natural", "Redução de Volume"],
    isPopular: true
  },
  {
    id: "botox-capilar",
    title: "Botox Capilar Disciplinante",
    description: "Tratamento que reduz o frizz, alinha os fios e devolve a massa capilar sem alisar artificialmente. Ideal para quem quer cabelos domados, com brilho e movimento natural.",
    price: "R$ 499",
    duration: "1h 30min",
    category: "Transformação",
    protocol: "Higienização + aplicação disciplinante + selagem com brilho",
    tags: ["Anti-Frizz", "Brilho Intenso", "Movimento Natural", "Sem Alisar Demais"],
    isPopular: true
  },
  {
    id: "progressiva-tratamento",
    title: "Progressiva Orgânica + Tratamento Fortalecedor",
    description: "Protocolo duplo para quem deseja alinhamento e máxima hidratação no mesmo dia. A Beatriz avalia o seu cabelo para indicar o melhor cuidado para os seus fios.",
    price: "Consulte avaliação",
    duration: "2h 30min",
    category: "Transformação",
    protocol: "Avaliação prévia gratuita + protocolo personalizado",
    tags: ["Alinhamento e Saúde", "Cuidado Sob Medida", "Avaliação Gratuita"]
  },

  // 🌿 TRATAMENTOS CAPILARES
  {
    id: "blond-angel-escova",
    title: "BLOND ANGEL Iluminador + Escova",
    description: "Tratamento revitalizante para cabelos loiros, grisalhos ou com luzes. Elimina o tom amarelado indesejado, devolve a maciez e finaliza com escova modelada.",
    price: "R$ 280",
    duration: "1h",
    category: "Tratamentos",
    protocol: "Lavagem desamareladora + máscara nutritiva + escova modelada",
    tags: ["Desamarelador", "Loiro Radiante", "Brilho Espelhado", "Escova Inclusa"]
  },
  {
    id: "truss-experience-escova",
    title: "TRUSS Experience + Escova Modelada",
    description: "Experiência completa com os produtos premium da TRUSS para nutrir, restaurar a elasticidade e trazer brilho intenso aos cabelos com escova inclusa.",
    price: "R$ 299",
    duration: "1h 15min",
    category: "Tratamentos",
    protocol: "Terapia TRUSS completa + máscara concentrada + escova",
    tags: ["Linha TRUSS", "Nutrição Intensa", "Toque Aveludado", "Escova Inclusa"],
    isPopular: true
  },
  {
    id: "loiros-poderosos-ozonio",
    title: "Tratamento Loiros Poderosos + Massagem Capilar",
    description: "Tratamento especial para recuperar cabelos claros, com máscara ultra-hidratante, vapor suavizante e massagem relaxante no couro cabeludo.",
    price: "A partir de R$ 250",
    duration: "1h",
    category: "Tratamentos",
    protocol: "Higienização + vapor hidratante + massagem relaxante + escova",
    tags: ["Relaxamento", "Hidratação Máxima", "Cuidado Especial", "Massagem Inclusa"]
  },

  // 💄 NOIVAS, MADRINHAS & EVENTOS
  {
    id: "pacote-noiva-servico-prova",
    title: "Pacote Noiva Completo (Grande Dia + Prova Prévia)",
    description: "A opção mais tranquila e recomendada para noivas: inclui o ensaio prévio completo de cabelo e maquiagem semanas antes, mais a produção oficial no dia do casamento.",
    price: "R$ 1.600",
    duration: "4h 30min (2 etapas)",
    category: "Noivas & Eventos",
    protocol: "1ª Etapa: Prova de penteado e maquiagem • 2ª Etapa: Produção completa no Grande Dia",
    tags: ["Sem Surpresas", "Prova Inclusa", "Grande Dia", "Noiva Tranquila"],
    isPopular: true
  },
  {
    id: "make-penteado-noiva",
    title: "Make + Penteado de Noiva (Grande Dia)",
    description: "Produção exclusiva no dia do casamento: penteado duradouro escolhido para harmonizar com seu vestido e grinalda, e maquiagem à prova d'água e lágrimas.",
    price: "R$ 1.200",
    duration: "2h 30min",
    category: "Noivas & Eventos",
    protocol: "Preparação de pele e cabelo + maquiagem blindada + penteado + fixação de véu",
    tags: ["Grande Dia", "À Prova de Lágrimas", "Penteado Firme", "Camarim Exclusivo"],
    isPopular: true
  },
  {
    id: "prova-make-penteado",
    title: "Prova de Make + Penteado de Noiva (Avulsa)",
    description: "Ensaio técnico realizado semanas antes para você testar opções de penteados e maquiagens com calma, tirar fotos e aprovar cada detalhe com antecedência.",
    price: "R$ 500",
    duration: "2h",
    category: "Noivas & Eventos",
    protocol: "Teste real de penteado + teste completo de maquiagem + fotos para comparação",
    tags: ["Ensaio Prévia", "Tranquilidade", "Teste Real", "Aprovação Antecipada"]
  },
  {
    id: "make-penteado-madrinha",
    title: "Make + Penteado — Madrinha",
    description: "Produção impecável para madrinhas brilharem no altar: maquiagem social com cílios e penteado sofisticado (ondas, coque ou trança) com alta durabilidade para a festa inteira.",
    price: "R$ 650",
    duration: "1h 45min",
    category: "Noivas & Eventos",
    protocol: "Maquiagem social completa com cílios + penteado elaborado + fixação",
    tags: ["Madrinhas", "Make com Cílios", "Penteado Elegante", "Dura a Festa Toda"]
  },
  {
    id: "make-penteado-mae",
    title: "Make + Penteado — Mãe da Noiva ou Noivo",
    description: "Atendimento dedicado e carinhoso para a mãe da noiva ou noivo: maquiagem suave que valoriza a pele com naturalidade e penteado clássico elegante e confortável.",
    price: "R$ 600",
    duration: "1h 45min",
    category: "Noivas & Eventos",
    protocol: "Maquiagem iluminadora para pele madura + penteado confortável e elegante",
    tags: ["Mãe da Noiva", "Pele Madura", "Naturalidade", "Elegância"]
  },
  {
    id: "make-madrinha-mae",
    title: "Maquiagem Social Completa (Madrinha / Mãe / Convidada)",
    description: "Maquiagem profissional duradoura com preparação de pele, contorno suave, sombra esfumada e cílios postiços para você curtir a festa sem retoques.",
    price: "R$ 350",
    duration: "1h",
    category: "Noivas & Eventos",
    protocol: "Preparação de pele + make social + aplicação de cílios",
    tags: ["Make com Cílios", "Alta Fixação", "Convidadas", "Madrinhas"]
  },
  {
    id: "penteado-madrinha-mae",
    title: "Penteado Social Elaborado (Madrinha / Mãe / Convidada)",
    description: "Penteado sofisticado (coque elegante, semi-preso com ondas ou trança estilizada) com produtos de fixação para se manter perfeito durante todo o evento.",
    price: "R$ 350",
    duration: "1h",
    category: "Noivas & Eventos",
    protocol: "Preparação dos fios + modelagem do penteado + fixação prolongada",
    tags: ["Coque Elegante", "Ondas e Tranças", "Penteado Firme", "Eventos"]
  },
  {
    id: "escova-convidadas",
    title: "Escova Modelada para Convidadas",
    description: "Lavagem relaxante com produtos profissionais e escova modelada ou com ondas leves para deixar seu cabelo lindo e alinhado para a festa.",
    price: "R$ 180",
    duration: "45min",
    category: "Noivas & Eventos",
    protocol: "Lavagem relaxante + escova modelada ou babyliss leve",
    tags: ["Escova Rápida", "Brilho e Movimento", "Convidadas", "Festas"]
  },

  // 💈 CORTE MASCULINO
  {
    id: "corte-masculino-barba",
    title: "Corte Masculino & Alinhamento de Barba",
    description: "Corte masculino moderno com acabamento limpo, alinhamento de barba e finalização rápida e prática em ambiente reservado.",
    price: "R$ 150",
    duration: "45min",
    category: "Barbearia",
    protocol: "Corte de cabelo + acabamento de barba + lavagem rápida",
    tags: ["Corte Masculino", "Barba Alinhada", "Ambiente Privativo", "Praticidade"]
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
  salonName: "The Place Salon - Beatriz Bittencourt",
  subtitle: "VISAGISMO • COLORAÇÃO • BLOND • TRATAMENTOS",
  tagline: "CUIDADO, TÉCNICA E PERSONALIZAÇÃO PARA REALÇAR A SUA BELEZA.",
  paymentTerms: "Aceitamos cartões de crédito em até 3x.",
  attendanceNote: "São Paulo • Atendimento personalizado • Agendamentos pelo WhatsApp",
  address: "Rua Dr. Ferreira Lopes, 703 - Piso Térreo - Jardim Marajoara",
  streetAddress: "Rua Dr. Ferreira Lopes, 703",
  district: "Jardim Marajoara",
  city: "São Paulo - SP, CEP 04671-011",
  postalCode: "04671-011",
  floor: "Piso Térreo (Floor 0)",
  landmarkReference: "Próximo à Av. Washington Luís, Escola Suíço-Brasileira & Smart Fit",
  phone: "(11) 99227-9655",
  whatsapp: "5511992279655",
  googleRating: 4.7,
  googleReviewsCount: 235,
  instagram: "@beatrizbittencourt.visagismo",
  email: "contato@beatrizbittencourt.com.br",
  coverageRadius: "Raio de pelo menos 5 km",
  seoLocalTitle: "Localização & Cobertura Geográfica Zona Sul SP",
  seoProfissionalTitle: "Atendimento de Excelência: Visagismo Autoral & Alta Cabeleireira Feminina",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Place+Salon+Rua+Dr.+Ferreira+Lopes,+703+-+Jardim+Marajoara,+S%C3%A3o+Paulo+-+SP,+04671-011",
  wazeUrl: "https://waze.com/ul?q=Rua%20Dr.%20Ferreira%20Lopes%20703%20Jardim%20Marajoara%20Sao%20Paulo",
  hours: [
    { days: "Terça a Sexta-feira", time: "09:00h às 19:00h" },
    { days: "Sábados", time: "09:00h às 16:00h" },
    { days: "Domingo e Segunda", time: "Fechado" }
  ],
  coordinates: { lat: -23.6429, lng: -46.6974 } // Jardim Marajoara / Chácara Flora boundary
};

export const FAQ = [
  {
    question: "Como funciona o atendimento com a Beatriz Bittencourt?",
    answer: "O atendimento é exclusivo, com hora marcada e foco total em você. Antes de iniciar qualquer procedimento, a Beatriz conversa com você para entender seus desejos, estilo de vida e o que melhor harmoniza com o formato do seu rosto e seu cabelo."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartões de crédito em até 3x, cartão de débito e PIX (com desconto especial à vista). Todas as condições são transparentes e informadas previamente."
  },
  {
    question: "A escova progressiva tem formol ou cheiro forte?",
    answer: "Não! A nossa escova progressiva (R$ 650) é 100% orgânica e sem formol. Ela proporciona cabelos alinhados, reduz o volume e dá brilho espelhado com total conforto, sem ardor e sem cheiro forte."
  },
  {
    question: "Qual a diferença entre a Progressiva e o Botox Capilar?",
    answer: "A progressiva (R$ 650) alinha e reduz intensamente o volume do cabelo. O Botox Capilar (R$ 499) é um tratamento disciplinante que hidrata, elimina o frizz e controla o volume sem alisar em excesso, mantendo o movimento natural dos fios."
  },
  {
    question: "O que vem no pacote promocional BLOND EXPERIENCE?",
    answer: "O BLOND EXPERIENCE está com valor promocional de R$ 1.500 por R$ 1.200 (tempo limitado). Ele inclui mechas completas com protetor contra quebra, corte feminino, tonalização para a cor desejada, tratamento profundo e escova de finalização."
  },
  {
    question: "Como funciona a produção para Noivas, Madrinhas e Mães?",
    answer: "Temos pacotes completos para o Dia da Noiva (com ou sem prova antecipada), além de produções para madrinhas (R$ 650), mãe da noiva (R$ 600) e escova para convidadas (R$ 180). O salão conta com camarim aconchegante para fotos e tranquilidade."
  },
  {
    question: "Onde fica o salão e como chegar?",
    answer: "Ficamos na Rua Dr. Ferreira Lopes, 703 - Piso Térreo, no Jardim Marajoara (bem pertinho da Chácara Flora e Vila Sofia), Zona Sul de São Paulo. O local possui fácil acesso e vagas de estacionamento para o seu conforto."
  },
  {
    question: "Como agendar um horário?",
    answer: "Você pode agendar diretamente pelo botão de WhatsApp (11 99227-9655) ou preenchendo o formulário de agendamento aqui no site. Confirmamos o seu horário rapidamente!"
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
    landmark: "Colégio Chapel / Chapel School (Chácara Flora)",
    distance: "A apenas 200m",
    transport: "2 min a pé 🚶‍♀️",
    context: "Siga pela Rua Dr. Ferreira Lopes. A melhor opção de cabeleireira feminina perto de mim na Chácara Flora com cortes femininos e atendimento privativo premium e seguro.",
    seoKeywords: ["Chácara Flora perto de mim", "Corte feminino próximo a mim Chácara Flora", "Cabeleireira Chácara Flora perto"]
  },
  {
    landmark: "Escola Suíço-Brasileira (Vila Sofia)",
    distance: "A 450m",
    transport: "5 min a pé 🚶‍♂️",
    context: "Perfeito para quem busca cabeleireira de coloração perto de mim em Vila Sofia para iluminação capilar, mechas e cortes femininos perto de mim de alta precisão.",
    seoKeywords: ["Vila Sofia perto de mim", "Corte de cabelo próximo a mim Vila Sofia", "Cabeleireira Vila Sofia perto"]
  },
  {
    landmark: "Pão de Açúcar (Jardim Marajoara)",
    distance: "A 300m",
    transport: "3 min a pé 🚶",
    context: "No centro do bairro, somos a referência de cabeleireira feminina perto de mim no Jardim Marajoara, oferecendo coloração avançada e cortes femininos personalizados.",
    seoKeywords: ["Jardim Marajoara perto de mim", "Corte de cabelo feminino próximo a mim Marajoara", "Cabeleireiro Marajoara perto"]
  },
  {
    landmark: "Estação Alto da Boa Vista (Metrô Linha 5-Lilás)",
    distance: "A 1.2 km",
    transport: "5 min de carro 🚗",
    context: "Se você pesquisa por cabeleireira de coloração perto de mim no Alto da Boa Vista, desfrute de um ambiente de salão de beleza residencial projetado para cortes femininos e renovação de imagem.",
    seoKeywords: ["Alto da Boa Vista perto de mim", "Corte feminino próximo a mim Alto da Boa Vista", "Salão Alto da Boa Vista perto"]
  },
  {
    landmark: "Av. Vereador José Diniz (Brooklin)",
    distance: "A 2.2 km",
    transport: "8 min de carro 🚗",
    context: "Atendemos como a principal cabeleireira feminina perto de mim no Brooklin com exclusividade e hora marcada para cortes femininos perto de mim e mechas autorais.",
    seoKeywords: ["Brooklin perto de mim", "Cabeleireira feminina próximo a mim Brooklin", "Corte de cabelo Brooklin perto"]
  },
  {
    landmark: "Rua Vieira de Morais (Campo Belo)",
    distance: "A 2.5 km",
    transport: "9 min de carro 🚗",
    context: "Procurando por cabeleireira de coloração perto de mim no Campo Belo? Atendimento de altíssimo padrão com visagismo para cortes femininos e mechas que realçam sua beleza.",
    seoKeywords: ["Campo Belo perto de mim", "Corte de cabelo próximo a mim Campo Belo", "Cabeleireira Campo Belo perto"]
  },
  {
    landmark: "Largo Treze & Av. Adolfo Pinheiro (Santo Amaro)",
    distance: "A 1.5 km",
    transport: "6 min de carro 🚗",
    context: "Próximo à Av. Washington Luís, somos a melhor escolha de cabeleireira feminina perto de mim em Santo Amaro para cortes femininos perto de mim e coloração segura.",
    seoKeywords: ["Santo Amaro perto de mim", "Cabeleireiro residencial próximo a mim Santo Amaro", "Corte feminino Santo Amaro perto"]
  },
  {
    landmark: "Parque Cordeiro (Chácara Monte Alegre)",
    distance: "A 800m",
    transport: "3 min de carro 🚗",
    context: "Uma experiência de beleza acolhedora. Venha à cabeleireira de coloração perto de mim na Chácara Monte Alegre com atendimento VIP individualizado.",
    seoKeywords: ["Chácara Monte Alegre perto de mim", "Corte de cabelo próximo a mim Monte Alegre", "Cabeleireira Monte Alegre perto"]
  },
  {
    landmark: "Av. Ibirapuera & Bairro de Moema",
    distance: "A 3.8 km",
    transport: "12 min de carro 🚗",
    context: "Para quem busca cabeleireira feminina perto de mim em Moema, oferecemos um refúgio acolhedor com especialista em cortes femininos perto de mim por Beatriz Bittencourt.",
    seoKeywords: ["Moema perto de mim", "Corte feminino próximo a mim Moema", "Cabeleireira Moema perto"]
  },
  {
    landmark: "Avenida Santa Catarina (Vila Mascote)",
    distance: "A 1.8 km",
    transport: "6 min de carro 🚗",
    context: "Se você quer uma cabeleireira de coloração perto de mim na Vila Mascote para cortes femininos autorais e mechas com proteção capilar, aproveite nosso salão de beleza.",
    seoKeywords: ["Vila Mascote perto de mim", "Cabeleireira feminina próximo a mim Vila Mascote", "Corte de cabelo Vila Mascote perto"]
  },
  {
    landmark: "Parque do Cordeiro (Vila Santa Catarina)",
    distance: "A 1.4 km",
    transport: "5 min de carro 🚗",
    context: "Excelente localização para quem pesquisa cabeleireira feminina perto de mim em Vila Santa Catarina para renovar o visual com cortes femininos de alto padrão.",
    seoKeywords: ["Vila Santa Catarina perto de mim", "Corte feminino próximo a mim Vila Santa Catarina", "Salão Vila Santa Catarina perto"]
  },
  {
    landmark: "Avenida Nações Unidas (Jurubatuba)",
    distance: "A 2.9 km",
    transport: "10 min de carro 🚗",
    context: "Fácil acesso para quem busca cabeleireira de coloração perto de mim em Jurubatuba. Agende cortes femininos e tratamentos capilares no seu horário ideal.",
    seoKeywords: ["Jurubatuba perto de mim", "Cabeleireira próximo a mim Jurubatuba", "Corte de cabelo Jurubatuba perto"]
  },
  {
    landmark: "Avenida Interlagos & Represa",
    distance: "A 3.5 km",
    transport: "11 min de carro 🚗",
    context: "Nosso espaço é a cabeleireira feminina perto de mim em Interlagos ideal para quem preza por segurança em cortes femininos perto de mim e coloração perfeccionista.",
    seoKeywords: ["Interlagos perto de mim", "Corte feminino próximo a mim Interlagos", "Cabeleireira Interlagos perto"]
  },
  {
    landmark: "Ponte do Socorro & Bairro Socorro",
    distance: "A 2.7 km",
    transport: "9 min de carro 🚗",
    context: "Procurando cabeleireira de coloração perto de mim no Socorro? Conte com nosso atendimento premium para cortes femininos com visagismo físico de ponta.",
    seoKeywords: ["Socorro perto de mim", "Cabeleireira próximo a mim Socorro", "Corte de cabelo Socorro perto"]
  },
  {
    landmark: "Clube de Campo Castelo (Veleiros)",
    distance: "A 3.2 km",
    transport: "10 min de carro 🚗",
    context: "Para quem quer cabeleireira feminina perto de mim em Veleiros com cortes femininos personalizados e ambiente privativo.",
    seoKeywords: ["Veleiros perto de mim", "Corte feminino próximo a mim Veleiros", "Cabeleireira Veleiros perto"]
  },
  {
    landmark: "Avenida Vereador João de Luca (Jardim Prudência)",
    distance: "A 1.6 km",
    transport: "6 min de carro 🚗",
    context: "A cabeleireira de coloração perto de mim no Jardim Prudência perfeita para cortes femininos perto de mim, mechas e renovação da fibra com cosméticos importados.",
    seoKeywords: ["Jardim Prudência perto de mim", "Cabeleireira próximo a mim Jardim Prudência", "Corte de cabelo Jardim Prudência perto"]
  },
  {
    landmark: "Parque Burle Marx (Panamby)",
    distance: "A 4.5 km",
    transport: "15 min de carro 🚗",
    context: "Para quem valoriza privacidade e busca cabeleireira feminina perto de mim no Panamby com especialidade em cortes femininos e coloração de alto nível.",
    seoKeywords: ["Panamby perto de mim", "Corte feminino próximo a mim Panamby", "Cabeleireira Panamby perto"]
  },
  {
    landmark: "Shopping Jardim Sul (Vila Andrade)",
    distance: "A 4.2 km",
    transport: "14 min de carro 🚗",
    context: "Encontre a tranquilidade na cabeleireira de coloração perto de mim na Vila Andrade com atendimento VIP focado em cortes femininos perto de mim e mechas.",
    seoKeywords: ["Vila Andrade perto de mim", "Cabeleireira próximo a mim Vila Andrade", "Corte de cabelo Vila Andrade perto"]
  },
  {
    landmark: "Ponte Estaiada Octávio Frias (Real Parque)",
    distance: "A 4.8 km",
    transport: "15 min de carro 🚗",
    context: "Atendemos clientes exigentes como a melhor cabeleireira feminina perto de mim no Real Parque para cortes femininos autorais e visagismo de imagem.",
    seoKeywords: ["Real Parque perto de mim", "Corte feminino próximo a mim Real Parque", "Cabeleireira Real Parque perto"]
  },
  {
    landmark: "Clube Hípico de Santo Amaro (Vila Cruzeiro)",
    distance: "A 1.3 km",
    transport: "5 min de carro 🚗",
    context: "A opção definitiva para quem busca cabeleireira de coloração perto de mim na Vila Cruzeiro para transformar os fios com cortes femininos impecáveis.",
    seoKeywords: ["Vila Cruzeiro perto de mim", "Cabeleireira próximo a mim Vila Cruzeiro", "Corte de cabelo Vila Cruzeiro perto"]
  }
];

export interface NeighborhoodSeoTerms {
  district: string;
  distanceInfo: string;
  terms: string[];
}

export const CITY_SEO_TERMS_LIST: { category: string; terms: string[] }[] = [
  {
    category: "Termos Mais Buscados por Clientes (Salão de Beleza & Proximidade)",
    terms: [
      "Salão de beleza perto de mim",
      "Corte de cabelo feminino perto de mim",
      "Cabeleireira perto de mim",
      "Salão de beleza no Jardim Marajoara",
      "Escova progressiva perto de mim",
      "Botox capilar perto de mim",
      "Mechas loiras perto de mim",
      "Morena iluminada perto de mim",
      "Dia da noiva zona sul SP",
      "Penteado para festa perto de mim",
      "Hidratação capilar perto de mim",
      "Rua Doutor Ferreira Lopes, 703"
    ]
  },
  {
    category: "Cortes Femininos Mais Buscados por Clientes",
    terms: [
      "corte de cabelo feminino perto de mim",
      "corte de cabelo feminino em camadas perto de mim",
      "corte feminino long bob perto de mim",
      "corte chanel de bico perto de mim",
      "corte de pontas feminino perto de mim",
      "corte feminino com visagismo perto de mim",
      "corte de cabelo feminino Jardim Marajoara"
    ]
  },
  {
    category: "Abreviações Frequentes de Busca ('p/ mim', 'p mim', 'prox a mim', 'perto')",
    terms: [
      "corte de cabelo feminino p/ mim São Paulo",
      "corte feminino p/ mim SP",
      "corte de cabelo feminino p/ mim SP",
      "corte de cabelo feminino p mim Sao Paulo",
      "cabeleireira p/ mim São Paulo",
      "cabeleireira p mim SP",
      "salão de beleza p/ mim São Paulo SP",
      "corte de cabelo feminino prox a mim SP",
      "corte de cabelo feminino pt de mim São Paulo",
      "corte de cabelo feminino perto SP",
      "cabeleireira perto São Paulo"
    ]
  },
  {
    category: "Serviços Abreviados & Combos de Corte ('corte fem', 'corte + escova', 'corte + hidratação')",
    terms: [
      "corte fem perto de mim SP",
      "corte fem p/ mim São Paulo",
      "corte + escova perto de mim São Paulo",
      "corte + escova p/ mim SP",
      "corte + hidratação perto de mim SP",
      "corte + hidratação p/ mim São Paulo",
      "corte + mechas perto de mim SP",
      "corte + mechas p/ mim São Paulo",
      "corte + coloração perto de mim SP",
      "visagismo + corte perto de mim São Paulo SP"
    ]
  },
  {
    category: "Termos Populares & Informais (Como as clientes buscam no dia a dia)",
    terms: [
      "cabeleireira de mulher perto de mim São Paulo",
      "onde cortar o cabelo feminino perto de mim SP",
      "salão para cortar cabelo de mulher perto de mim",
      "cabeleireira boa para corte perto de mim SP",
      "corte de pontas feminino perto de mim São Paulo",
      "corte de franja perto de mim SP",
      "salão de cabeleireiro feminino perto de mim SP",
      "cabeleireiro residencial perto de mim São Paulo",
      "salão de beleza perto de mim aberto hoje SP"
    ]
  },
  {
    category: "Termos Profissionais & Especializados de Corte",
    terms: [
      "visagista para corte de cabelo feminino São Paulo",
      "corte feminino com visagismo perto de mim SP",
      "corte de cabelo feminino autoral São Paulo",
      "especialista em corte de cabelo feminino SP",
      "salão de beleza de corte feminino em São Paulo SP",
      "consultoria de visagismo e corte feminino SP",
      "corte para transição capilar perto de mim SP"
    ]
  },
  {
    category: "Estilos de Corte Feminino Mais Pesquisados",
    terms: [
      "corte de cabelo feminino em camadas perto de mim SP",
      "corte long bob feminino perto de mim São Paulo",
      "corte chanel de bico perto de mim SP",
      "corte pixie feminino perto de mim São Paulo",
      "corte borboleta / butterfly cut perto de mim SP",
      "corte wolf cut feminino perto de mim SP",
      "corte de cabelo cacheado feminino perto de mim SP",
      "corte de cabelo ondulado / crespo perto de mim SP"
    ]
  },
  {
    category: "Escova Progressiva, Botox Capilar & Transformação Perto de Mim",
    terms: [
      "escova progressiva perto de mim",
      "escova progressiva orgânica perto de mim SP",
      "progressiva sem formol perto de mim São Paulo",
      "botox capilar perto de mim SP",
      "selagem térmica perto de mim São Paulo",
      "alisamento capilar perto de mim SP",
      "cronograma capilar perto de mim São Paulo",
      "reconstrução capilar perto de mim SP",
      "escova modelada perto de mim São Paulo",
      "hidratação profunda capilar perto de mim SP"
    ]
  },
  {
    category: "Blond & Mechas Personalizadas Perto de Mim",
    terms: [
      "mechas personalizadas perto de mim",
      "blond experience perto de mim SP",
      "mechas loiras perto de mim São Paulo",
      "morena iluminada perto de mim SP",
      "retoque de mechas raiz perto de mim",
      "mechas e botox capilar perto de mim SP",
      "matização e loiro saudável perto de mim",
      "especialista em mechas perto de mim Jardim Marajoara"
    ]
  },
  {
    category: "Tratamentos TRUSS & Reconstrução Capilar Perto de Mim",
    terms: [
      "reconstrução TRUSS + escova perto de mim",
      "TRUSS experience + escova perto de mim SP",
      "blond angel + escova perto de mim São Paulo",
      "loiros poderosos + ozônio perto de mim SP",
      "hidratação ou nutrição + escova perto de mim",
      "tratamento capilar com ozonioterapia perto de mim SP"
    ]
  },
  {
    category: "Make & Penteados para Noivas, Madrinhas e Festas Perto de Mim",
    terms: [
      "make + penteado noiva perto de mim SP",
      "pacote noiva serviço + prova perto de mim",
      "make + penteado madrinha perto de mim",
      "make + penteado mãe da noiva perto de mim SP",
      "penteado de noiva perto de mim Jardim Marajoara",
      "maquiagem social blindada perto de mim Zona Sul",
      "escova para convidadas perto de mim São Paulo"
    ]
  }
];

export const NEIGHBORHOOD_SEO_TERMS_LIST: NeighborhoodSeoTerms[] = [
  {
    district: "Jardim Marajoara (São Paulo - SP)",
    distanceInfo: "A 300m de distância • 3 min",
    terms: [
      "corte de cabelo feminino perto de mim Jardim Marajoara SP",
      "corte fem p/ mim Jardim Marajoara",
      "corte + escova perto de mim Jardim Marajoara SP",
      "cabeleireira de mulher p mim no Jardim Marajoara São Paulo",
      "visagista de corte feminino perto de mim Jardim Marajoara SP",
      "salão de beleza p/ mim Jardim Marajoara SP"
    ]
  },
  {
    district: "Chácara Flora (São Paulo - SP)",
    distanceInfo: "A 200m de distância • 2 min",
    terms: [
      "corte de cabelo feminino perto de mim Chácara Flora SP",
      "corte fem p/ mim Chácara Flora",
      "corte + hidratação p/ mim Chácara Flora SP",
      "cabeleireira de coloração perto de mim Chácara Flora São Paulo",
      "corte feminino em camadas perto de mim Chácara Flora",
      "visagista de corte feminino Chácara Flora SP"
    ]
  },
  {
    district: "Vila Sofia (São Paulo - SP)",
    distanceInfo: "A 450m de distância • 5 min",
    terms: [
      "corte de cabelo feminino perto de mim Vila Sofia SP",
      "corte fem p mim Vila Sofia",
      "corte + escova p/ mim Vila Sofia SP",
      "cabeleireira de mulher perto de mim Vila Sofia São Paulo",
      "salão de beleza prox a mim Vila Sofia SP",
      "cabeleireira de corte próximo a mim Vila Sofia SP"
    ]
  },
  {
    district: "Alto da Boa Vista (São Paulo - SP)",
    distanceInfo: "A 1.2 km de distância • 5 min",
    terms: [
      "corte de cabelo feminino perto de mim Alto da Boa Vista SP",
      "corte fem p/ mim Alto da Boa Vista",
      "corte + mechas perto de mim Alto da Boa Vista SP",
      "cabeleireira feminina próximo a mim Alto da Boa Vista São Paulo",
      "corte long bob perto de mim Alto da Boa Vista SP",
      "salão para corte feminino p/ mim Alto da Boa Vista SP"
    ]
  },
  {
    district: "Brooklin (São Paulo - SP)",
    distanceInfo: "A 2.2 km de distância • 8 min",
    terms: [
      "corte de cabelo feminino perto de mim Brooklin SP",
      "corte fem p/ mim Brooklin",
      "corte + escova perto de mim Brooklin SP",
      "cabeleireira de coloração p mim Brooklin São Paulo",
      "salão de beleza prox a mim Brooklin SP",
      "visagista para corte feminino perto de mim Brooklin SP"
    ]
  },
  {
    district: "Campo Belo (São Paulo - SP)",
    distanceInfo: "A 2.5 km de distância • 9 min",
    terms: [
      "corte de cabelo feminino perto de mim Campo Belo SP",
      "corte fem p mim Campo Belo",
      "corte + hidratação perto de mim Campo Belo SP",
      "cabeleireira de mulher p/ mim Campo Belo São Paulo",
      "corte em camadas perto de mim Campo Belo SP",
      "cabeleireira residencial perto de mim Campo Belo SP"
    ]
  },
  {
    district: "Santo Amaro (São Paulo - SP)",
    distanceInfo: "A 1.5 km de distância • 6 min",
    terms: [
      "corte de cabelo feminino perto de mim Santo Amaro SP",
      "corte fem p/ mim Santo Amaro",
      "corte + lavagem p mim Santo Amaro SP",
      "salão de beleza p/ mim Santo Amaro São Paulo",
      "corte de cabelo cacheado perto de mim Santo Amaro SP",
      "cabeleireira de corte perto de mim Santo Amaro SP"
    ]
  },
  {
    district: "Moema (São Paulo - SP)",
    distanceInfo: "A 3.8 km de distância • 12 min",
    terms: [
      "corte de cabelo feminino perto de mim Moema SP",
      "corte fem p/ mim Moema",
      "corte + mechas p/ mim Moema SP",
      "visagista para corte feminino perto de mim Moema São Paulo",
      "corte de cabelo feminino autoral Moema SP",
      "salão de beleza prox a mim Moema SP"
    ]
  },
  {
    district: "Vila Mascote (São Paulo - SP)",
    distanceInfo: "A 1.8 km de distância • 6 min",
    terms: [
      "corte de cabelo feminino perto de mim Vila Mascote SP",
      "corte fem p mim Vila Mascote",
      "corte + escova perto de mim Vila Mascote SP",
      "cabeleireira de coloração p/ mim Vila Mascote São Paulo",
      "corte curto feminino perto de mim Vila Mascote SP",
      "salão para corte feminino p/ mim Vila Mascote SP"
    ]
  },
  {
    district: "Vila Santa Catarina (São Paulo - SP)",
    distanceInfo: "A 1.4 km de distância • 5 min",
    terms: [
      "corte de cabelo feminino perto de mim Vila Santa Catarina SP",
      "corte fem p/ mim Vila Santa Catarina",
      "corte + hidratação p mim Vila Santa Catarina SP",
      "salão de corte feminino prox a mim Vila Santa Catarina São Paulo",
      "corte de cabelo feminino repicado Vila Santa Catarina SP",
      "cabeleireiro residencial p/ mim Vila Santa Catarina SP"
    ]
  },
  {
    district: "Jurubatuba (São Paulo - SP)",
    distanceInfo: "A 2.9 km de distância • 10 min",
    terms: [
      "corte de cabelo feminino perto de mim Jurubatuba SP",
      "corte fem p mim Jurubatuba",
      "corte + escova p/ mim Jurubatuba SP",
      "salão de beleza p/ mim Jurubatuba São Paulo",
      "cabeleireira de coloração perto de mim Jurubatuba SP",
      "visagista de corte Jurubatuba SP"
    ]
  },
  {
    district: "Interlagos (São Paulo - SP)",
    distanceInfo: "A 3.5 km de distância • 11 min",
    terms: [
      "corte de cabelo feminino perto de mim Interlagos SP",
      "corte fem p/ mim Interlagos",
      "corte + mechas perto de mim Interlagos SP",
      "cabeleireira de mulher p mim Interlagos São Paulo",
      "salão para corte feminino prox a mim Interlagos SP",
      "corte de cabelo em camadas perto de mim Interlagos SP"
    ]
  },
  {
    district: "Socorro (São Paulo - SP)",
    distanceInfo: "A 2.7 km de distância • 9 min",
    terms: [
      "corte de cabelo feminino perto de mim Socorro SP",
      "corte fem p mim Socorro",
      "corte + escova p/ mim Socorro SP",
      "salão para corte feminino perto de mim Socorro São Paulo",
      "cabeleireira residencial prox a mim Socorro SP",
      "corte com visagismo p/ mim Socorro SP"
    ]
  },
  {
    district: "Veleiros (São Paulo - SP)",
    distanceInfo: "A 3.2 km de distância • 10 min",
    terms: [
      "corte de cabelo feminino perto de mim Veleiros SP",
      "corte fem p/ mim Veleiros",
      "corte + hidratação perto de mim Veleiros SP",
      "salão de beleza p mim Veleiros São Paulo",
      "cabeleireira de corte prox a mim Veleiros SP",
      "corte bordado feminino perto de mim Veleiros SP"
    ]
  },
  {
    district: "Jardim Prudência (São Paulo - SP)",
    distanceInfo: "A 1.6 km de distância • 6 min",
    terms: [
      "corte de cabelo feminino perto de mim Jardim Prudência SP",
      "corte fem p mim Jardim Prudência",
      "corte + escova p/ mim Jardim Prudência SP",
      "cabeleireira de coloração p/ mim Jardim Prudência São Paulo",
      "salão de beleza prox a mim Jardim Prudência SP",
      "visagista para corte de cabelo Jardim Prudência SP"
    ]
  },
  {
    district: "Panamby (São Paulo - SP)",
    distanceInfo: "A 4.5 km de distância • 15 min",
    terms: [
      "corte de cabelo feminino perto de mim Panamby SP",
      "corte fem p/ mim Panamby",
      "corte + mechas p/ mim Panamby SP",
      "visagista de corte feminino perto de mim Panamby São Paulo",
      "salão de luxo para corte feminino p mim Panamby SP",
      "corte autoral feminino perto de mim Panamby SP"
    ]
  },
  {
    district: "Vila Andrade (São Paulo - SP)",
    distanceInfo: "A 4.2 km de distância • 14 min",
    terms: [
      "corte de cabelo feminino perto de mim Vila Andrade SP",
      "corte fem p mim Vila Andrade",
      "corte + hidratação p/ mim Vila Andrade SP",
      "salão para corte feminino prox a mim Vila Andrade São Paulo",
      "cabeleireiro residencial p/ mim Vila Andrade SP",
      "corte feminino em camadas perto de mim Vila Andrade SP"
    ]
  },
  {
    district: "Real Parque (São Paulo - SP)",
    distanceInfo: "A 4.8 km de distância • 15 min",
    terms: [
      "corte de cabelo feminino perto de mim Real Parque SP",
      "corte fem p/ mim Real Parque",
      "corte + escova p mim Real Parque SP",
      "visagista de corte feminino próximo a mim Real Parque São Paulo",
      "cabeleireira de mulher p/ mim Real Parque SP",
      "salão de beleza perto de mim Real Parque SP"
    ]
  },
  {
    district: "Vila Cruzeiro (São Paulo - SP)",
    distanceInfo: "A 1.3 km de distância • 5 min",
    terms: [
      "corte de cabelo feminino perto de mim Vila Cruzeiro SP",
      "corte fem p mim Vila Cruzeiro",
      "corte + coloração p/ mim Vila Cruzeiro SP",
      "cabeleireira de coloração prox a mim Vila Cruzeiro São Paulo",
      "salão de corte feminino p/ mim Vila Cruzeiro SP",
      "corte de cabelo com visagismo Vila Cruzeiro SP"
    ]
  },
  {
    district: "Chácara Monte Alegre (São Paulo - SP)",
    distanceInfo: "A 800m de distância • 3 min",
    terms: [
      "corte de cabelo feminino perto de mim Chácara Monte Alegre SP",
      "corte fem p/ mim Chácara Monte Alegre",
      "corte + escova p/ mim Chácara Monte Alegre SP",
      "salão de corte feminino prox a mim Chácara Monte Alegre São Paulo",
      "cabeleireiro residencial p mim Chácara Monte Alegre SP",
      "visagista de corte feminino Chácara Monte Alegre SP"
    ]
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
    location: "Chácara Flora (a 300m do salão de beleza)",
    service: "Corte de Cabelo Feminino (Corte)",
    rating: 5,
    text: "Moro a poucos metros do salão de beleza na Chácara Flora e estava procurando um cabeleireiro para corte de cabelo feminino perto de mim de confiança. A Beatriz fez um corte magnífico! O novo estilo adaptado com leveza e movimento elevou absurdamente minha expressão visual. O atendimento no salão de beleza é impecável e privativo.",
    source: "Google Reviews",
    date: "Junho 2026"
  },
  {
    id: "t2",
    name: "Amanda Mendes Prado",
    role: "Profissional Liberal",
    location: "Jardim Marajoara (a 200m do salão de beleza)",
    service: "Coloração Capilar Profissional (Coloração)",
    rating: 5,
    text: "Estava em busca de um local confiável para coloração perto de mim perto da Chapel School. O salão de beleza é maravilhoso! Fizeram uma coloração capilar impecável, com cobertura uniforme dos brancos e um brilho fora do comum. Fiquei muito feliz com o cuidado e carinho no atendimento.",
    source: "Google Reviews",
    date: "Maio 2026"
  },
  {
    id: "t3",
    name: "Camila F. Vasconcellos",
    role: "Arquiteta & Designer",
    location: "Vila Sofia (a 450m do salão de beleza)",
    service: "Aplicação de Mechas Capilares (Mechas)",
    rating: 5,
    text: "Fui ao salão de beleza fazer mechas de contorno facial logo após indicação de uma vizinha da Escola Suíço-Brasileira. As mechas ficaram super naturais e iluminaram totalmente meu semblante sem danificar os fios. Encontrar especialistas em mechas perto de mim com essa qualidade na Zona Sul é precioso.",
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
    id: "pacote-noiva-servico-prova",
    name: "Pacote Noiva — Serviço + Prova",
    price: 1600,
    priceString: "R$ 1.600",
    idealFor: "A escolha favorita e mais segura: produção completa no Grande Dia com a Prova Prévia Inclusa.",
    included: [
      "Make + Penteado de Noiva no Grande Dia com fixação à prova de lágrimas e suor",
      "Prova Completa prévia de Make + Penteado (ensaio técnico semanas antes)",
      "Consultoria de visagismo autoral para harmonia de vestido, véu e tiara",
      "Preparação capilar e facial com cosméticos de alta resistência para câmeras e luzes",
      "Uso de camarim e espaço privativo de salão de beleza no Jardim Marajoara / Zona Sul"
    ],
    features: ["Serviço + Prova", "R$ 1.600", "Noiva VIP", "Visagismo"]
  },
  {
    id: "make-penteado-noiva",
    name: "Make + Penteado de Noiva (Grande Dia)",
    price: 1200,
    priceString: "R$ 1.200",
    idealFor: "Produção exclusiva para a noiva no dia do casamento com maquiagem blindada e penteado autoral.",
    included: [
      "Penteado de noiva exclusivo com alta sustentação para véu e grinalda",
      "Maquiagem (makeup) blindada profissional de altíssima fixação",
      "Higienização e preparação da fibra capilar no salão",
      "Colocação do véu e retoques finais antes da saída para a cerimônia"
    ],
    features: ["Grande Dia", "R$ 1.200", "Make Blindada", "Penteado Autoral"]
  },
  {
    id: "prova-make-penteado",
    name: "Prova de Make + Penteado de Noiva",
    price: 500,
    priceString: "R$ 500",
    idealFor: "Ensaio e teste técnico prévio com 30 a 60 dias de antecedência para aprovar o penteado e a maquiagem.",
    included: [
      "Teste real e montagem do penteado escolhido (coque, semi-preso ou trança)",
      "Teste completo de maquiagem com harmonização de subtom e batom",
      "Ajustes de segurança e registros fotográficos para a noiva comparar com calma"
    ],
    features: ["Prova Prévia", "R$ 500", "Tranquilidade", "Sem Surpresas"]
  },
  {
    id: "make-penteado-madrinha",
    name: "Make + Penteado — Madrinha",
    price: 650,
    priceString: "R$ 650",
    idealFor: "Produção impecável para madrinhas brilharem no altar com sofisticação.",
    included: [
      "Maquiagem social blindada completa com aplicação de cílios postiços",
      "Penteado sofisticado (ondas glamourosas, coque ou trança elaborada)",
      "Produtos de alta fixação para durar toda a cerimônia e a festa"
    ],
    features: ["Madrinhas", "R$ 650", "Make + Penteado"]
  },
  {
    id: "make-penteado-mae",
    name: "Make + Penteado — Mãe da Noiva",
    price: 600,
    priceString: "R$ 600",
    idealFor: "Atendimento carinhoso com visagismo rejuvenescedor para a mãe da noiva ou do noivo.",
    included: [
      "Maquiagem iluminadora especial para peles maduras com efeito lifting suave",
      "Penteado clássico de alta durabilidade e acabamento leve",
      "Atendimento prioritário e exclusivo"
    ],
    features: ["Mãe da Noiva", "R$ 600", "Visagismo Rejuvenescedor"]
  }
];

export const BRIDAL_FAQS = [
  {
    question: "Qual o valor médio e estimativa de custos para o Dia da noiva na Zona Sul, São Paulo?",
    answer: "Para consultar os valores atualizados e solicitar um orçamento sob medida para o Dia da noiva no nosso salão de beleza na Zona Sul, São Paulo, fale diretamente conosco via WhatsApp. Oferecemos pacotes personalizados (Essencial, Clássico e Signature) e condições especiais de agendamento."
  },
  {
    question: "Como funciona a etapa de Preparação de Noiva e cuidados com o penteado de noiva?",
    answer: "O Dia da noiva no nosso salão é planejado milimetricamente para ser relaxante e inabalável. Toda a preparação includes hidratação capilar de alta performance para a fibra capilar, preparação cuidadosa do penteado autoral, além de spa facial e depilação. Tudo isso cria a base perfeita para o penteado de noiva e a maquiagem (makeup) dos seus sonhos, garantindo durabilidade extrema e visual impecável frente a luzes e câmeras."
  },
  {
    question: "Como é a escolha de cada Penteado de noiva em sintonia com o vestido?",
    answer: "Através da nossa consultoria de visagismo profissional para noivas na Zona Sul, São Paulo, analisamos o formato do seu rosto, decote do vestido, véu e acessórios para recomendar a melhor harmonia física. Realizamos o Teste Prévio Completo de 30 a 60 dias antes da cerimônia, onde montamos e validamos fisicamente o penteado de noiva escolhido (seja o Coque Atemporal, Semi-Preso Waves ou Trança Boho Premium), garantindo total tranquilidade para o seu Dia da noiva."
  },
  {
    question: "O salão de beleza oferece suporte de camarim para o Book de noiva (Making Of) na Zona Sul, São Paulo?",
    answer: "Com certeza! Nosso salão de beleza na Zona Sul, São Paulo conta com camarim profissional iluminado de forma natural e neutra. Oferecemos um buffet gourmet (com café da manhã/coquetel) e estruturamos uma pausa especial planejada para fotos e filmagens por conta da noiva (equipes de fotografia do seu book de noiva), permitindo capturar os melhores momentos do making of com total privacidade."
  },
  {
    question: "Quais são as localizações atendidas na Zona Sul, São Paulo para o Dia da noiva?",
    answer: "Somos um salão de beleza premium localizado na Rua Dr. Ferreira Lopes, 703, região da Chácara Flora, Jardim Marajoara, Vila Sofia, Brooklin e Santo Amaro (Zona Sul, São Paulo). Atendemos noivas e acompanhantes sob agendamento exclusivo com estacionamento privativo de cortesia. Caso prefira atendimento on-location em domicílios ou hotéis selecionados da Zona Sul, também oferecemos suporte de deslocamento da equipe."
  },
  {
    question: "Como posso tirar dúvidas personalizadas e fazer o agendamento do meu Dia da noiva?",
    answer: "Para agendar uma pré-avaliação ou sanar dúvidas sobre os serviços inclusos (como café da manhã, massagem, manicure, pedicure, hidratação capilar, maquiagem e penteado), você pode clicar em qualquer botão de Call to Action nesta página para simular o orçamento do seu Dia da noiva e falar instantaneamente com a visagista Beatriz Bittencourt via WhatsApp comercial. Recomendamos o agendamento prévio com 6 a 12 meses de antecedência."
  }
];

export const FEMALE_HAIRCUT_STYLES = [
  {
    title: "Corte em Camadas (Layers / Butterfly Cut)",
    description: "Ideal para dar movimento, leveza e volume natural aos cabelos longos e médios sem tirar o comprimento. Técnica que suaviza traços e emoldura o rosto.",
    idealFor: "Cabelos lisos, ondulados e cacheados que buscam caimento fluido.",
    tag: "Mais Pedido na Zona Sul"
  },
  {
    title: "Long Bob (LOB) & Bob Francês",
    description: "Corte elegante com base reta e leve desconexão nas pontas. Traz elegância corporativa instantânea e facilidade para estilizar no dia a dia.",
    idealFor: "Rostos ovais, redondos e quadrados que buscam sofisticação atemporal.",
    tag: "Tendência & Praticidade"
  },
  {
    title: "Corte Pixie & Curtos Autorais",
    description: "Design arrojado com técnica de visagismo que harmoniza a nuca, as têmporas e a franja com a estrutura óssea da cliente. Destaca o olhar e o pescoço.",
    idealFor: "Mulheres modernas que desejam praticidade máxima com alto impacto estético.",
    tag: "Personalidade & Atitude"
  },
  {
    title: "Corte para Cabelos Cacheados e Crespos (Técnica a Seco)",
    description: "Corte realizado cacho a cacho a seco para respeitar o fator encolhimento e criar formatos arredondados ou assimétricos harmoniosos.",
    idealFor: "Cabelos com curvaturas de 2A a 4C que precisam de definição e balanço.",
    tag: "Especialidade em Curvaturas"
  },
  {
    title: "Franjas & Molduras Faciais (Curtain Bangs)",
    description: "Design de franja cortina, desfiada ou lateral para suavizar a testa e destacar as maçãs do rosto sem mudar drasticamente o comprimento geral.",
    idealFor: "Para renovar o visual rapidamente sem alterar o comprimento do cabelo.",
    tag: "Moldura de Visagismo"
  }
];

export const HAIRCUT_FAQS = [
  {
    question: "Como encontrar uma cabeleireira de corte de cabelo feminino perto de mim na Zona Sul SP?",
    answer: "Nosso salão de beleza fica localizado na Rua Dr. Ferreira Lopes, 703, no Jardim Marajoara (divisa com Chácara Flora e Vila Sofia). Atendemos moradoras de toda a região em um raio de até 5 km — incluindo Brooklin, Campo Belo, Moema, Alto da Boa Vista, Santo Amaro e Panamby — com facilidade de acesso e estacionamento privativo."
  },
  {
    question: "Como funciona a consulta de visagismo antes do corte de cabelo feminino?",
    answer: "Antes de iniciar a tesoura, a visagista Beatriz Bittencourt realiza uma análise minuciosa da sua estrutura facial (formato do rosto, altura do pescoço, linha do maxilar), textura do fio e estilo de vida. O objetivo é escolher a altura, o volume e a camada exata que harmoniza com você."
  },
  {
    question: "Quanto tempo dura a sessão de corte de cabelo feminino no salão de beleza?",
    answer: "A sessão dura em média de 45 minutos a 1 hora e inclui higienização, consultoria de visagismo, corte técnico detalhado, escova ou finalização personalizada para destacar o caimento do novo formato."
  },
  {
    question: "Com qual frequência devo cortar o cabelo feminino para manter a forma?",
    answer: "Recomendamos o retoque a cada 2 a 3 meses para cortes curtos ou com franja, e de 3 a 4 meses para cabelos médios e longos em camadas, mantendo as pontas saudáveis e sem pontas duplas."
  },
  {
    question: "O atendimento de corte feminino perto de mim atende apenas com hora marcada?",
    answer: "Sim! Trabalhamos com agendamento exclusivo para garantir que o seu momento no salão seja calmo, sem filas, sem barulho e com foco total e individualizado da profissional na sua imagem."
  }
];



