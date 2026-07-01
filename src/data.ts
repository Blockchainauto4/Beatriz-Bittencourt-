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
    landmark: "Colégio Chapel / Chapel School (Chácara Flora)",
    distance: "A apenas 200m",
    transport: "2 min a pé 🚶‍♀️",
    context: "Siga pela Rua Dr. Ferreira Lopes. A melhor opção de cabeleireiro residencial perto de mim na Chácara Flora com atendimento privativo premium e seguro.",
    seoKeywords: ["CabeleireiroResidencial", "CabeleireiroChácaraFlora", "CabeleireiroPertoDeMim"]
  },
  {
    landmark: "Escola Suíço-Brasileira (Vila Sofia)",
    distance: "A 450m",
    transport: "5 min a pé 🚶‍♂️",
    context: "Perfeito para moradoras locais que buscam um cabeleireiro residencial perto de mim em Vila Sofia para corte feminino e visagismo de alta precisão.",
    seoKeywords: ["CabeleireiroVilaSofia", "CabeleireiroPertoDeMim", "SalãoDeBelezaVilaSofia"]
  },
  {
    landmark: "Pão de Açúcar (Jardim Marajoara)",
    distance: "A 300m",
    transport: "3 min a pé 🚶",
    context: "No centro do bairro, somos a referência número um de cabeleireiro residencial perto de mim no Jardim Marajoara com estacionamento privativo e café gourmet.",
    seoKeywords: ["CabeleireiroJardimMarajoara", "CabeleireiroResidencial", "SalãoDeBelezaMarajoara"]
  },
  {
    landmark: "Estação Alto da Boa Vista (Metrô Linha 5-Lilás)",
    distance: "A 1.2 km",
    transport: "5 min de carro 🚗",
    context: "Se você pesquisa por cabeleireiro perto de mim no Alto da Boa Vista, desfrute de um ambiente residencial boutique projetado para o seu bem-estar.",
    seoKeywords: ["CabeleireiroAltoDaBoaVista", "CabeleireiroPertoDeMim", "CabeleireiroResidencial"]
  },
  {
    landmark: "Av. Vereador José Diniz (Brooklin)",
    distance: "A 2.2 km",
    transport: "8 min de carro 🚗",
    context: "Evite a agitação dos salões tradicionais de shopping. Atendemos como um cabeleireiro perto de mim no Brooklin com exclusividade e hora marcada.",
    seoKeywords: ["CabeleireiroBrooklin", "CabeleireiroPertoDeMim", "CorteFemininoBrooklin"]
  },
  {
    landmark: "Rua Vieira de Morais (Campo Belo)",
    distance: "A 2.5 km",
    transport: "9 min de carro 🚗",
    context: "Buscando por cabeleireiro residencial perto de mim no Campo Belo? Atendimento de altíssimo padrão com visagismo focado em realçar sua beleza natural.",
    seoKeywords: ["CabeleireiroCampoBelo", "CabeleireiroResidencial", "VisagismoCampoBelo"]
  },
  {
    landmark: "Largo Treze & Av. Adolfo Pinheiro (Santo Amaro)",
    distance: "A 1.5 km",
    transport: "6 min de carro 🚗",
    context: "Próximo à Av. Washington Luís, somos a melhor escolha de cabeleireiro residencial perto de mim em Santo Amaro para tratamentos e coloração segura.",
    seoKeywords: ["CabeleireiroSantoAmaro", "CabeleireiroResidencial", "SalãoDeBelezaSantoAmaro"]
  },
  {
    landmark: "Parque Cordeiro (Chácara Monte Alegre)",
    distance: "A 800m",
    transport: "3 min de carro 🚗",
    context: "Uma experiência de beleza acolhedora. Venha ao cabeleireiro perto de mim na Chácara Monte Alegre com total sigilo e atendimento VIP individualizado.",
    seoKeywords: ["CabeleireiroChácaraMonteAlegre", "CabeleireiroPertoDeMim", "CorteFemininoZonaSul"]
  },
  {
    landmark: "Av. Ibirapuera & Bairro de Moema",
    distance: "A 3.8 km",
    transport: "12 min de carro 🚗",
    context: "Fácil acesso. Para quem busca cabeleireiro residencial perto de mim em Moema, oferecemos um refúgio acolhedor com atendimento especializado por Beatriz Bittencourt.",
    seoKeywords: ["CabeleireiroMoema", "CabeleireiroResidencialMoema", "SalãoDeBelezaMoema"]
  },
  {
    landmark: "Avenida Santa Catarina (Vila Mascote)",
    distance: "A 1.8 km",
    transport: "6 min de carro 🚗",
    context: "Se você quer um cabeleireiro perto de mim na Vila Mascote para corte autoral ou terapia capilar, desfrute de nossa estrutura privativa.",
    seoKeywords: ["CabeleireiroVilaMascote", "CabeleireiroPertoDeMim", "SalãoDeBelezaVilaMascote"]
  },
  {
    landmark: "Parque do Cordeiro (Vila Santa Catarina)",
    distance: "A 1.4 km",
    transport: "5 min de carro 🚗",
    context: "Excelente localização para quem pesquisa cabeleireiro residencial perto de mim em Vila Santa Catarina. Conforto, agilidade e resultados surpreendentes.",
    seoKeywords: ["CabeleireiroVilaSantaCatarina", "CabeleireiroResidencial", "SalãoDeBelezaZonaSul"]
  },
  {
    landmark: "Avenida Nações Unidas (Jurubatuba)",
    distance: "A 2.9 km",
    transport: "10 min de carro 🚗",
    context: "Fácil acesso para executivas que buscam cabeleireiro perto de mim em Jurubatuba. Agende seu horário de almoço ou fim de tarde com praticidade.",
    seoKeywords: ["CabeleireiroJurubatuba", "CabeleireiroPertoDeMim", "CorteDeCabeloJurubatuba"]
  },
  {
    landmark: "Avenida Interlagos & Represa",
    distance: "A 3.5 km",
    transport: "11 min de carro 🚗",
    context: "Mora ou trabalha na região? Nosso espaço é o cabeleireiro residencial perto de mim em Interlagos ideal para quem preza por segurança e perfeccionismo.",
    seoKeywords: ["CabeleireiroInterlagos", "CabeleireiroResidencial", "SalãoDeBelezaInterlagos"]
  },
  {
    landmark: "Ponte do Socorro & Bairro Socorro",
    distance: "A 2.7 km",
    transport: "9 min de carro 🚗",
    context: "Procurando cabeleireiro perto de mim no Socorro? Conte com nosso atendimento premium de beleza com visagismo físico de ponta.",
    seoKeywords: ["CabeleireiroSocorro", "CabeleireiroPertoDeMim", "SalãoFemininoSocorro"]
  },
  {
    landmark: "Clube de Campo Castelo (Veleiros)",
    distance: "A 3.2 km",
    transport: "10 min de carro 🚗",
    context: "Uma alternativa chique e sossegada para quem quer cabeleireiro residencial perto de mim em Veleiros, livre de ruídos e com atendimento um a um.",
    seoKeywords: ["CabeleireiroVeleiros", "CabeleireiroResidencial", "CorteFemininoVeleiros"]
  },
  {
    landmark: "Avenida Vereador João de Luca (Jardim Prudência)",
    distance: "A 1.6 km",
    transport: "6 min de carro 🚗",
    context: "O cabeleireiro perto de mim no Jardim Prudência perfeito para mechas, coloração capilar e spa de fibra com produtos importados e importação de ponta.",
    seoKeywords: ["CabeleireiroJardimPrudência", "CabeleireiroPertoDeMim", "SalãoDeBelezaPrudência"]
  },
  {
    landmark: "Parque Burle Marx (Panamby)",
    distance: "A 4.5 km",
    transport: "15 min de carro 🚗",
    context: "Para quem valoriza privacidade absoluta e busca cabeleireiro residencial perto de mim no Panamby. Estacionamento fechado e segurança de alto nível.",
    seoKeywords: ["CabeleireiroPanamby", "CabeleireiroResidencial", "VisagismoPanamby"]
  },
  {
    landmark: "Shopping Jardim Sul (Vila Andrade)",
    distance: "A 4.2 km",
    transport: "14 min de carro 🚗",
    context: "Cansada de shoppings cheios? Encontre a calma no cabeleireiro perto de mim na Vila Andrade com atendimento totalmente focado na sua imagem única.",
    seoKeywords: ["CabeleireiroVilaAndrade", "CabeleireiroPertoDeMim", "SalãoDeBelezaVilaAndrade"]
  },
  {
    landmark: "Ponte Estaiada Octávio Frias (Real Parque)",
    distance: "A 4.8 km",
    transport: "15 min de carro 🚗",
    context: "Atendemos clientes exigentes como o melhor cabeleireiro residencial perto de mim no Real Parque para corte autoral e visagismo de luxo.",
    seoKeywords: ["CabeleireiroRealParque", "CabeleireiroResidencial", "SalãoDeBelezaRealParque"]
  },
  {
    landmark: "Clube Hípico de Santo Amaro (Vila Cruzeiro)",
    distance: "A 1.3 km",
    transport: "5 min de carro 🚗",
    context: "A opção definitiva para quem busca cabeleireiro perto de mim na Vila Cruzeiro. Venha cuidar de sua fibra capilar com exclusividade e conforto familiar.",
    seoKeywords: ["CabeleireiroVilaCruzeiro", "CabeleireiroPertoDeMim", "SalãoFemininoVilaCruzeiro"]
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


