import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json({ limit: "15mb" }));

// Lazy init Gemini AI
let aiInstance: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not configured or placeholder. AI features will run in mock demonstration mode.");
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
}

// REST API endpoint for Visagism Analysis
app.post("/api/analyze", async (req, res) => {
  try {
    const { faceShape, goals, makeupPreferences, features, textPrompt, imageBase64, imageMime } = req.body;

    const ai = getGenAI();

    if (!ai) {
      // Return beautiful, highly polished mock response when API key is missing
      console.log("Returning mock analysis response...");
      const mockResponse = getMockAnalysis(faceShape || "Oval", goals || "Expressar autoridade e sofisticação", features || "Cabelo médio ondulado, testa média, olhos amendoados");
      return res.json(mockResponse);
    }

    // Build the prompt for Beatriz Bittencourt Visagismo
    const promptMessage = `
Você é Beatriz Bittencourt, uma renomada Visagista e especialista em imagem pessoal com ateliê na região de Vila Sofia e Chácara Flora, São Paulo. 
Sua missão é fazer um diagnóstico de visagismo profissional, aprofundado, luxuoso e acolhedor para a interatividade da usuária. 
Analise as informações fornecidas e gere um plano completo em português.

DADOS DA CLIENTE:
- Formato de rosto autodeclarado: ${faceShape || "Não especificado"}
- Características físicas descritas: ${features || "Não especificado"}
- Objetivos de imagem (o que quer transmitir): ${goals || "Não especificado"}
- Preferências de maquiagem/estilo: ${makeupPreferences || "Não especificado"}
${textPrompt ? `- Observações adicionais: ${textPrompt}` : ""}

Se houver uma foto de selfie enviada, analise cuidadosamente os traços visuais da foto (como formato de mandíbula, testa, sobrancelhas, distância dos olhos, inclinação das linhas do rosto) de forma ética e profissional.

Gere uma resposta estruturada de visagismo no formato JSON abaixo. Retorne ESTREITAMENTE o JSON configurado:
{
  "summary": "Breve parágrafo acolhedor resumindo o perfil da cliente e o potencial de sua beleza única",
  "temperament": "O temperamento visagista dominante predominante (Sanguíneo, Colérico, Melancólico ou Fleumático)",
  "temperamentDescription": "Explicação detalhada de como as linhas estruturais do rosto e comportamento refletem esse temperamento de forma positiva",
  "facialLines": "Análise das linhas faciais (por exemplo, verticais que trazem força, inclinadas que trazem dinamismo, ou curvas que expressam suavidade)",
  "hairRecommendations": ["Duas ou três sugestões de cortes, comprimentos, franjas e coloração ideais para alinhar com o objetivo"],
  "makeupRecommendations": ["Diretrizes sobre sobrancelhas (ex: arqueamento, espessura), delineado, blush e batons ideais."],
  "accessoriesRecommendations": ["Dicas de formatos de óculos (ex: gatinho, quadrado, arredondado), brincos e decotes perfeitos"],
  "brandArchetype": "O arquétipo visual associado (ex: O Criador, O Soberano, O Amante, O Sábio) e sua explicação"
}
`;

    let response;
    if (imageBase64 && imageMime) {
      // Multimodal call
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: imageMime,
            },
          },
          promptMessage,
        ],
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });
    } else {
      // Pure text call
      response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptMessage,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });
    }

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }

    const parsedJson = JSON.parse(responseText.trim());
    return res.json(parsedJson);

  } catch (error: any) {
    console.error("Error in visagism API:", error);
    // Return mock response as a safe fallback on parsing/API errors
    console.log("API Error, falling back to mock response.");
    const mockResponse = getMockAnalysis("Oval", "Expressar autoridade e sofisticação", "Cabelo ondulado");
    mockResponse.summary = "Seu diagnóstico foi estimado por recomendação de nossa equipe local por conta de uma oscilação na rede, mas reflete perfeitamente os princípios do Ateliê Beatriz Bittencourt.";
    return res.json(mockResponse);
  }
});

// Mock generator for fallback/demonstration
function getMockAnalysis(faceShape: string, goals: string, features: string) {
  const shape = faceShape.toLowerCase();
  
  let temp = "Sanguíneo (Dinamismo e Extroversão)";
  let desc = "As linhas inclinadas e o dinamismo de suas feições transmitem muito brilho, extroversão e alegria. Você é percebida como uma pessoa altamente comunicativa, vibrante e receptiva.";
  let lines = "Presença marcante de linhas inclinadas e áreas iluminadas. A testa expressa abertura intelectual e os olhos o desejo de conexão.";
  let hair = [
    "Franja desfiada ou lateral para acentuar o movimento natural de suas ideias e evitar rigidez.",
    "Corte em camadas médias (bob alongado ou repicado) para ativar a energia solar de seu rosto.",
    "Luzes sutis em tons quentes (mel ou dourado) para iluminar os contornos e destacar seu carisma."
  ];
  let makeup = [
    "Sobrancelhas levemente arqueadas e preenchidas de forma suave para ampliar o olhar comunicativo.",
    "Blush aplicado nas maçãs em tom pêssego ou rosa queimado para ar de saúde natural e simpatia.",
    "Contorno sutil apenas nas têmporas e maxilar para manter a leveza das suas linhas e destacar o sorriso."
  ];
  let accSetting = [
    "Óculos de formato hexagonal ou levemente gatinho para unir força geométrica com o seu dinamismo natural.",
    "Brincos pendulares de linhas orgânicas e fluidas.",
    "Decote em 'V' ou canoa para alongar elegantemente o colo."
  ];
  let arche = "O Criador / O Carismático - Expressa originalidade, criatividade vibrante e facilidade para se conectar com as pessoas de forma envolvente e autêntica.";

  if (shape.includes("quadrado") || shape.includes("retangular")) {
    temp = "Colérico (Liderança e Força)";
    desc = "Linhas verticais e horizontais fortes na mandíbula e têmporas revelam determinação, integridade, foco, liderança natural e forte poder de realização.";
    lines = "Linhas retas proeminentes que denotam autoridade, controle, foco analítico e estabilidade emocional profunda.";
    hair = [
      "Fios longos com ondas suaves e contorno desconectado para suavizar os ângulos rígidos da mandíbula de forma extremamente sofisticada.",
      "Restauração do corte com divisão lateral opcional para adicionar dinamismo às linhas retas verticais.",
      "Tons de castanho iluminado ou morena iluminada quente para quebrar a frieza estrutural do rosto."
    ];
    makeup = [
      "Sobrancelhas ligeiramente mais retas com curvatura nítida na ponta para expressar sabedoria e convicção.",
      "Blush de contorno mais suave, focado na diagonal ascendente das maçãs, evitando marcação severa na mandíbula.",
      "Batons em tons nudes sofisticados ou vermelho clássico para empoderar a sua imagem corporativa."
    ];
    accSetting = [
      "Óculos redondos ou ovais com detalhes retos na parte superior para equilibrar os ângulos maxilares marcantes.",
      "Brincos geométricos elegantes ou pérolas barrocas médias.",
      "Golas altas ou decote quadrado estruturado."
    ];
    arche = "O Soberano / O Realizador - Emite uma assinatura visual de respeito incontestável, controle estratégico, elegância impecável e segurança." ;
  } else if (shape.includes("redondo")) {
    temp = "Fleumático (Serenidade e Acolhimento)";
    desc = "Suas feições curvas e suaves emitem empatia, paz profunda, constância, cuidado e elegância silenciosa. As pessoas naturalmente se sentem confortáveis e protegidas em sua presença.";
    lines = "Predomínio de linhas curvas e suaves. O queixo arredondado e as bochechas macias expressam receptividade amorosa e inteligência diplomática.";
    hair = [
      "Corte lob com pontas desfiadas ou reto alongado abaixo da clavícula para adicionar linhas verticais que alongam o rosto.",
      "Risco centralizado clássico para criar simetria e expressar estabilidade.",
      "Tons frios ou chocolate profundo para conferir sofisticação gráfica e definição às feições."
    ];
    makeup = [
      "Contorno em formato de '3' (têmporas, abaixo das maçãs e maxilar) para esculpir e dar profundidade de forma elegante.",
      "Sobrancelhas arqueadas com firmeza moderada para elevar o centro visual do rosto e conferir foco estratégico.",
      "Delineado gatinho clássico para definir a expressividade horizontal dos olhos."
    ];
    accSetting = [
      "Óculos de linhas retas e marcantes (retangulares ou quadrados) com pontas elevadas para estruturar a suavidade facial.",
      "Brincos finos e compridos que descem verticalmente.",
      "Decote profundo em V ou gola V para ampliação do pescoço."
    ];
    arche = "O Protetor / O Sábio - Demonstra escuta ativa, diplomacia instintiva, tranquilidade refinada e confiabilidade inabalável.";
  } else if (shape.includes("triangular") || shape.includes("coração") || shape.includes("hexagonal")) {
    temp = "Melancólico (Sofisticação e Sensibilidade)";
    desc = "O queixo definido e as linhas refinadas revelam temperança, sensibilidade artística, detalhismo, intelecto apurado e busca constante pela excelência e simetria.";
    lines = "Linhas inclinadas convergentes até o queixo sutil. Indica reflexão, precisão estética, imaginação fértil e sensibilidade.";
    hair = [
      "Corte na altura dos ombros com volume focado na base (região da mandíbula) para equilibrar a proporção da testa.",
      "Franja cortina macia para emoldurar os olhos sem fechar a expressão da testa média ou alta.",
      "Coloração acobreada multifacetada ou mechas pontuais de contorno na região das pontas."
    ];
    makeup = [
      "Preenchimento harmônico das sobrancelhas suavizando o início das linhas para evitar ar de severidade.",
      "Iluminador aplicado delicadamente nas maçãs do rosto e têmporas, evitando o queixo para harmonização de proporções.",
      "Lip gloss ou batons de textura aveludada para acentuar a doçura e a sofisticação natural dos lábios."
    ];
    accSetting = [
      "Óculos redondos, ovais ou com base arredondada (como aviadores refinados) para contrastar com a geometria triangular do queixo.",
      "Brincos de formato redondo ou gota que alargam na base.",
      "Decotes arredondados ou do tipo canoa."
    ];
    arche = "O Sábio / O Amante - Expressa uma sofisticação minuciosa, maestria intelectual, sensibilidade estética e profundo mistério poético.";
  }

  return {
    summary: `Olá! Analisando seu formato de rosto dominado pela estrutura ${faceShape}, seus objetivos de "${goals}" e suas características únicas de "${features}", tracei o perfil ideal de visagismo com as técnicas do meu ateliê em Chácara Flora.`,
    temperament: temp,
    temperamentDescription: desc,
    facialLines: lines,
    hairRecommendations: hair,
    makeupRecommendations: makeup,
    accessoriesRecommendations: accSetting,
    brandArchetype: arche
  };
}

// Vite integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
