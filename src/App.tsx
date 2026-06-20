import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  Instagram, 
  Upload, 
  User, 
  Image as ImageIcon, 
  Heart, 
  Scissors, 
  Smile, 
  Compass, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  X,
  Plus,
  BookOpen,
  Camera,
  Map,
  Palette,
  Briefcase
} from "lucide-react";
import { SERVICES, TEMPERAMENTS, STUDIO_INFO, FAQ, LOCAL_SEO_REGIONS, CLIENT_TESTIMONIALS, BRIDAL_PACKAGES, BRIDAL_FAQS } from "./data";
import { VisagismDiagnosis, Appointment, Service } from "./types";

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"noivas" | "diagnostico" | "servicos" | "agendamento" | "atelie">("noivas");

  // Diagnosis states
  const [faceShape, setFaceShape] = useState<string>("Oval");
  const [goals, setGoals] = useState<string>("💼 Autoridade & Credibilidade Corporativa");
  const [customGoals, setCustomGoals] = useState<string>("");
  const [features, setFeatures] = useState<string>("Cabelo ondulado médio, sobrancelhas expressivas, testa média, olhos amendoados e maxilar bem macio.");
  const [makeupPrefs, setMakeupPrefs] = useState<string>("Prefiro maquiagem sutil para o dia a dia, com foco nos olhos e batom nude.");
  const [personalNote, setPersonalNote] = useState<string>("");
  
  // Image upload states
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMime, setImageMime] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Loading & diagnostic output
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [diagnosisResult, setDiagnosisResult] = useState<VisagismDiagnosis | null>(null);
  const [selectedDiagnosisTab, setSelectedDiagnosisTab] = useState<"temperamento" | "cabelo" | "maquiagem" | "acessorios">("temperamento");

  // Booking states
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);
  const [bookingDate, setBookingDate] = useState<string>("");
  const [bookingTime, setBookingTime] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);

  // Time Slots
  const TIME_SLOTS = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  // Testimonial states
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("beatriz_testimonials");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return CLIENT_TESTIMONIALS;
      }
    }
    return CLIENT_TESTIMONIALS;
  });

  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>("Todos");

  // Bridal calculator states
  const [bridalPackage, setBridalPackage] = useState<string>("noiva-classico");
  const [bridalMadrinhasCount, setBridalMadrinhasCount] = useState<number>(0);
  const [bridalIncludeRehearsal, setBridalIncludeRehearsal] = useState<boolean>(false);
  const [bridalExternalTravel, setBridalExternalTravel] = useState<boolean>(false);
  const [bridalOpenFaq, setBridalOpenFaq] = useState<number | null>(null);
  
  // Submit new review form states
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewLocation, setNewReviewLocation] = useState("Jardim Marajoara");
  const [newReviewService, setNewReviewService] = useState("Corte de Cabelo Feminino (Corte)");
  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [reviewSubmitMessage, setReviewSubmitMessage] = useState("");

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) {
      alert("Por favor, preencha o seu nome e seu relato de experiência.");
      return;
    }

    const created = {
      id: "review-" + Date.now(),
      name: newReviewName,
      role: "Cliente Local",
      location: `${newReviewLocation} (Avaliado via site)`,
      service: newReviewService,
      rating: newReviewRating,
      text: newReviewText,
      source: "Website Ateliê",
      date: "Recentemente"
    };

    const updated = [created, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem("beatriz_testimonials", JSON.stringify(updated));

    // Reset fields & set message
    setNewReviewName("");
    setNewReviewText("");
    setReviewSubmitMessage("Sua avaliação foi registrada com sucesso e já está disponível na seção local!");
    setTimeout(() => {
      setReviewSubmitMessage("");
    }, 6000);
  };

  // Restore appointments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("beatriz_appointments");
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading appointments", e);
      }
    }
  }, []);



  // Dynamic SEO meta targets for each tab (acting as individual optimized landing pages)
  useEffect(() => {
    let title = "";
    let desc = "";

    switch (activeTab) {
      case "noivas":
        title = "Dia da Noiva perto de mim | Penteados de Noiva & Preparação de Noiva em SP";
        desc = "Especialista em preparação de noiva, penteados de noiva, dia da noiva e book de noivas na Zona Sul de SP. Conheça nossos pacotes exclusivos com valores competitivos.";
        break;
      case "diagnostico":
        title = "Barbeiro, Cabeleireira & Visagista perto de mim | Beatriz Bittencourt Jardim Marajoara";
        desc = "Buscando barbeiro, cabeleireira ou visagista perto de mim na Chácara Flora, Vila Sofia ou Jardim Marajoara? Realize nossa análise de temperamento facial por Inteligência Artificial.";
        break;
      case "servicos":
        title = "Aplicação de mechas & Barbearia perto de mim • Ateliê Beatriz Bittencourt";
        desc = "Especialista em aplicação de mechas perto de mim e corte de cabelo masculino com design de barba visagista. Conheça nossa tabela de valores e serviços boutique.";
        break;
      case "agendamento":
        title = "Cortes de cabelo feminino perto de mim & Barber Shop • Agendamentos";
        desc = "Agende cortes de cabelo feminino perto de mim ou barbearia premium no Jardim Marajoara. Atendimento agendado com hora marcada perto de você na Zona Sul.";
        break;
      case "atelie":
        title = "Ateliê & Barbearia Beatriz Bittencourt | Rua Dr. Ferreira Lopes, 703 SP";
        desc = "Conheça nosso espaço boutique integrando visagismo feminino e barber shop perto das regiões de Chácara Flora, Vila Sofia e Alto da Boa Vista.";
        break;
      default:
        title = "Beatriz Bittencourt | Ateliê de Visagismo, Estética & Barbearia Jardim Marajoara";
        desc = "Ateliê especializado em visagismo integrado, colorimetria facial, corte feminino e barbearia perto de você na Chácara Flora, Vila Sofia e Jardim Marajoara.";
    }

    document.title = title;
    
    // Update main meta description dynamically for search bots
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", desc);
    }
  }, [activeTab]);

  // Handle image drag & drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Por favor, envie um arquivo de imagem válido.");
      return;
    }
    setImageFile(file);
    setImageMime(file.type);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Create Base64 for API
    const baseReader = new FileReader();
    baseReader.onload = (e) => {
      const base64String = e.target?.result as string;
      setImageBase64(base64String);
    };
    baseReader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImageFile(null);
    setImagePreview(null);
    imageBase64 && setImageBase64(null);
    imageMime && setImageMime(null);
  };

  // Trigger server-side Gemini API Visagism Analysis
  const runVisagismAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoadingStep("Iniciando escaneamento de simetria...");

    // Smooth loading steps for an immersive high-end feel
    const steps = [
      "Processando formato facial declarado...",
      "Identificando inclinações e simetria de linhas...",
      "Cruzando traços com arquétipos de temperamento...",
      "Analisando objetivos e gerando recomendações personalizadas..."
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      if (currentStepIndex < steps.length) {
        setLoadingStep(steps[currentStepIndex]);
        currentStepIndex++;
      }
    }, 1200);

    try {
      const payload = {
        faceShape,
        goals: customGoals ? customGoals : goals,
        makeupPreferences: makeupPrefs,
        features,
        textPrompt: personalNote,
        imageBase64: imageBase64,
        imageMime: imageMime
      };

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      clearInterval(interval);

      if (!response.ok) {
        throw new Error("Falha no diagnóstico de visagismo");
      }

      const data = await response.json();
      setDiagnosisResult(data);
      setSelectedDiagnosisTab("temperamento");
    } catch (err) {
      console.error("Error generating diagnosis:", err);
      // Fallback is handled safely by server returning mock, but just in case:
      alert("Ocorreu um imprevisto na análise. Fornecemos um relatório otimizado.");
    } finally {
      setLoading(false);
    }
  };

  // Submit appointment booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime || !clientName || !clientEmail || !clientPhone) {
      alert("Por favor, preencha todos os campos do agendamento.");
      return;
    }

    const newAppointment: Appointment = {
      id: "booking-" + Date.now(),
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      date: bookingDate,
      timeSlot: bookingTime,
      clientName,
      clientEmail,
      clientPhone,
      status: "Confirmado",
      createdAt: new Date().toLocaleDateString("pt-BR")
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem("beatriz_appointments", JSON.stringify(updated));
    setShowBookingModal(true);
  };

  // Cancel an appointment
  const cancelAppointment = (id: string) => {
    if (confirm("Deseja realmente cancelar este agendamento?")) {
      const updated = appointments.filter(app => app.id !== id);
      setAppointments(updated);
      localStorage.setItem("beatriz_appointments", JSON.stringify(updated));
    }
  };

  // Switch to booking tab and preset service
  const triggerBookingForService = (service: Service) => {
    setSelectedService(service);
    setActiveTab("agendamento");
    // Scroll smoothly to form
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const getFaceNamePt = (shape: string) => {
    switch (shape) {
      case "Oval": return "Equilibrado & Harmonioso";
      case "Quadrado": return "Forte & Angular";
      case "Redondo": return "Suave & Acolhedor";
      case "Coraçao": return "Delicado & Expressivo";
      default: return shape;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans antialiased selection:bg-[#B5945F]/20 selection:text-stone-900">
      
      {/* Top Notification / Micro Badge */}
      <div className="bg-[#1C1A17] text-[#EAE6DD] text-center text-xs py-2 px-4 tracking-wider uppercase font-medium flex items-center justify-center gap-2">
        <MapPin size={13} className="text-[#B5945F]" />
        Atendimento Boutique perto de você • Chácara Flora & Vila Sofia, São Paulo
      </div>

      {/* Main Luxury Header */}
      <header className="border-b border-[#EAE6DD] bg-white sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-serif tracking-widest text-[#1C1A17] hover:opacity-90 cursor-pointer">
                BEATRIZ BITTENCOURT
              </span>
              <span className="h-4 w-[1px] bg-stone-300 hidden sm:inline" />
              <span className="text-xs tracking-widest uppercase text-[#B5945F] font-mono font-semibold hidden sm:inline">
                Visagista & Imagem
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5 tracking-wide">
              Estética Facial, Alinhamento de Imagem & Colorimetria • Chácara Flora
            </p>
          </div>

          {/* Elegant Top Navigation Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: "noivas", label: "Noivas & Assessoria", icon: Heart },
              { id: "diagnostico", label: "Consultoria IA", icon: Sparkles },
              { id: "servicos", label: "Corte, Mechas & Cor", icon: Scissors },
              { id: "agendamento", label: "Agendar Horário", icon: Calendar },
              { id: "atelie", label: "O Ateliê & Contato", icon: MapPin }
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                    active 
                      ? "bg-[#1C1A17] text-[#FAF9F5] shadow-sm transform scale-102"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  <Icon size={14} className={active ? "text-[#B5945F]" : "text-stone-400"} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          
          {/* TAB 0: ESPECIALIZAÇÃO BRIDAL PREPARATION & DIA DA NOIVA */}
          {activeTab === "noivas" && (
            <motion.div
              key="noivas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Luxury Bridal Hero */}
              <div 
                className="relative bg-gradient-to-br from-[#1C1A17] to-stone-900 text-[#FAF9F5] rounded-3xl p-6 md:p-12 shadow-xl overflow-hidden"
              >
                <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none bg-[radial-gradient(#B5945F_1px,transparent_1px)] [background-size:16px_16px] hidden md:block" />
                
                <div className="max-w-2xl relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-[#B5945F] rounded-full text-2xs tracking-widest uppercase font-mono border border-stone-700">
                    <Heart size={11} className="fill-current text-[#B5945F]" /> Especialista em Noivas perto de mim
                  </div>
                  <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
                    Seu Dia da Noiva dos Sonhos na Zona Sul de SP.
                  </h1>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                    Com mais de uma década de excelência perto de Vila Sofia Jardim Marajoara e Chácara Flora, proporcionamos uma experiência impecável. Cuidamos com perfeição de cada detalhe: da <strong>preparação de noiva</strong> biotecnológica aos refinados <strong>penteados de noiva</strong> e total infraestrutura para acomodar seu <strong>book de noivas</strong>.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button 
                      onClick={() => {
                        const form = document.getElementById("bridal-calculator-section");
                        form?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all inline-flex items-center gap-2"
                    >
                      Calcular Valores do Pacote
                      <ChevronRight size={14} />
                    </button>
                    <button 
                      onClick={() => {
                        const defaultBridal = BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[1];
                        setSelectedService({
                          id: defaultBridal.id,
                          title: defaultBridal.name,
                          description: defaultBridal.idealFor,
                          price: defaultBridal.priceString,
                          duration: "Dia da Noiva",
                          category: "Noivas",
                          tags: defaultBridal.features
                        });
                        setActiveTab("agendamento");
                      }}
                      className="bg-transparent hover:bg-stone-800 text-[#EAE6DD] border border-stone-700 px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all"
                    >
                      Agendar Visita Fisioterapêutica
                    </button>
                  </div>
                </div>
              </div>

              {/* Penteados de Noiva & Preparação de Noiva Styles Grid */}
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-1.5">
                  <span className="text-2xs text-[#B5945F] font-mono uppercase tracking-widest font-bold">Assinaturas de Beleza Autoral</span>
                  <h2 className="text-2xl md:text-3xl font-serif text-stone-900">Penteados de Noiva & Preparação Especializada de Fibra</h2>
                  <p className="text-xs text-stone-500">
                    Nossa metodologia alia o visagismo clássico para adaptar a harmonia do cabelo ao corte do vestido, véu e acessórios, otimizando seu book de noiva.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Semi-Preso Waves",
                      keyword: "Penteados de Noiva",
                      desc: "Técnica que combina leveza com movimento. Ondulações impecáveis com fixação flexível, excelentes para casamentos diurnos ao ar livre na região.",
                      feature: "Fixação leve e movimento"
                    },
                    {
                      title: "Coque Atemporal",
                      keyword: "Preparação de Noiva",
                      desc: "Sofisticação total. Um design polido que valoriza o pescoço e a grinalda de casamento, com resistência climática de alta durabilidade.",
                      feature: "Perfeito para véus clássicos"
                    },
                    {
                      title: "Trança Boho Premium",
                      keyword: "Dia da Noiva",
                      desc: "Ar despojado e romântico. Elementos texturizados com fivelas de pérola ou flores secas de campo integradas de maneira harmoniosa.",
                      feature: "Estilo sofisticadamente livre"
                    },
                    {
                      title: "Fibras de Alta Performance",
                      keyword: "Preparo de Noivas",
                      desc: "Terapia reparadora de mechas pré-evento. Oferece toque suave, brilho de espelho e blindagem contra umidade para fotos maravilhosas.",
                      feature: "Blindagem de mecha 18 horas"
                    }
                  ].map((style, i) => (
                    <div key={i} className="bg-white border border-[#EAE6DD] rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-[#B5945F]/40 transition-colors shadow-2xs">
                      <div className="space-y-2">
                        <span className="text-[9px] bg-[#B5945F]/10 text-[#B5945F] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold inline-block">
                          {style.keyword}
                        </span>
                        <h3 className="text-sm font-bold text-stone-900">{style.title}</h3>
                        <p className="text-xs text-stone-600 leading-relaxed">{style.desc}</p>
                      </div>
                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                        <span className="font-medium text-[#B5945F]">✓ {style.feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Interactive Budget Calculator */}
              <div id="bridal-calculator-section" className="bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="space-y-1">
                    <span className="text-2xs text-[#B5945F] font-mono uppercase tracking-widest font-bold">Simular Valor Total</span>
                    <h3 className="text-xl md:text-2xl font-serif text-stone-900">Planejamento Transparente & Valores do Dia da Noiva</h3>
                    <p className="text-xs text-stone-500">
                      Escolha seu pacote principal e adicione itens adicionais para obter sua cotação e valor de investimento prévio.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B5945F]/10 rounded-full text-xs text-[#B5945F] font-semibold font-mono">
                    <span>💳 Em até 10x sem juros</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Interactive Inputs */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Choose Package */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block col-span-full">
                        Selecione Seu Pacote de Noiva de Preferência:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {BRIDAL_PACKAGES.map((pkg) => {
                          const active = bridalPackage === pkg.id;
                          return (
                            <button
                              key={pkg.id}
                              type="button"
                              onClick={() => setBridalPackage(pkg.id)}
                              className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between gap-3 h-full ${
                                active
                                  ? "bg-[#1C1A17] border-[#1C1A17] text-[#FAF9F5] shadow-md"
                                  : "border-stone-200 bg-stone-50 text-stone-800 hover:border-stone-300"
                              }`}
                            >
                              <div className="space-y-1">
                                <h4 className={`text-xs font-bold uppercase ${active ? "text-[#B5945F]" : "text-stone-900"}`}>
                                  {pkg.name.split(":")[0]}
                                </h4>
                                <p className={`text-[10px] line-clamp-2 leading-relaxed ${active ? "text-stone-300" : "text-stone-500"}`}>
                                  {pkg.idealFor}
                                </p>
                              </div>
                              <div className="pt-2 flex items-baseline justify-between w-full border-t border-stone-200/20">
                                <span className="text-[9px] font-mono tracking-widest uppercase opacity-75">Preço Base</span>
                                <span className="text-xs font-mono font-bold text-[#B5945F]">{pkg.priceString}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Number of Madrinhas */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                          Produção de Madrinhas / Mães das Noivas:
                        </label>
                        <span className="text-xs font-semibold text-[#B5945F] font-mono bg-[#B5945F]/10 px-2 py-0.5 rounded">
                          +{bridalMadrinhasCount} {bridalMadrinhasCount === 1 ? "madrinha" : "madrinhas"} (+R$ {bridalMadrinhasCount * 300})
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-500">
                        Maquiagem e penteado adicionais para mães e assessoras. Unifica o cenário do hotel/ateliê para enriquecer as tomadas dinâmicas do book de noivas.
                      </p>
                      <div className="flex items-center gap-4">
                        <input 
                          type="range"
                          min="0"
                          max="8"
                          value={bridalMadrinhasCount}
                          onChange={(e) => setBridalMadrinhasCount(parseInt(e.target.value))}
                          className="w-full accent-[#B5945F] h-1.5 bg-stone-200 rounded-lg cursor-pointer"
                        />
                        <div className="flex gap-1">
                          {[0, 1, 2, 4, 6].map(num => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setBridalMadrinhasCount(num)}
                              className={`w-6 h-6 rounded-full text-[9px] font-mono flex items-center justify-center border ${
                                bridalMadrinhasCount === num
                                  ? "bg-[#B5945F] border-[#B5945F] text-[#1C1A17] font-bold"
                                  : "border-stone-200 hover:border-stone-400 text-stone-500"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Checkboxes Addons */}
                    <div className="space-y-3 pt-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                        Deseja Acrescentar Serviços & Comodidades ao Orçamento?
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label 
                          className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            bridalIncludeRehearsal 
                              ? "bg-[#B5945F]/5 border-[#B5945F]/40" 
                              : "border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={bridalIncludeRehearsal}
                            onChange={(e) => setBridalIncludeRehearsal(e.target.checked)}
                            className="mt-0.5 rounded text-[#B5945F] focus:ring-[#B5945F]/30 w-4 h-4 accent-[#B5945F]"
                          />
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-stone-900 block">Ensaio Adicional de Penteado (+R$ 350)</span>
                            <span className="text-[10px] text-stone-500 block leading-tight">Garante um segundo evento físico de testes caso você mude de ideia ou estilo de véu.</span>
                          </div>
                        </label>

                        <label 
                          className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            bridalExternalTravel 
                              ? "bg-[#B5945F]/5 border-[#B5945F]/40" 
                              : "border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={bridalExternalTravel}
                            onChange={(e) => setBridalExternalTravel(e.target.checked)}
                            className="mt-0.5 rounded text-[#B5945F] focus:ring-[#B5945F]/30 w-4 h-4 accent-[#B5945F]"
                          />
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-stone-900 block">Atendimento no Local / Hotel (+R$ 600)</span>
                            <span className="text-[10px] text-stone-500 block leading-tight">Deslocamento exclusivo da visagista Beatriz Bittencourt para camarins da noiva na Zona Sul de SP.</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Price Summary Card */}
                  <div className="lg:col-span-5 bg-stone-900 text-stone-200 rounded-2xl p-6 space-y-6 shadow-md border border-stone-850">
                    <div className="space-y-1 pb-4 border-b border-stone-800">
                      <span className="text-[9px] font-mono text-[#B5945F] uppercase tracking-widest font-semibold block">Configuração Customizada</span>
                      <h4 className="text-base font-serif text-white">Resumo do Planejamento</h4>
                    </div>

                    <div className="space-y-3.5 text-xs text-stone-300">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-stone-400">Pacote Principal:</span>
                        <div className="text-right">
                          <span className="font-semibold text-white block">
                            {(BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[1]).name.split(":")[0]}
                          </span>
                          <span className="text-[10px] text-stone-500 block">
                            {(BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[1]).priceString}
                          </span>
                        </div>
                      </div>

                      {bridalMadrinhasCount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-stone-400">Acompanhamento de {bridalMadrinhasCount} {bridalMadrinhasCount === 1 ? "Madrinha" : "Madrinhas"}:</span>
                          <span className="font-semibold text-white">R$ {bridalMadrinhasCount * 300}</span>
                        </div>
                      )}

                      {bridalIncludeRehearsal && (
                        <div className="flex justify-between">
                          <span className="text-stone-400">Segundo Ensaio Penteados:</span>
                          <span className="font-semibold text-white">R$ 350</span>
                        </div>
                      )}

                      {bridalExternalTravel && (
                        <div className="flex justify-between">
                          <span className="text-stone-400">On-Location na Zona Sul SP:</span>
                          <span className="font-semibold text-white">R$ 600</span>
                        </div>
                      )}

                      <div className="pt-4 border-t border-stone-800 space-y-2">
                        <span className="text-[10px] text-stone-500 block uppercase tracking-wide font-mono">Valor de Investimento Estimado</span>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-serif text-[#B5945F] font-bold">
                            R$ {(
                              (bridalPackage === "noiva-essencial" ? 1500 : bridalPackage === "noiva-signature" ? 3900 : 2600) + 
                              (bridalMadrinhasCount * 300) + 
                              (bridalIncludeRehearsal ? 350 : 0) + 
                              (bridalExternalTravel ? 600 : 0)
                            ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </span>
                          <span className="text-[9px] text-[#B5945F] font-mono font-bold bg-[#B5945F]/15 px-2 py-0.5 rounded uppercase">
                            Sem Juros
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-400 leading-normal">
                          Ou parcelado em <span className="text-[#B5945F] font-bold">10 parcelas mensais de R$ {(
                            ((bridalPackage === "noiva-essencial" ? 1500 : bridalPackage === "noiva-signature" ? 3900 : 2600) + 
                             (bridalMadrinhasCount * 300) + 
                             (bridalIncludeRehearsal ? 350 : 0) + 
                             (bridalExternalTravel ? 600 : 0)) / 10
                          ).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> no cartão.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-800 space-y-3">
                      <div className="bg-stone-850 p-3 rounded-lg text-[10px] text-stone-300 space-y-1 leading-relaxed">
                        <p className="font-bold text-[#B5945F] flex items-center gap-1">
                          <CheckCircle2 size={11} /> Incluso no pacote:
                        </p>
                        <ul className="list-disc pl-3.5 space-y-0.5 text-stone-400">
                          {(BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[1]).included.slice(0, 3).map((inc, index) => (
                            <li key={index} className="line-clamp-1">{inc}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const selectedPkg = BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[1];
                          const totalVal = (
                            (bridalPackage === "noiva-essencial" ? 1500 : bridalPackage === "noiva-signature" ? 3900 : 2600) + 
                            (bridalMadrinhasCount * 300) + 
                            (bridalIncludeRehearsal ? 350 : 0) + 
                            (bridalExternalTravel ? 600 : 0)
                          );
                          setSelectedService({
                            id: selectedPkg.id,
                            title: selectedPkg.name.split(":")[0],
                            description: selectedPkg.idealFor,
                            price: `R$ ${totalVal.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}`,
                            duration: "Dia da Noiva",
                            category: "Noivas",
                            tags: selectedPkg.features
                          });
                          setActiveTab("agendamento");
                          setTimeout(() => {
                            const sched = document.getElementById("booking-main-scheduler");
                            sched?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="w-full bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] hover:scale-[1.01] font-semibold py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                      >
                        <Calendar size={13} />
                        Reservar Data do Meu Casamento
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bridal FAQ Accordion Area */}
              <div className="space-y-6 pt-4">
                <div className="max-w-2xl mx-auto text-center space-y-1.5">
                  <span className="text-2xs text-[#B5945F] font-mono uppercase tracking-widest font-bold">Central de Suporte da Noiva</span>
                  <h3 className="text-2xl font-serif text-stone-900 font-medium">Perguntas Frequentes & Valores de Casamento</h3>
                  <p className="text-xs text-stone-500">
                    Esclareça de maneira transparente suas principais dúvidas sobre o book de noivas, os testes de penteados e valores locais na Zona Sul de SP.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-2">
                  {BRIDAL_FAQS.map((faq, index) => {
                    const isOpen = bridalOpenFaq === index;
                    return (
                      <div 
                        key={index} 
                        className="bg-white border border-[#EAE6DD] rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => setBridalOpenFaq(isOpen ? null : index)}
                          className="w-full text-left p-4 flex items-center justify-between gap-4 focus:outline-none"
                        >
                          <span className="text-xs md:text-sm font-bold text-stone-900 flex items-center gap-2">
                            <span className="text-[#B5945F] font-mono font-bold text-[11px]">0{index + 1}.</span>
                            {faq.question}
                          </span>
                          <span className="text-[#B5945F] text-[10px] font-mono font-bold whitespace-nowrap">
                            {isOpen ? "✕ FECHAR" : "🕵️‍♀️ DUVIDAS"}
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="border-[#EAE6DD] border-t"
                            >
                              <p className="p-4 md:p-5 text-xs text-stone-605 leading-relaxed bg-stone-50">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 1: INTEGRATED AI DIAGNOSIS & INTERACTIVE WORKSPACE */}
          {activeTab === "diagnostico" && (
            <motion.div
              key="diagnostico"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              
              {/* Premium Hero Introduction */}
              <div className="bg-gradient-to-br from-[#1C1A17] to-stone-900 text-[#FAF9F5] rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none bg-[radial-gradient(#B5945F_1px,transparent_1px)] [background-size:16px_16px] hidden md:block" />
                
                <div className="max-w-2xl relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-[#B5945F] rounded-full text-2xs tracking-widest uppercase font-mono border border-stone-700">
                    <Sparkles size={11} /> Visagismo Perto de Mim
                  </div>
                  <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
                    Sua imagem é a tradução silenciosa de quem você é.
                  </h1>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                    Com mais de 10 anos de experiência na região de Vila Sofia e Chácara Flora, eu ajudo você a encontrar o equilíbrio perfeito entre seu formato de rosto, comportamento e objetivos pessoais. Faça nossa análise virtual imediata ou agende uma imersão física.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button 
                      onClick={() => {
                        const form = document.getElementById("diagnosis-interactive-form");
                        form?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all inline-flex items-center gap-2"
                    >
                      Mapear Meu Rosto com IA
                      <ChevronRight size={14} />
                    </button>
                    <button 
                      onClick={() => setActiveTab("servicos")}
                      className="bg-transparent hover:bg-stone-800 text-[#EAE6DD] border border-stone-700 px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all"
                    >
                      Ver Preços & Detalhes
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid Section for Questionnaire + Continuous Art Visual Guide */}
              <div id="diagnosis-interactive-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form parameters */}
                <div className="lg:col-span-7 bg-white border border-[#EAE6DD] p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                  <div>
                    <h2 className="text-xl font-serif text-stone-900 tracking-tight flex items-center gap-2">
                      <Camera size={18} className="text-[#B5945F]" />
                      Diagnóstico Personalizado de Imagem
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Preencha os dados abaixo. Nosso motor inteligente traduzirá imediatamente de acordo com os conceitos de temperamento estético.
                    </p>
                  </div>

                  <form onSubmit={runVisagismAnalysis} className="space-y-6">
                    
                    {/* Face Shapes Selection with Custom Lineart Buttons */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                        1. Qual formato de rosto você se identifica melhor?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { 
                            id: "Oval", 
                            label: "Oval", 
                            trait: "Equilíbrio", 
                            svg: <ellipse cx="16" cy="16" rx="9" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          },
                          { 
                            id: "Quadrado", 
                            label: "Quadrado", 
                            trait: "Liderança", 
                            svg: <rect x="7" y="5" width="18" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          },
                          { 
                            id: "Redondo", 
                            label: "Redondo", 
                            trait: "Acolhimento", 
                            svg: <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          },
                          { 
                            id: "Coraçao", 
                            label: "Triangular", 
                            trait: "Sensibilidade", 
                            svg: <polygon points="16,28 7,8 25,8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFaceShape(item.id)}
                            className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                              faceShape === item.id 
                                ? "bg-[#FAF9F5] border-[#B5945F] text-[#B5945F] ring-1 ring-[#B5945F]/30" 
                                : "border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-stone-50"
                            }`}
                          >
                            <svg className="w-8 h-8 text-stone-400 group-hover:text-stone-700" viewBox="0 0 32 32">
                              {item.svg}
                            </svg>
                            <div>
                              <p className="text-xs font-medium text-stone-900">{item.label}</p>
                              <p className="text-[10px] text-stone-500 font-mono">{item.trait}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Desired Intention Chips */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                        2. O que você deseja prioritariamente transmitir?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "💼 Autoridade & Credibilidade Corporativa",
                          "✨ Carisma & Comunicação Dinâmica",
                          "🌿 Leveza, Suavidade & Empatia",
                          "💎 Sofisticação, Elegância & Mistério"
                        ].map((chip) => {
                          const selected = goals === chip;
                          return (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => {
                                setGoals(chip);
                                setCustomGoals("");
                              }}
                              className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                                selected 
                                  ? "bg-[#1C1A17] text-[#FAF9F5] border-[#1C1A17]" 
                                  : "bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-300"
                              }`}
                            >
                              {chip}
                            </button>
                          );
                        })}
                      </div>
                      
                      <input
                        type="text"
                        placeholder="Outra intenção específica? Digite aqui..."
                        value={customGoals}
                        onChange={(e) => {
                          setCustomGoals(e.target.value);
                          setGoals("");
                        }}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none mt-2 text-stone-800"
                      />
                    </div>

                    {/* Physical description text boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-700 block">
                          SUAS CARACTERÍSTICAS FÍSICAS (Cabelo, olhos, etc.):
                        </label>
                        <textarea
                          rows={2}
                          value={features}
                          onChange={(e) => setFeatures(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          placeholder="Ex: Cabelo curto liso escuro, olhos distantes, testa estreita..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-700 block">
                          PREFERÊNCIAS DE MAQUIAGEM E ESTILO:
                        </label>
                        <textarea
                          rows={2}
                          value={makeupPrefs}
                          onChange={(e) => setMakeupPrefs(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          placeholder="Ex: Tons terrosos, delineado fino, batom vermelho em jantares..."
                        />
                      </div>
                    </div>

                    {/* Integrated Camera / Selfie Upload Component */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                        3. Enviar Foto para Análise Avançada (Opcional)
                      </label>
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all relative ${
                          isDragging 
                            ? "border-[#B5945F] bg-[#B5945F]/5"
                            : imagePreview 
                              ? "border-stone-300 bg-stone-50/50" 
                              : "border-stone-200 bg-stone-50 hover:bg-stone-100/50"
                        }`}
                      >
                        {imagePreview ? (
                          <div className="relative inline-block">
                            <img 
                              src={imagePreview} 
                              alt="Selfie para análise" 
                              className="w-24 h-24 object-cover rounded-full border border-stone-300 mx-auto"
                            />
                            <button
                              type="button"
                              onClick={removeSelectedImage}
                              className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow transition-all"
                            >
                              <X size={12} />
                            </button>
                            <p className="text-[11px] text-stone-500 mt-2 font-medium">
                              Foto carregada: {(imageFile?.size ? imageFile.size / 1024 : 0).toFixed(0)} KB • Pronta para o escaneamento
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-500 mx-auto">
                              <Upload size={18} />
                            </div>
                            <div className="text-xs text-stone-600">
                              <label className="cursor-pointer font-semibold text-[#B5945F] hover:underline">
                                Clique para selecionar
                                <input 
                                  type="file" 
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={handleFileChange}
                                />
                              </label>{" "}
                              ou arraste uma foto aqui.
                            </div>
                            <p className="text-[10px] text-stone-400">
                              Para melhor mapeamento, tire uma foto de frente, com rosto neutro e iluminação natural.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 block">
                        OBSERVAÇÕES ADICIONAIS OU DÚVIDAS PARA BEATRIZ:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Sinto que as pessoas me acham brava pelas minhas linhas do rosto, gostaria de suavizar."
                        value={personalNote}
                        onChange={(e) => setPersonalNote(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                      />
                    </div>

                    {/* Trigger Button inside form */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1C1A17] hover:bg-stone-800 text-[#FAF9F5] py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:bg-stone-400"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-stone-400 border-t-white rounded-full animate-spin" />
                          {loadingStep}
                        </>
                      ) : (
                        <>
                          <Sparkles size={14} className="text-[#B5945F]" />
                          Gerar Retrato de Visagismo Inteligente
                        </>
                      )}
                    </button>

                  </form>
                </div>

                {/* Right side: Educational and Archetype introduction with nice illustration */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Real-time coordinates box */}
                  <div className="bg-[#FAF9F5] border border-[#EAE6DD] p-6 rounded-2xl space-y-4">
                    <h3 className="text-sm font-serif font-semibold text-stone-900 tracking-wide uppercase">
                      Teoria de Philip Hallawell
                    </h3>
                    <p className="text-xs leading-relaxed text-stone-600">
                      O visagismo no Brasil foi consolidado por Philip Hallawell, unindo a psicologia de Carl Jung (arquétipos e temperamentos) com a geometria artística de linhas e contornos.
                    </p>
                    <div className="space-y-2 border-t border-stone-200/60 pt-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5945F] mt-1.5" />
                        <span className="text-[11px] text-stone-600"><strong>Linhas Verticais:</strong> Transmitem estrutura, poder, firmeza e autoridade expressiva.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5945F] mt-1.5" />
                        <span className="text-[11px] text-stone-600"><strong>Linhas Horizontais:</strong> Transmitem estabilidade, solidez, tranquilidade e repouso.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5945F] mt-1.5" />
                        <span className="text-[11px] text-stone-600"><strong>Linhas Inclinadas/Diagonais:</strong> Transmitem dinamismo, velocidade, movimento e extroversão solar.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5945F] mt-1.5" />
                        <span className="text-[11px] text-stone-600"><strong>Linhas Curvas:</strong> Transmitem suavidade, acolhimento amoroso, flexibilidade e sensualidade.</span>
                      </div>
                    </div>
                  </div>

                  {/* Why Beatriz Bittencourt Close Hook */}
                  <div className="bg-white border border-[#EAE6DD] p-6 rounded-2xl relative overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-amber-200 to-[#B5945F] absolute top-0 left-0 right-0" />
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-xs tracking-wider uppercase font-semibold text-stone-500">Localização Privilegiada</h4>
                        <p className="text-sm font-serif font-medium text-stone-900 mt-1">Conectada à Vila Sofia & Chácara Flora</p>
                      </div>
                      <MapPin size={18} className="text-[#B5945F]" />
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Livre-se de trânsitos longos. Nosso ateliê privativo está posicionado no coração da Zona Sul de São Paulo, com manobrista e absoluto sigilo para sua transformação de imagem pessoal.
                    </p>
                    <button 
                      onClick={() => setActiveTab("atelie")}
                      className="text-xs text-[#B5945F] font-semibold mt-3 inline-flex items-center gap-1 hover:underline text-left block"
                    >
                      Ver mapa de acesso e contatos
                      <ChevronRight size={12} />
                    </button>
                  </div>

                </div>

              </div>

              {/* Advanced Results Visualization Area with motion */}
              <AnimatePresence>
                {(diagnosisResult || (!loading && diagnosisResult === null)) && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-stone-200/60 pt-6"
                  >
                    {/* If we have a calculated result */}
                    {diagnosisResult ? (
                      <div id="visagism-result-report" className="bg-white border-2 border-[#EAE6DD] rounded-2xl overflow-hidden shadow-lg scroll-m-20">
                        
                        {/* Upper golden border representing luxury assessment */}
                        <div className="bg-[#1C1A17] text-[#FAF9F5] px-6 py-8 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-1">
                            <div className="text-[10px] tracking-widest text-[#B5945F] uppercase font-mono font-bold flex items-center gap-1">
                              <Star size={11} className="fill-amber-400 text-amber-400" /> Diagnóstico Oficial Ateliê Beatriz Bittencourt
                            </div>
                            <h3 className="text-2xl font-serif tracking-tight text-white">
                              Seu Retrato Metamórfico de Expressão
                            </h3>
                            <p className="text-xs text-stone-400">
                              Tratamento exclusivo com base no formato <span className="text-[#FAF9F5] font-semibold underline decoration-[#B5945F]">{faceShape}</span>
                            </p>
                          </div>
                          
                          <div className="bg-stone-800 border border-stone-700 rounded-xl p-3 flex items-center gap-2.5 self-start md:self-auto">
                            <div className="w-10 h-10 rounded-full bg-[#B5945F]/20 text-[#B5945F] flex items-center justify-center">
                              <Smile size={20} />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-stone-400">Temperamento Dominante</p>
                              <p className="text-xs font-semibold text-[#EAE6DD]">{diagnosisResult.temperament.split(" ")[0]}</p>
                            </div>
                          </div>
                        </div>

                        {/* Content inside results */}
                        <div className="p-6 md:p-8 space-y-6">
                          
                          {/* Executive Summary Narrative */}
                          <div className="bg-[#FAF9F5] border border-[#EAE6DD] p-4 md:p-6 rounded-xl space-y-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B5945F]">
                              Carta de Boas-Vindas & Síntese Visual
                            </h4>
                            <p className="text-xs md:text-sm text-stone-800 italic leading-relaxed">
                              "{diagnosisResult.summary}"
                            </p>
                          </div>

                          {/* Grid showing Analysis Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Psycho-Visual Analysis details */}
                            <div className="space-y-4">
                              <div className="space-y-1">
                                <span className="text-[11px] font-mono uppercase text-stone-400">01 / Assinatura de Personalidade</span>
                                <h5 className="text-base font-serif text-stone-900 font-bold flex items-center gap-1.5">
                                  <Compass size={16} className="text-[#B5945F]" />
                                  Temperamento {diagnosisResult.temperament}
                                </h5>
                                <p className="text-xs leading-relaxed text-stone-600">
                                  {diagnosisResult.temperamentDescription}
                                </p>
                              </div>
                              <div className="space-y-1 border-t border-stone-100 pt-3">
                                <span className="text-[11px] font-mono uppercase text-stone-400">02 / Leitura de Geometria</span>
                                <h5 className="text-base font-serif text-stone-900 font-bold flex items-center gap-1.5">
                                  <ChevronRight size={16} className="text-[#B5945F]" />
                                  Leitura de Linhas Faciais
                                </h5>
                                <p className="text-xs leading-relaxed text-stone-600">
                                  {diagnosisResult.facialLines}
                                </p>
                              </div>
                            </div>

                            {/* visual identity & Archetype card */}
                            <div className="bg-[#FAF9F5] border border-[#EAE6DD] rounded-xl p-5 space-y-3 shrink-0">
                              <span className="text-[11px] font-mono uppercase text-stone-400">03 / Posicionamento de Marca</span>
                              <div className="flex items-center gap-2">
                                <div className="p-1 px-2.5 rounded bg-[#1C1A17] text-white text-[10px] font-mono tracking-widest uppercase">
                                  Archetype
                                </div>
                                <h5 className="text-sm font-bold text-stone-900">{diagnosisResult.brandArchetype.split(" - ")[0]}</h5>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">
                                {diagnosisResult.brandArchetype}
                              </p>
                              <div className="border-t border-stone-200/60 pt-3 flex flex-wrap gap-1.5">
                                <span className="text-[10px] bg-white border border-stone-200 rounded px-2 py-0.5 text-stone-700">Comunicação</span>
                                <span className="text-[10px] bg-white border border-stone-200 rounded px-2 py-0.5 text-stone-700">Confiança</span>
                                <span className="text-[10px] bg-white border border-stone-200 rounded px-2 py-0.5 text-[#B5945F] font-semibold">Chácara Flora Studio</span>
                              </div>
                            </div>

                          </div>

                          {/* Interactive tabs for Hair, Makeup, Accessories */}
                          <div className="border-t border-stone-200/60 pt-6">
                            <div className="flex border-b border-stone-200">
                              {[
                                { id: "temperamento", label: "Estilo & Temperamento", icon: Compass },
                                { id: "cabelo", label: "Cortes & Coloração", icon: Scissors },
                                { id: "maquiagem", label: "Maquiagem & Sobrancelhas", icon: Palette },
                                { id: "acessorios", label: "Óculos & Acessórios", icon: Star }
                              ].map((item) => {
                                const Icon = item.icon;
                                const active = selectedDiagnosisTab === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedDiagnosisTab(item.id as any)}
                                    className={`flex items-center gap-1.5 pb-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                                      active 
                                        ? "border-[#B5945F] text-[#B5945F]" 
                                        : "border-transparent text-stone-500 hover:text-stone-800"
                                    }`}
                                  >
                                    <Icon size={14} />
                                    <span className="hidden sm:inline">{item.label}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Tab Content Display */}
                            <div className="py-5">
                              {selectedDiagnosisTab === "temperamento" && (
                                <div className="space-y-3">
                                  <p className="text-xs text-stone-500">Mapeamento empírico feito de acordo com as teorias clássicas e sua imagem autodeclarada:</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {TEMPERAMENTS.map((t) => {
                                      const isDominant = diagnosisResult.temperament.toLowerCase().includes(t.name.toLowerCase());
                                      return (
                                        <div key={t.name} className={`p-4 rounded-xl border transition-all ${
                                          isDominant 
                                            ? "bg-[#B5945F]/5 border-[#B5945F]/40 shadow-sm" 
                                            : "bg-white border-stone-100 opacity-60"
                                        }`}>
                                          <div className="flex items-center justify-between">
                                            <h6 className="text-xs font-bold uppercase tracking-wider text-stone-800">{t.name}</h6>
                                            <span className="text-[10px] text-stone-400 font-mono font-semibold uppercase">{t.element}</span>
                                          </div>
                                          <div className="flex flex-wrap gap-1 my-2">
                                            {t.traits.map(tr => (
                                              <span key={tr} className="text-[9px] bg-stone-100 rounded px-1.5 py-0.5 text-stone-600">{tr}</span>
                                            ))}
                                          </div>
                                          <p className="text-[11px] text-stone-500 leading-relaxed">{t.visualLines}</p>
                                          {isDominant && (
                                            <div className="mt-2 text-[10px] text-[#B5945F] font-semibold flex items-center gap-1">
                                              <CheckCircle2 size={11} /> Seu perfil de beleza proeminente
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {selectedDiagnosisTab === "cabelo" && (
                                <div className="space-y-4">
                                  <h6 className="text-xs font-bold uppercase tracking-wide text-stone-800">Direcionamento de Corte, Volume e Cor:</h6>
                                  <div className="space-y-2.5">
                                    {diagnosisResult.hairRecommendations.map((rec, idx) => (
                                      <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
                                        <div className="w-5 h-5 rounded bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 text-xs font-mono">
                                          {idx + 1}
                                        </div>
                                        <p className="text-xs text-stone-700 leading-relaxed">{rec}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedDiagnosisTab === "maquiagem" && (
                                <div className="space-y-4">
                                  <h6 className="text-xs font-bold uppercase tracking-wide text-stone-800">Maquiagem Estrutural, Sobrancelhas e Tons:</h6>
                                  <div className="space-y-2.5">
                                    {diagnosisResult.makeupRecommendations.map((rec, idx) => (
                                      <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
                                        <div className="w-5 h-5 rounded bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 text-xs font-mono">
                                          {idx + 1}
                                        </div>
                                        <p className="text-xs text-stone-700 leading-relaxed">{rec}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedDiagnosisTab === "acessorios" && (
                                <div className="space-y-4">
                                  <h6 className="text-xs font-bold uppercase tracking-wide text-stone-800">Armações de Óculos, Brincos e Linha de Colo:</h6>
                                  <div className="space-y-2.5">
                                    {diagnosisResult.accessoriesRecommendations.map((rec, idx) => (
                                      <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
                                        <div className="w-5 h-5 rounded bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 text-xs font-mono">
                                          {idx + 1}
                                        </div>
                                        <p className="text-xs text-stone-700 leading-relaxed">{rec}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Quick conversion hook */}
                          <div className="bg-[#1C1A17] text-white rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="space-y-1 text-center md:text-left">
                              <h5 className="text-sm font-serif font-semibold text-white">Quer validar este diagnóstico presencialmente com teste de doze estações?</h5>
                              <p className="text-xs text-stone-400">Clientes que realizam a consultoria Master recebem abatimento parcial no teste complementar.</p>
                            </div>
                            <button
                              onClick={() => {
                                const svc = SERVICES.find(s => s.id === "consultoria-master") || SERVICES[0];
                                triggerBookingForService(svc);
                              }}
                              className="bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] font-semibold text-xs uppercase px-4 py-2.5 rounded-lg whitespace-nowrap transition-all"
                            >
                              Reservar Vaga Presencial perto de mim
                            </button>
                          </div>

                        </div>

                      </div>
                    ) : (
                      <div className="bg-[#FAF9F5] border border-dashed border-stone-300 rounded-2xl p-10 text-center space-y-2">
                        <Sparkles size={24} className="text-[#B5945F] mx-auto opacity-40 animate-pulse" />
                        <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Aguardando Parâmetros</p>
                        <p className="text-[11px] text-stone-400 max-w-md mx-auto">
                          Seu relatório de visagismo profissional aparecerá neste setor após você clicar no botão "Gerar Retrato" acima.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}

          {/* TAB 2: LUXURIOUS SERVICE LISTING */}
          {activeTab === "servicos" && (
            <motion.div
              key="servicos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs tracking-wider uppercase font-mono text-[#B5945F] font-semibold">Tabela de Serviços Autoral</span>
                <h2 className="text-3xl font-serif text-stone-950">Seu Equilíbrio e Brilho Pessoal</h2>
                <p className="text-xs text-stone-500">
                  Preços transparentes com foco em personalização extrema. Atendimento exclusivo em ateliê reservado perto de você (Chácara Flora/Vila Sofia).
                </p>
              </div>

              {/* Service Grid Card showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service) => (
                  <div 
                    key={service.id} 
                    className="bg-white border border-[#EAE6DD] rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#B5945F]/30"
                  >
                    <div className="space-y-4">
                      {/* Badge / Category */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center text-xs text-stone-500 gap-1 font-mono">
                          <Clock size={12} className="text-stone-400" />
                          {service.duration}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-base font-serif font-bold text-stone-950 group-hover:text-[#B5945F]">{service.title}</h4>
                        <p className="text-xs text-stone-650 leading-relaxed line-clamp-4">{service.description}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.tags.map(tag => (
                          <span key={tag} className="text-[9px] bg-[#FAF9F5] rounded border border-stone-200/60 px-1.5 py-0.5 text-stone-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-stone-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase font-mono">Valor da Sessão</p>
                        <p className="text-lg font-bold font-mono text-stone-900">{service.price}</p>
                      </div>
                      <button
                        onClick={() => triggerBookingForService(service)}
                        className="bg-[#1C1A17] hover:bg-stone-800 text-[#FAF9F5] px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        Reservar Vaga
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Guarantee or Safety notice */}
              <div className="bg-[#FAF9F5] border border-[#EAE6DD] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex gap-4 items-start text-left">
                  <div className="p-3 bg-white border border-[#EAE6DD] rounded-xl text-[#B5945F] shrink-0">
                    <Heart size={20} className="fill-[#B5945F]/10" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-serif font-bold text-stone-900">Satisfação Estética Garantida</h5>
                    <p className="text-xs text-stone-600 max-w-xl leading-relaxed">
                      Todas as consultorias de corte são precedidas por um detalhamento em realidade ou modelagem fotográfica em alta fidelidade. Nós não cortamos sem que você compreenda e decida com absoluta clareza de intenção.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab("atelie")}
                  className="bg-stone-200 hover:bg-stone-300/80 text-stone-800 text-xs px-4 py-2.5 rounded-lg uppercase tracking-wider font-semibold transition-all whitespace-nowrap"
                >
                  Saiba Mais sobre a Teoria
                </button>
              </div>

            </motion.div>
          )}

          {/* TAB 3: SCHEDULER & BOOKING SYSTEM */}
          {activeTab === "agendamento" && (
            <motion.div
              key="agendamento"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs tracking-wider uppercase font-mono text-[#B5945F] font-semibold">Agendamento Exclusivo</span>
                <h2 className="text-3xl font-serif text-stone-950">Inicie Sua Nova Imagem</h2>
                <p className="text-xs text-stone-500">
                  Selecione abaixo o serviço, data e hora que melhor se adaptam à sua rotina. Confirmaremos de imediato em seu celular.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Columns: Form Scheduler */}
                <div className="lg:col-span-8 bg-white border border-[#EAE6DD] p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                  
                  <nav className="flex items-center gap-1.5 pb-3 border-b border-stone-100">
                    <div className="w-5 h-5 bg-[#B5945F] rounded-full text-white text-[10px] font-mono flex items-center justify-center font-bold">1</div>
                    <span className="text-xs font-semibold text-stone-800">Preencha Seus Dados Presenciais</span>
                  </nav>

                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    
                    {/* Select service dropdown inside scheduler */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 block uppercase">
                        Serviço Selecionado:
                      </label>
                       <select 
                        value={selectedService.id}
                        onChange={(e) => {
                          const foundGeneral = SERVICES.find(s => s.id === e.target.value);
                          if (foundGeneral) {
                            setSelectedService(foundGeneral);
                          } else {
                            const foundBridal = BRIDAL_PACKAGES.find(bp => bp.id === e.target.value);
                            if (foundBridal) {
                              setSelectedService({
                                id: foundBridal.id,
                                title: foundBridal.name.split(":")[0],
                                description: foundBridal.idealFor,
                                price: foundBridal.priceString,
                                duration: "Dia da Noiva",
                                category: "Noivas",
                                tags: foundBridal.features
                              });
                            }
                          }
                        }}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                      >
                        <optgroup label="Serviços Gerais de Cabelo">
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.title} — {s.price} ({s.duration})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Assessoria & Dia da Noiva">
                          {BRIDAL_PACKAGES.map(bp => (
                            <option key={bp.id} value={bp.id}>
                              {bp.name} — {bp.priceString} (Dia Todo)
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    {/* Date and Time selectors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-700 block uppercase">
                          Escolha a Data da Consulta:
                        </label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-700 block uppercase">
                          Horários Disponíveis (Terça a Sábado):
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((slot) => {
                            const isSelected = bookingTime === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setBookingTime(slot)}
                                className={`py-2 rounded-lg text-xs font-mono font-semibold transition-all border ${
                                  isSelected 
                                    ? "bg-[#B5945F] text-[#1C1A17] border-[#B5945F]" 
                                    : "bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Personal customer info */}
                    <div className="space-y-3.5 border-t border-stone-100 pt-4">
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-700 block">
                          NOME COMPLETO:
                        </label>
                        <div className="relative">
                          <User size={13} className="absolute left-3 top-2.5 text-stone-400" />
                          <input
                            type="text"
                            required
                            placeholder="Digite seu nome"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-stone-50 border border-[#EAE6DD] rounded-lg pl-9 pr-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-700 block">
                            E-MAIL:
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="seu@email.com"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full bg-stone-50 border border-[#EAE6DD] rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-700 block">
                            CELULAR / WHATSAPP:
                          </label>
                          <div className="relative">
                            <Phone size={13} className="absolute left-3 top-2.5 text-stone-400" />
                            <input
                              type="tel"
                              required
                              placeholder="(11) 99999-9999"
                              value={clientPhone}
                              onChange={(e) => setClientPhone(e.target.value)}
                              className="w-full bg-stone-50 border border-[#EAE6DD] rounded-lg pl-9 pr-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                            />
                          </div>
                        </div>

                      </div>

                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1C1A17] hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={14} className="text-[#B5945F]" />
                      Confirmar Reserva No Ateliê Presencial
                    </button>

                    <div className="flex items-center my-4">
                      <div className="flex-1 border-t border-stone-200"></div>
                      <span className="px-3 text-stone-400 text-[9px] font-mono uppercase tracking-widest">ou converse diretamente</span>
                      <div className="flex-1 border-t border-stone-200"></div>
                    </div>

                    <a
                      href="https://api.whatsapp.com/send?phone=5511992279655&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20agendar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enviar Mensagem WhatsApp
                    </a>

                  </form>
                </div>

                {/* Right Columns: Active Reservations / Dashboard (stored locally) */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Active List Box */}
                  <div className="bg-white border border-[#EAE6DD] p-5 rounded-2xl space-y-4">
                    <h3 className="text-xs tracking-wider uppercase font-semibold text-stone-400">
                      Meus Agendamentos Locais
                    </h3>
                    
                    {appointments.length > 0 ? (
                      <div className="space-y-3">
                        {appointments.map((app) => (
                          <div key={app.id} className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2.5 relative">
                            <button
                              onClick={() => cancelAppointment(app.id)}
                              className="absolute top-2.5 right-2.5 text-stone-400 hover:text-red-500 transition-all"
                              title="Cancelar agendamento"
                            >
                              <X size={14} />
                            </button>

                            <div className="space-y-1">
                              <span className="text-[9px] bg-[#B5945F]/15 text-stone-700 font-bold px-2 py-0.5 rounded uppercase">
                                {app.status}
                              </span>
                              <h5 className="text-xs font-serif font-bold text-stone-900 mt-1">{app.serviceTitle}</h5>
                            </div>

                            <div className="space-y-1 text-[11px] text-stone-500 font-medium">
                              <p className="flex items-center gap-1">
                                <Calendar size={11} className="text-stone-400" />
                                Data: {app.date.split("-").reverse().join("/")}
                              </p>
                              <p className="flex items-center gap-1">
                                <Clock size={11} className="text-stone-400" />
                                Horário: {app.timeSlot}h
                              </p>
                              <p className="flex items-center gap-1">
                                <MapPin size={11} className="text-[#B5945F]" />
                                Rua Dr. Ferreira Lopes, 703 - Jardim Marajoara
                              </p>
                            </div>

                            <div className="border-t border-stone-200/50 pt-2 text-[10px] text-stone-400">
                              Agendado em: {app.createdAt}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-stone-400 space-y-1.5">
                        <Calendar size={22} className="mx-auto opacity-30" />
                        <p className="text-xs font-semibold text-stone-400 uppercase">Nenhuma Reserva Ativa</p>
                        <p className="text-[10px] text-stone-400 max-w-xs mx-auto">
                          Seus horários reservados aparecerão aqui após utilizar o formulário ao lado.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Contact Info card */}
                  <div className="bg-[#1C1A17] text-stone-300 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs text-[#B5945F] uppercase font-mono font-semibold tracking-wider">Suporte Direto</h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Prefere agendar via telefone ou tirar dúvidas específicas sobre as estações cromáticas com a Beatriz?
                    </p>
                    <div className="space-y-2 pt-1">
                      <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FAF9F5] hover:underline">
                        <Phone size={12} className="text-[#B5945F]" />
                        {STUDIO_INFO.phone}
                      </a>
                      <a href={`https://instagram.com/${STUDIO_INFO.instagram.replace('@', '')}`} target="_blank" className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FAF9F5] hover:underline">
                        <Instagram size={12} className="text-[#B5945F]" />
                        {STUDIO_INFO.instagram}
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 4: THE STUDIO CORES, INFOS & FAQ */}
          {activeTab === "atelie" && (
            <motion.div
              key="atelie"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              
              {/* Studio Details / Geographic Presence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Physical information of Chácara Flora */}
                <div className="bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs tracking-wider uppercase font-mono text-[#B5945F]">Ateliê Autorizado</span>
                      <h3 className="text-2xl font-serif text-stone-950 mt-1">Região de Vila Sofia & Chácara Flora</h3>
                    </div>
                    
                    <p className="text-xs text-stone-605 leading-relaxed">
                      Nosso espaço foi idealizado para proporcionar uma imersão sensorial de alto padrão. Cada detalhe, desde a iluminação laboratorial calibrada (5500K - ideal para análise fiel de tecidos) até o silêncio e o conforto de nossas salas individuais, foi planejado para colocar sua autoestima em primeiro plano.
                    </p>

                    <div className="space-y-3.5 border-t border-stone-100 pt-5">
                      <div className="flex items-start gap-2 text-xs">
                        <MapPin size={15} className="text-[#B5945F] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-stone-900">{STUDIO_INFO.address}</p>
                          <p className="text-stone-500">{STUDIO_INFO.city}</p>
                          <a 
                            href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Ferreira+Lopes,+703+-+Jardim+Marajoara,+S%C3%A3o+Paulo+-+SP,+04671-011" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B5945F] hover:text-[#9A7D4C] mt-1.5 transition-colors group"
                          >
                            <span>Abrir no Google Maps</span>
                            <span className="text-[10px] transform group-hover:translate-x-0.5 transition-transform">↗</span>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <Clock size={15} className="text-[#B5945F] shrink-0 mt-0.5" />
                        <div>
                          {STUDIO_INFO.hours.map(h => (
                            <p key={h.days} className="text-stone-700">
                              <strong className="text-stone-900">{h.days}:</strong> {h.time}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-5 flex items-center gap-3">
                    <a 
                      href={`https://wa.me/5511987540321`} 
                      target="_blank" 
                      className="bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs font-semibold px-4 py-2.5 rounded-lg uppercase tracking-wider transition-all inline-flex items-center gap-2"
                    >
                      WhatsApp Ateliê
                    </a>
                    <button 
                      onClick={() => setActiveTab("agendamento")}
                      className="bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] font-sans text-xs font-bold px-4 py-2.5 rounded-lg uppercase tracking-wider transition-all"
                    >
                      Reservar Diagnóstico
                    </button>
                  </div>
                </div>

                {/* Map Simulator illustration */}
                <div className="bg-gradient-to-br from-[#1C1A17] to-stone-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg select-none min-h-[350px]">
                  
                  {/* Stylized local micro map element constructed from clean divs */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#B5945F] uppercase font-bold">Mapa da Região Zona Sul</span>
                    <h4 className="text-base font-serif font-semibold text-white">Chácara Flora e Vila Sofia</h4>
                  </div>

                  <div className="bg-stone-800 border border-stone-700 rounded-xl p-4 my-4 relative overflow-hidden h-48 flex items-center justify-center">
                    
                    {/* Simulated visual geographic grid representing local neighborhoods */}
                    <div className="absolute inset-0 opacity-10 flex flex-col justify-between p-2 pointer-events-none">
                      <div className="h-[1px] bg-white w-full" />
                      <div className="h-[1px] bg-white w-full" />
                      <div className="h-[1px] bg-white w-full" />
                      <div className="h-[1px] bg-white w-full" />
                      <div className="h-[1px] bg-white w-full" />
                    </div>
                    
                    {/* Visual road simulations */}
                    <div className="absolute top-2/3 left-0 w-full h-[2px] bg-[#B5945F]/30 transform -rotate-12 pointer-events-none" />
                    <div className="absolute top-0 left-1/3 w-[2px] h-full bg-[#B5945F]/30 transform rotate-45 pointer-events-none" />

                    {/* Neighborhood Label elements */}
                    <div className="absolute top-4 left-4 text-[10px] text-stone-500 bg-stone-900/60 p-1 px-1.5 rounded uppercase tracking-wider font-semibold">
                      Vila Sofia
                    </div>
                    <div className="absolute bottom-4 right-4 text-[10px] text-stone-500 bg-stone-900/60 p-1 px-1.5 rounded uppercase tracking-wider font-semibold">
                      Chácara Flora
                    </div>

                    {/* Central active studio point */}
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Ferreira+Lopes,+703+-+Jardim+Marajoara,+S%C3%A3o+Paulo+-+SP,+04671-011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-center space-y-1.5 z-10 block group cursor-pointer"
                      title="Clique para rotas no Google Maps"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#B5945F]/20 text-[#B5945F] border border-[#B5945F]/60 flex items-center justify-center mx-auto animate-bounce group-hover:bg-[#B5945F]/30 group-hover:scale-105 transition-all">
                        <MapPin size={18} />
                      </div>
                      <p className="text-xs font-semibold text-[#FAF9F5] group-hover:text-[#B5945F] transition-colors">Ateliê Beatriz Bittencourt</p>
                      <p className="text-[9px] text-[#B5945F] font-mono uppercase tracking-wide underline decoration-dotted">Rua Dr. Ferreira Lopes, 703 ↗</p>
                    </a>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-850/70 pt-4">
                    <div className="text-[11px] text-stone-400 leading-relaxed font-mono">
                      <span className="text-[#B5945F] font-bold">●</span> Distância a pé de Vila Sofia: 4 min <br />
                      <span className="text-[#B5945F] font-bold">●</span> Distância de carro da Chácara Flora: 2 min
                    </div>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Ferreira+Lopes,+703+-+Jardim+Marajoara,+S%C3%A3o+Paulo+-+SP,+04671-011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#B5945F] hover:bg-[#A38250] text-[#1C1A17] font-mono text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                    >
                      <span>Como Chegar</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>

              </div>

              {/* Guia de Acesso e Distâncias */}
              <div className="bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-xs tracking-wider uppercase font-mono text-[#B5945F]">Acessibilidade & Praticidade Local</span>
                  <h3 className="text-xl font-serif text-stone-950 mt-1">Como Chegar ao Nosso Ateliê</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Nosso ateliê de visagismo, corte feminino e barbearia boutique está estrategicamente posicionado próximo aos maiores pontos de referência da Zona Sul. Economize tempo de trânsito em São Paulo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                  {LOCAL_SEO_REGIONS.map((region, idx) => (
                    <div 
                      key={idx} 
                      className="group border border-stone-100 hover:border-[#B5945F]/30 bg-stone-50/40 hover:bg-white rounded-xl p-4 transition-all duration-300 flex flex-col justify-between hover:shadow-xs"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-[#B5945F]/10 text-stone-700 text-[10px] font-mono font-bold tracking-wide">
                            {region.distance}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono italic">
                            {region.transport}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#B5945F] transition-colors uppercase tracking-wide">
                          {region.landmark}
                        </h4>
                        <p className="text-[11px] text-stone-500 leading-relaxed font-semibold">
                          {region.context}
                        </p>
                      </div>

                      <div className="border-t border-stone-100 mt-3 pt-2">
                        <div className="flex flex-wrap gap-1">
                          {region.seoKeywords.map((keyword, kIdx) => (
                            <span 
                              key={kIdx} 
                              className="text-[9px] bg-stone-100 text-[#B5945F] font-semibold px-1.5 py-0.5 rounded font-mono"
                            >
                              #{keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Micro distance converter / interactivity */}
                <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                      <span>📍 Atendimento VIP com hora marcada e total privacidade</span>
                    </p>
                    <p className="text-[11px] text-stone-600">
                      Evite as esperas e o incômodo dos salões tradicionais do bairro. Reservas exclusivas garantem pontualidade, privacidade e atendimento especializado com café gourmet.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("agendamento")}
                    className="bg-[#1C1A17] hover:bg-stone-850 text-white font-mono text-[10px] font-bold px-4 py-2.5 rounded-lg uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border border-transparent hover:border-[#B5945F]/30"
                  >
                    Ver Horários Livres
                  </button>
                </div>
              </div>

              {/* Local SEO Customer Testimonials Section */}
              <div className="bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-5">
                  <div className="space-y-1.5">
                    <span className="text-xs tracking-wider uppercase font-mono text-[#B5945F]">Excelência Comprovada Perto de Você</span>
                    <h3 className="text-2xl font-serif text-stone-950">Avaliações de Clientes da Região</h3>
                    <p className="text-xs text-stone-600">
                      Depoimentos reais de clientes satisfeitos nas proximidades do Jardim Marajoara, Chácara Flora, Vila Sofia e Alto da Boa Vista.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-stone-50 border border-stone-200/60 px-4 py-2.5 rounded-xl shrink-0 self-start md:self-auto">
                    <div className="text-right">
                      <div className="flex items-center gap-0.5 justify-end">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={13} className="text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                      <p className="text-[10px] uppercase font-mono text-stone-500 tracking-wider mt-0.5">4.9 / 5.0 base local</p>
                    </div>
                    <span className="h-8 w-px bg-stone-200" />
                    <div>
                      <p className="text-xl font-serif font-black text-stone-900 leading-none">100%</p>
                      <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1">
                        <CheckCircle2 size={10} /> Recomendado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Filters Tab */}
                <div className="space-y-3">
                  <p className="text-[10px] text-stone-500 uppercase font-mono tracking-widest font-bold">Filtrar depoimentos por localização aproximada:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Todos", "Jardim Marajoara", "Chácara Flora", "Vila Sofia", "Alto da Boa Vista"].map((loc) => {
                      const count = loc === "Todos" 
                        ? testimonials.length 
                        : testimonials.filter((t: any) => t.location.toLowerCase().includes(loc.toLowerCase())).length;

                      return (
                        <button
                          key={loc}
                          onClick={() => setSelectedRegionFilter(loc)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                            selectedRegionFilter === loc
                              ? "bg-[#1C1A17] text-[#B5945F] border-[#1C1A17] shadow-xs"
                              : "bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200/60"
                          }`}
                        >
                          {loc} <span className="opacity-60 text-[10px] font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial Cards Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials
                    .filter((t: any) => {
                      if (selectedRegionFilter === "Todos") return true;
                      return t.location.toLowerCase().includes(selectedRegionFilter.toLowerCase());
                    })
                    .map((item: any) => (
                      <div 
                        key={item.id}
                        className="bg-stone-50/50 border border-stone-100 hover:border-[#B5945F]/30 hover:bg-white rounded-xl p-5 md:p-6 space-y-4 flex flex-col justify-between transition-all duration-300 relative group shadow-2xs"
                      >
                        <span className="absolute top-4 right-4 bg-[#B5945F]/10 text-stone-850 text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                          {item.source}
                        </span>

                        <div className="space-y-3">
                          {/* Stars */}
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                size={12} 
                                className={`${i < item.rating ? "text-amber-500 fill-amber-500" : "text-stone-200"}`} 
                              />
                            ))}
                          </div>

                          {/* Review quote */}
                          <p className="text-xs text-stone-700 italic leading-relaxed font-medium">
                            "{item.text}"
                          </p>
                        </div>

                        {/* Customer Meta */}
                        <div className="border-t border-stone-100/80 pt-4 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#1C1A17] text-[#B5945F] font-mono text-xs font-bold flex items-center justify-center">
                            {item.name.charAt(0)}
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold text-stone-900 leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-[#B5945F] font-semibold tracking-wide flex items-center gap-1">
                              <span>{item.service}</span>
                            </p>
                            <p className="text-[10px] text-stone-500 font-mono tracking-wider flex items-center gap-1 mt-0.5">
                              <MapPin size={9} className="text-[#B5945F]" />
                              <span>{item.location}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* User Input: Leave custom local review */}
                <div className="border-t border-stone-100 pt-8 mt-4">
                  <div className="bg-stone-50/50 border border-stone-200/50 rounded-2xl p-5 md:p-6 space-y-5">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#B5945F] font-bold">Conte-nos sua Experiência</h4>
                      <h3 className="text-lg font-serif text-stone-950 mt-0.5">Já nos visitou a poucos metros de sua casa? Deixe sua avaliação</h3>
                      <p className="text-xs text-stone-605">
                        Sua opinião ajuda a consolidar nossa excelência em visagismo, coloração pessoal e barber shop na Zona Sul de SP.
                      </p>
                    </div>

                    <form onSubmit={handleCreateReview} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 col-span-1">
                        <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono tracking-wider">
                          Seu Nome Completo *
                        </label>
                        <input 
                          type="text"
                          required
                          value={newReviewName}
                          onChange={(e) => setNewReviewName(e.target.value)}
                          placeholder="Ex: Amanda R. Silveira"
                          className="w-full bg-white border border-stone-200/80 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-855"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 col-span-1">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono tracking-wider">
                            Sua Localidade *
                          </label>
                          <select 
                            value={newReviewLocation}
                            onChange={(e) => setNewReviewLocation(e.target.value)}
                            className="w-full bg-white border border-stone-200/80 rounded-lg px-2.5 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                          >
                            <option value="Jardim Marajoara">Jardim Marajoara</option>
                            <option value="Chácara Flora">Chácara Flora</option>
                            <option value="Vila Sofia">Vila Sofia</option>
                            <option value="Alto da Boa Vista">Alto da Boa Vista</option>
                            <option value="Santo Amaro">Santo Amaro</option>
                            <option value="Outro Bairro">Outro Bairro (Zona Sul)</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono tracking-wider">
                            Nota da Experiência *
                          </label>
                          <select 
                            value={newReviewRating}
                            onChange={(e) => setNewReviewRating(Number(e.target.value))}
                            className="w-full bg-white border border-stone-200/80 rounded-lg px-2.5 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-amber-600 font-bold"
                          >
                            <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                            <option value="4">⭐⭐⭐⭐ (4/5)</option>
                            <option value="3">⭐⭐⭐ (3/5)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5 col-span-1 md:col-span-2">
                        <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono tracking-wider">
                          Serviço Aproveitado *
                        </label>
                        <select 
                          value={newReviewService}
                          onChange={(e) => setNewReviewService(e.target.value)}
                          className="w-full bg-white border border-stone-200/80 rounded-lg px-2.5 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-800"
                        >
                          <option value="Corte de Cabelo Feminino (Corte)">Corte de Cabelo Feminino (Corte)</option>
                          <option value="Mechas e Iluminação Capilar (Mechas)">Mechas e Iluminação Capilar (Mechas)</option>
                          <option value="Coloração Capilar Profissional (Coloração)">Coloração Capilar Profissional (Coloração)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 col-span-1 md:col-span-2">
                        <label className="text-[10px] font-bold text-stone-600 block uppercase font-mono tracking-wider">
                          Seu Relato / Opinião *
                        </label>
                        <textarea 
                          required
                          rows={3}
                          value={newReviewText}
                          onChange={(e) => setNewReviewText(e.target.value)}
                          placeholder="Ex: Como moradora da Chácara Flora a 200 metros daqui, adorei o serviço de corte de cabelo feminino. O atendimento é primoroso e bem discreto."
                          className="w-full bg-white border border-stone-200/80 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F] outline-none text-stone-850 resize-y"
                        />
                      </div>

                      <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                        <p className="text-[10px] text-stone-500 font-mono italic">
                          * Dados confidenciais. Seu e-mail não será compartilhado publicamente.
                        </p>
                        <button
                          type="submit"
                          className="bg-[#1C1A17] hover:bg-stone-850 text-[#FAF9F5] font-mono text-[10px] uppercase font-bold tracking-wider px-5 py-2.5 rounded-lg border border-transparent hover:border-[#B5945F]/30 transition-all shadow-xs w-full sm:w-auto text-center"
                        >
                          Publicar Avaliação Local
                        </button>
                      </div>
                    </form>

                    {reviewSubmitMessage && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-800 text-[10px] font-semibold text-center uppercase tracking-wide"
                      >
                        {reviewSubmitMessage}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#B5945F]" />
                  <h3 className="text-lg font-serif text-stone-950">Dúvidas Frequentes</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {FAQ.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5945F]" />
                        {item.question}
                      </h4>
                      <p className="text-[11px] text-stone-600 leading-relaxed pl-3.5">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Main luxury footer */}
      <footer className="bg-[#1C1A17] text-stone-400 text-xs border-t border-stone-850 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-serif tracking-widest text-[#FAF9F5]">
                  BEATRIZ BITTENCOURT
                </span>
              </div>
              <p className="text-[#FAF9F5]/60 max-w-sm leading-relaxed text-[11px]">
                Especialista em visagismo integrado e colorimetria com foco no empoderamento estético da mulher contemporânea em São Paulo, SP.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <h5 className="text-[10px] text-[#B5945F] font-mono tracking-widest uppercase font-bold">Atendimento Presencial</h5>
              <p className="text-[#FAF9F5]/70 text-[11px] leading-relaxed">
                Rua Dr. Ferreira Lopes, 703 - Jardim Marajoara<br />
                Zona Sul, São Paulo - SP, CEP 04671-011
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h5 className="text-[10px] text-[#B5945F] font-mono tracking-widest uppercase font-bold font-bold">Conexões Digitais</h5>
              <div className="space-y-1.5">
                <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#FAF9F5] transition-all">
                  <Phone size={11} className="text-[#B5945F]" />
                  {STUDIO_INFO.phone}
                </a>
                <a href={`https://instagram.com/${STUDIO_INFO.instagram.replace('@', '')}`} target="_blank" className="flex items-center gap-1.5 hover:text-[#FAF9F5] transition-all">
                  <Instagram size={11} className="text-[#B5945F]" />
                  {STUDIO_INFO.instagram}
                </a>
              </div>
            </div>

          </div>

          {/* Guia de Localidades e Serviços de Destaque */}
          <div className="border-t border-stone-850/70 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-3">
              <h6 className="text-[10px] text-[#B5945F] font-mono tracking-widest uppercase font-bold">Bairros Atendidos na Zona Sul de SP</h6>
              <p className="text-[10px] text-[#FAF9F5]/50 leading-relaxed">
                Atendemos clientes masculinos e femininos com alto padrão de visagismo em toda a Zona Sul de São Paulo. Se você procura uma <strong>visagista perto de mim</strong> ou <strong>barbearia perto de mim</strong> com design de barba visagista, nosso ateliê unificado é ideal para residentes de:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Jardim Marajoara", "Chácara Flora", "Vila Sofia", "Alto da Boa Vista", "Santo Amaro", "Brooklin", "Campo Belo", "Panamby", "Morumbi", "Moema"].map((bairro) => (
                  <span key={bairro} className="text-[9px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-0.5 rounded-full hover:border-[#B5945F]/40 transition-colors">
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h6 className="text-[10px] text-[#B5945F] font-mono tracking-widest uppercase font-bold">Nossas Principais Especialidades</h6>
              <ul className="text-[10px] text-stone-500 space-y-1 leading-normal list-none pl-0">
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#B5945F] rounded-full" />
                  <span><strong>Cabeleireira, visagista perto de mim</strong> em Jardim Marajoara e Chácara Flora</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#B5945F] rounded-full" />
                  <span><strong>Aplicação de mechas perto de mim</strong> na Zona Sul de São Paulo / Vila Sofia</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#B5945F] rounded-full" />
                  <span><strong>Cortes de cabelo feminino perto de mim</strong> com visagismo integrado</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#B5945F] rounded-full" />
                  <span><strong>Barbeiro e barbearia perto de mim</strong> no Jardim Marajoara e Chácara Flora</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h6 className="text-[10px] text-[#B5945F] font-mono tracking-widest uppercase font-bold">Tecnologia, Visagismo & Conveniência</h6>
              <p className="text-[10px] text-stone-500 leading-relaxed">
                Desenvolvemos este portal oficial integrado com Inteligência Artificial para facilitar o agendamento de consultas de imagem, cortes masculinos, design de barba com visagismo, corte feminino e colorimetria capilar próximos à sua localização, reduzindo seu tempo de deslocamento no trânsito de São Paulo e garantindo atendimento especializado de nível internacional perto de sua residência.
              </p>
            </div>

          </div>

          <div className="border-t border-stone-800/80 pt-6 text-center text-[10px] text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Beatriz Bittencourt Visagismo, Estética & Barbearia Premium. Todos os direitos reservados.</p>
            <p className="font-mono text-[9px] text-[#B5945F]">Jardim Marajoara • Chácara Flora • Vila Sofia • Santo Amaro</p>
          </div>

        </div>
      </footer>

      {/* Booking confirmation modal popup */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#EAE6DD] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl p-6 relative"
            >
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-all"
              >
                <X size={18} />
              </button>

              <div className="text-center space-y-4 pt-4">
                
                <div className="w-12 h-12 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-serif font-bold text-stone-900">Reserva Confirmada!</h4>
                  <p className="text-xs text-stone-500">
                    Sua vaga presencial com Beatriz Bittencourt foi enviada e confirmada.
                  </p>
                </div>

                <div className="bg-stone-55 border border-stone-100 rounded-xl p-4 text-left text-xs space-y-1.5 text-stone-700 font-medium">
                  <p><strong className="text-stone-900">Serviço:</strong> {selectedService.title}</p>
                  <p><strong className="text-stone-900">Data e Hora:</strong> {bookingDate.split("-").reverse().join("/")} às {bookingTime}h</p>
                  <p><strong className="text-stone-900">Nome:</strong> {clientName}</p>
                  <p><strong className="text-stone-900">Telefone:</strong> {clientPhone}</p>
                  <p><strong className="text-stone-900">Local:</strong> {STUDIO_INFO.address}</p>
                </div>

                <p className="text-[10px] text-stone-400 uppercase tracking-wide">
                  Enviaremos dicas preparatórias em seu WhatsApp para a sessão!
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?phone=5511992279655&text=Olá, vim através do site, gostaria de agendar. Meu nome é ${encodeURIComponent(clientName)}, para o serviço ${encodeURIComponent(selectedService.title)} no dia ${encodeURIComponent(bookingDate.split("-").reverse().join("/"))} às ${encodeURIComponent(bookingTime)}h.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-[#1C1A17] font-semibold text-xs uppercase py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Confirmar via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="w-full bg-[#1C1A17] hover:bg-stone-800 text-[#FAF9F5]/75 font-semibold text-xs uppercase py-2.5 rounded-lg transition-all"
                  >
                    Fechar e Voltar
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp reservation button on entire project */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        <span className="pointer-events-none opacity-0 translate-x-2 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-x-0 bg-[#1C1A17] text-[#B5945F] text-[10px] uppercase font-mono tracking-wider px-3 py-1.5 rounded-lg shadow-xl border border-[#FAF9F5]/10 whitespace-nowrap">
          Agendar pelo WhatsApp
        </span>
        
        <a
          href="https://api.whatsapp.com/send?phone=5511992279655&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20agendar."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba59] text-[#1C1A17] hover:text-[#1C1A17] p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform md:hover:scale-115 relative group"
          aria-label="Agendar via WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10"></span>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
