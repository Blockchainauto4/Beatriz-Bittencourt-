import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  Instagram, 
  Heart, 
  Scissors, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Star, 
  Search, 
  MessageCircle, 
  CreditCard, 
  ShieldCheck,
  Check,
  Send,
  Navigation,
  Compass
} from "lucide-react";
import { 
  SERVICES, 
  STUDIO_INFO, 
  FAQ, 
  CLIENT_TESTIMONIALS, 
  BRIDAL_PACKAGES 
} from "./data";
import { Service, Appointment } from "./types";

const bridalHairstyle = "/src/assets/images/bride_back_updo_1781965445461.jpg";
const bridalPreparation = "/src/assets/images/bride_sitting_stairs_1781965459138.jpg";
const bridalPhotoshoot = "/src/assets/images/three_brides_studio_1781965473262.jpg";

export default function App() {
  // Navigation section
  const [activeSection, setActiveSection] = useState<"servicos" | "noivas" | "agendamento" | "salao" | "faq">("servicos");

  // Filter & Search states for Services
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Booking states
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);
  const [bookingDate, setBookingDate] = useState<string>("");
  const [bookingTime, setBookingTime] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientNotes, setClientNotes] = useState<string>("");
  const [bookingSuccessModal, setBookingSuccessModal] = useState<boolean>(false);
  const [bookedAppointment, setBookedAppointment] = useState<Appointment | null>(null);

  // Time Slots
  const TIME_SLOTS = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  // Bridal calculator states
  const [bridalPackage, setBridalPackage] = useState<string>("pacote-noiva-servico-prova");
  const [bridalMadrinhasCount, setBridalMadrinhasCount] = useState<number>(0);
  const [bridalIncludeRehearsal, setBridalIncludeRehearsal] = useState<boolean>(false);
  const [bridalPaymentMethod, setBridalPaymentMethod] = useState<"parcelado" | "vista">("parcelado");

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Testimonials state
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

  // Submit review form
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewLocation, setNewReviewLocation] = useState("Jardim Marajoara");
  const [newReviewService, setNewReviewService] = useState("Corte Feminino + Escova");
  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [reviewSubmitMessage, setReviewSubmitMessage] = useState("");

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) {
      alert("Por favor, preencha o seu nome e sua mensagem.");
      return;
    }

    const created = {
      id: "review-" + Date.now(),
      name: newReviewName,
      role: "Cliente",
      location: `${newReviewLocation}`,
      service: newReviewService,
      rating: newReviewRating,
      text: newReviewText,
      source: "Site Oficial",
      date: "Recentemente"
    };

    const updated = [created, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem("beatriz_testimonials", JSON.stringify(updated));

    setNewReviewName("");
    setNewReviewText("");
    setReviewSubmitMessage("Obrigada! Sua avaliação foi enviada com sucesso.");
    setTimeout(() => setReviewSubmitMessage(""), 5000);
  };

  // Categories list
  const CATEGORIES = [
    { id: "Todos", label: "Todos os Serviços" },
    { id: "Corte & Finalização", label: "✂️ Corte & Escova" },
    { id: "Coloração", label: "🎨 Coloração" },
    { id: "Blond & Mechas", label: "✨ Blond & Mechas" },
    { id: "Transformação", label: "💎 Progressiva & Botox" },
    { id: "Tratamentos", label: "🌿 Tratamentos" },
    { id: "Noivas & Eventos", label: "💄 Noivas & Madrinhas" },
    { id: "Barbearia", label: "💈 Corte Masculino" }
  ];

  // Filtered services
  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "Todos" || service.category === selectedCategory;
    const matchesSearch = !searchTerm.trim() || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Direct WhatsApp booking URL generator
  const getWhatsAppBookingLink = (serviceTitle: string, price: string) => {
    const text = encodeURIComponent(
      `Olá, Beatriz! Gostaria de agendar o serviço: ${serviceTitle} (${price}). Vi no seu site e gostaria de saber as datas disponíveis.`
    );
    return `https://wa.me/${STUDIO_INFO.whatsapp}?text=${text}`;
  };

  // Select service and scroll to booking form
  const handleSelectServiceForBooking = (service: Service) => {
    setSelectedService(service);
    setActiveSection("agendamento");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit on-site appointment
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime || !clientName || !clientPhone) {
      alert("Por favor, preencha todos os campos obrigatórios (Data, Horário, Nome e WhatsApp).");
      return;
    }

    const appointment: Appointment = {
      id: "apt-" + Date.now(),
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      date: bookingDate,
      timeSlot: bookingTime,
      clientName: clientName,
      clientEmail: clientEmail,
      clientPhone: clientPhone,
      status: "Confirmado",
      createdAt: new Date().toLocaleDateString("pt-BR")
    };

    setBookedAppointment(appointment);
    setBookingSuccessModal(true);
  };

  // WhatsApp confirmation text from appointment form
  const sendAppointmentWhatsApp = () => {
    if (!bookedAppointment) return;
    const text = encodeURIComponent(
      `Olá, Beatriz! Acabei de fazer um pré-agendamento no seu site:\n\n` +
      `📌 *Serviço:* ${bookedAppointment.serviceTitle}\n` +
      `📅 *Data:* ${bookedAppointment.date}\n` +
      `⏰ *Horário:* ${bookedAppointment.timeSlot}\n` +
      `👤 *Nome:* ${bookedAppointment.clientName}\n` +
      `📱 *WhatsApp:* ${bookedAppointment.clientPhone}\n` +
      (clientNotes ? `💬 *Observação:* ${clientNotes}\n\n` : `\n`) +
      `Podemos confirmar esse horário?`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsapp}?text=${text}`, "_blank");
  };

  // Calculate Bridal Total
  const selectedBridalPkg = BRIDAL_PACKAGES.find(p => p.id === bridalPackage) || BRIDAL_PACKAGES[0];
  const bridalPackagePrice = selectedBridalPkg.price;
  const bridalMadrinhasPrice = bridalMadrinhasCount * 650;
  const bridalRehearsalPrice = bridalIncludeRehearsal ? 500 : 0;
  const bridalSubtotal = bridalPackagePrice + bridalMadrinhasPrice + bridalRehearsalPrice;
  const bridalPixDiscount = bridalPaymentMethod === "vista" ? bridalSubtotal * 0.10 : 0;
  const bridalTotal = bridalSubtotal - bridalPixDiscount;
  const bridalInstallment = bridalSubtotal / 3;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased selection:bg-[#B5945F]/20 selection:text-stone-900">
      
      {/* Top Info Bar */}
      <div className="bg-[#1C1A17] text-[#EAE6DD] text-xs py-2 px-4 border-b border-[#33302B]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <MapPin size={13} className="text-[#B5945F] shrink-0" />
            <span>The Place Salon • Rua Dr. Ferreira Lopes, 703 - Jd. Marajoara, São Paulo - SP</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium text-[#B5945F]">
            <span className="flex items-center gap-1">
              <CreditCard size={12} />
              Cartões em até 3x
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Desconto à vista no PIX</span>
            <span>•</span>
            <a 
              href={`https://wa.me/${STUDIO_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 text-[#EAE6DD]"
            >
              <Phone size={12} className="text-[#B5945F]" />
              (11) 99227-9655
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-stone-200/80 bg-white/95 sticky top-0 z-40 backdrop-blur-md shadow-xs">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-serif tracking-widest text-[#1C1A17] font-semibold">
                BEATRIZ BITTENCOURT
              </h1>
              <span className="h-4 w-[1px] bg-stone-300 hidden sm:inline" />
              <span className="text-[11px] tracking-widest uppercase text-[#B5945F] font-mono font-semibold hidden sm:inline">
                Visagismo & Beleza
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5 tracking-wide">
              Cuidado, técnica e personalização para realçar a sua beleza.
            </p>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: "servicos", label: "Serviços & Preços", icon: Scissors },
              { id: "noivas", label: "Noivas & Madrinhas", icon: Heart },
              { id: "agendamento", label: "Agendar Horário", icon: Calendar },
              { id: "salao", label: "O Salão", icon: MapPin },
              { id: "faq", label: "Dúvidas & Avaliações", icon: Star }
            ].map(tab => {
              const Icon = tab.icon;
              const active = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                    active 
                      ? "bg-[#1C1A17] text-[#FAF9F5] shadow-sm font-semibold"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  <Icon size={14} className={active ? "text-[#B5945F]" : "text-stone-400"} />
                  {tab.label}
                </button>
              );
            })}

            {/* Direct WhatsApp Call Button */}
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent("Olá, Beatriz! Gostaria de informações sobre horários e serviços.")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 ml-1 shadow-xs"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
        
        {/* ============================================================== */}
        {/* SECTION 1: SERVIÇOS & TABELA DE PREÇOS (PRINCIPAL) */}
        {/* ============================================================== */}
        {activeSection === "servicos" && (
          <motion.div
            key="servicos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {/* Hero Welcome Banner */}
            <div className="relative bg-gradient-to-br from-[#1C1A17] via-[#26231F] to-[#1C1A17] text-[#FAF9F5] rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden border border-[#3D3831]">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800/90 text-[#B5945F] rounded-full text-xs font-mono tracking-wider uppercase border border-stone-700">
                  <Sparkles size={13} className="text-[#B5945F]" />
                  <span>Atendimento com Hora Marcada • Sala Privativa</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight leading-tight">
                  Serviços Oficiais & Preços Transparentes
                </h2>

                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  Consulte abaixo todos os serviços prestados pela visagista <strong>Beatriz Bittencourt</strong> no <strong>The Place Salon</strong> (Jardim Marajoara, próximo à Chácara Flora e Vila Sofia). Valores claros, atendimento individual e sem complicações.
                </p>

                {/* Benefits Badges */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CreditCard size={13} className="text-[#B5945F]" />
                    Cartões em até 3x
                  </span>
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#B5945F]" />
                    Produtos Profissionais TRUSS & Orgânicos
                  </span>
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#B5945F]" />
                    Estacionamento de cortesia no local
                  </span>
                </div>
              </div>
            </div>

            {/* Banner Especial Promocional: BLOND EXPERIENCE */}
            <div className="bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 border-2 border-[#B5945F]/50 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-[#B5945F] text-[#1C1A17] text-xs font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  ⭐ Destaque Promocional por Tempo Limitado
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1C1A17]">
                  BLOND EXPERIENCE — Transformação Completa
                </h3>
                <p className="text-stone-700 text-xs md:text-sm max-w-2xl leading-relaxed">
                  O pacote completo para o loiro perfeito: mechas completas com protetor contra quebra + corte feminino + tonalização na cor desejada + tratamento profundo de nutrição + escova luxuosa com acabamento impecável.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
                  <span className="text-stone-400 line-through text-sm font-medium">De R$ 1.500</span>
                  <span className="text-2xl md:text-3xl font-bold text-stone-900 font-serif">Por R$ 1.200</span>
                  <span className="text-xs bg-[#1C1A17] text-[#FAF9F5] px-2 py-0.5 rounded-md font-mono">
                    Até 3x no cartão
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
                <a
                  href={getWhatsAppBookingLink("BLOND EXPERIENCE (Promoção De R$ 1.500 por R$ 1.200)", "R$ 1.200")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle size={15} />
                  Garantir Promoção no WhatsApp
                </a>
                <button
                  onClick={() => {
                    const blondExp = SERVICES.find(s => s.id === "blond-experience");
                    if (blondExp) handleSelectServiceForBooking(blondExp);
                  }}
                  className="bg-[#1C1A17] hover:bg-stone-800 text-white font-medium text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar size={15} className="text-[#B5945F]" />
                  Reservar Horário
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 md:p-6 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-serif font-semibold text-stone-900">
                    O que você gostaria de fazer hoje?
                  </h3>
                  <p className="text-xs text-stone-500">
                    Escolha uma categoria abaixo ou busque pelo nome do serviço:
                  </p>
                </div>

                {/* Search input */}
                <div className="relative w-full md:w-72">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar corte, mechas, progressiva..."
                    className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F] focus:border-[#B5945F]"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CATEGORIES.map(category => {
                  const isSelected = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected 
                          ? "bg-[#1C1A17] text-[#FAF9F5] shadow-xs font-semibold"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">
                  Mostrando <strong>{filteredServices.length}</strong> serviços disponíveis:
                </span>
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <CreditCard size={13} className="text-[#B5945F]" />
                  Parcelamento em até 3x sem juros
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredServices.map(service => (
                  <div
                    key={service.id}
                    className={`bg-white border rounded-2xl p-5 shadow-xs transition-all hover:shadow-md flex flex-col justify-between ${
                      service.isPromo 
                        ? "border-[#B5945F] ring-1 ring-[#B5945F]/30" 
                        : "border-stone-200/90"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B5945F] bg-[#B5945F]/10 px-2.5 py-0.5 rounded-md">
                          {service.category}
                        </span>
                        
                        <div className="flex items-center gap-1.5">
                          {service.isPromo && (
                            <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-md uppercase">
                              Promoção
                            </span>
                          )}
                          {service.isPopular && !service.isPromo && (
                            <span className="text-[10px] bg-stone-800 text-amber-300 font-medium px-2 py-0.5 rounded-md">
                              ⭐ Mais Pedido
                            </span>
                          )}
                          <span className="text-xs text-stone-500 flex items-center gap-1 font-mono">
                            <Clock size={12} />
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                          {service.title}
                        </h4>
                        <div className="text-right shrink-0">
                          {service.originalPrice && (
                            <span className="text-xs text-stone-400 line-through block font-medium">
                              {service.originalPrice}
                            </span>
                          )}
                          <span className="text-lg font-bold text-[#1C1A17] font-serif block">
                            {service.price}
                          </span>
                          <span className="text-[10px] text-stone-500 font-mono block">
                            em até 3x
                          </span>
                        </div>
                      </div>

                      {/* Clear Client Description */}
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* What's included (Protocol) */}
                      {service.protocol && (
                        <div className="bg-stone-50 border border-stone-100 rounded-xl p-2.5 space-y-1">
                          <span className="text-[10px] uppercase font-bold text-stone-500 font-mono tracking-wider block">
                            O que está incluso:
                          </span>
                          <p className="text-xs text-stone-700 font-medium flex items-start gap-1.5">
                            <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{service.protocol}</span>
                          </p>
                        </div>
                      )}

                      {/* Service Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {service.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-4 mt-3 border-t border-stone-100">
                      <a
                        href={getWhatsAppBookingLink(service.title, service.price)}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <MessageCircle size={14} className="text-emerald-600" />
                        <span>Agendar WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleSelectServiceForBooking(service)}
                        className="bg-[#1C1A17] hover:bg-stone-800 text-white py-2.5 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all text-center shadow-xs"
                      >
                        <Calendar size={14} className="text-[#B5945F]" />
                        <span>Reservar Horário</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center space-y-3">
                  <p className="text-sm text-stone-600">
                    Nenhum serviço encontrado para "<strong>{searchTerm}</strong>".
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Todos");
                    }}
                    className="text-xs font-semibold text-[#B5945F] underline"
                  >
                    Ver todos os serviços
                  </button>
                </div>
              )}
            </div>

            {/* Quick Consultation CTA */}
            <div className="bg-[#1C1A17] text-[#FAF9F5] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3D3831]">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-lg md:text-xl font-serif font-bold">
                  Tem alguma dúvida sobre qual serviço é o ideal para o seu cabelo?
                </h4>
                <p className="text-xs md:text-sm text-stone-300">
                  Converse diretamente com a Beatriz no WhatsApp. Ela analisa o seu objetivo e indica o melhor cuidado.
                </p>
              </div>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent("Olá, Beatriz! Gostaria de tirar uma dúvida sobre qual serviço fazer no meu cabelo.")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shrink-0 shadow-sm"
              >
                <MessageCircle size={15} />
                Tirar Dúvida no WhatsApp
              </a>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* SECTION 2: NOIVAS & MADRINHAS */}
        {/* ============================================================== */}
        {activeSection === "noivas" && (
          <motion.div
            key="noivas"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {/* Header Bridal */}
            <div className="relative bg-gradient-to-br from-[#1C1A17] via-[#2A2621] to-[#1C1A17] text-[#FAF9F5] rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden border border-[#3D3831]">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800/90 text-[#B5945F] rounded-full text-xs font-mono tracking-wider uppercase border border-stone-700">
                  <Heart size={13} className="text-[#B5945F]" />
                  <span>Dia da Noiva • Madrinhas • Mães dos Noivos</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight leading-tight">
                  Produções Inesquecíveis para o seu Casamento
                </h2>

                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  Penteados de alta fixação, maquiagem à prova de lágrimas e atendimento acolhedor em camarim reservado. Pacotes completos com prova antecipada e condições de parcelamento em até 3x.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    Maquiagem à prova d'água e lágrimas
                  </span>
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    Penteado firme para dançar a noite toda
                  </span>
                  <span className="bg-stone-800/80 border border-stone-700 text-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    Camarim para Making Of
                  </span>
                </div>
              </div>
            </div>

            {/* Bridal Packages Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-stone-900 text-center md:text-left">
                Tabela Oficial de Noivas & Eventos
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {BRIDAL_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`bg-white border rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                      pkg.id === "pacote-noiva-servico-prova"
                        ? "border-[#B5945F] ring-2 ring-[#B5945F]/30"
                        : "border-stone-200"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        {pkg.id === "pacote-noiva-servico-prova" ? (
                          <span className="text-[10px] font-mono font-bold uppercase bg-[#B5945F] text-[#1C1A17] px-2.5 py-0.5 rounded-md">
                            ⭐ Escolha Mais Segura
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono font-semibold uppercase text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                            Pacote Oficial
                          </span>
                        )}
                        <span className="text-xs text-stone-500 font-mono">
                          Até 3x no cartão
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg font-serif font-bold text-stone-900">
                          {pkg.name}
                        </h4>
                        <div className="mt-1">
                          <span className="text-2xl font-bold font-serif text-[#1C1A17]">
                            {pkg.priceString}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {pkg.idealFor}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-stone-100">
                        <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">
                          O que está incluído:
                        </span>
                        {pkg.included.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                            <Check size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-stone-100">
                      <a
                        href={getWhatsAppBookingLink(pkg.name, pkg.priceString)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#1C1A17] hover:bg-stone-800 text-white font-medium text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                      >
                        <MessageCircle size={14} className="text-[#B5945F]" />
                        Consultar Data no WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bridal Calculator */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900">
                  Simulador de Orçamento para o Dia do Casamento
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Selecione o seu pacote e a quantidade de madrinhas para ver o valor total estimado:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {/* Select Bridal Package */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Pacote da Noiva:
                    </label>
                    <select
                      value={bridalPackage}
                      onChange={(e) => setBridalPackage(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                    >
                      {BRIDAL_PACKAGES.map((bp) => (
                        <option key={bp.id} value={bp.id}>
                          {bp.name} — {bp.priceString}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Madrinhas Counter */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-stone-700">
                        Quantidade de Madrinhas / Convidadas (R$ 650 cada):
                      </label>
                      <span className="text-xs font-bold text-[#B5945F]">
                        {bridalMadrinhasCount} {bridalMadrinhasCount === 1 ? "madrinha" : "madrinhas"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={bridalMadrinhasCount}
                      onChange={(e) => setBridalMadrinhasCount(Number(e.target.value))}
                      className="w-full accent-[#B5945F]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>0</span>
                      <span>5</span>
                      <span>10 madrinhas</span>
                    </div>
                  </div>

                  {/* Rehearsal add-on check */}
                  {bridalPackage !== "pacote-noiva-servico-prova" && (
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="checkRehearsal"
                        checked={bridalIncludeRehearsal}
                        onChange={(e) => setBridalIncludeRehearsal(e.target.checked)}
                        className="rounded accent-[#B5945F]"
                      />
                      <label htmlFor="checkRehearsal" className="text-xs text-stone-700 cursor-pointer">
                        Incluir Prova de Make + Penteado antecipada (+ R$ 500)
                      </label>
                    </div>
                  )}

                  {/* Payment Method */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Forma de Pagamento Preferida:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setBridalPaymentMethod("parcelado")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          bridalPaymentMethod === "parcelado"
                            ? "bg-[#1C1A17] text-white border-[#1C1A17]"
                            : "bg-stone-50 text-stone-600 border-stone-200"
                        }`}
                      >
                        Cartão (Até 3x)
                      </button>
                      <button
                        type="button"
                        onClick={() => setBridalPaymentMethod("vista")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          bridalPaymentMethod === "vista"
                            ? "bg-emerald-700 text-white border-emerald-700 font-semibold"
                            : "bg-stone-50 text-stone-600 border-stone-200"
                        }`}
                      >
                        PIX (10% de Desconto)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculation Summary Card */}
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold block">
                      Resumo da Simulação:
                    </span>

                    <div className="flex justify-between text-xs text-stone-600">
                      <span>{selectedBridalPkg.name}:</span>
                      <span className="font-semibold text-stone-800">R$ {bridalPackagePrice}</span>
                    </div>

                    {bridalMadrinhasCount > 0 && (
                      <div className="flex justify-between text-xs text-stone-600">
                        <span>{bridalMadrinhasCount}x Madrinhas (R$ 650):</span>
                        <span className="font-semibold text-stone-800">R$ {bridalMadrinhasPrice}</span>
                      </div>
                    )}

                    {bridalIncludeRehearsal && bridalPackage !== "pacote-noiva-servico-prova" && (
                      <div className="flex justify-between text-xs text-stone-600">
                        <span>Prova Antecipada de Noiva:</span>
                        <span className="font-semibold text-stone-800">R$ 500</span>
                      </div>
                    )}

                    {bridalPaymentMethod === "vista" && (
                      <div className="flex justify-between text-xs text-emerald-700 font-medium">
                        <span>Desconto de 10% no PIX:</span>
                        <span>- R$ {bridalPixDiscount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="border-t border-stone-200 pt-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-stone-800 uppercase">Total Estimado:</span>
                        <span className="text-2xl font-serif font-bold text-[#1C1A17]">
                          R$ {bridalTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      {bridalPaymentMethod === "parcelado" && (
                        <p className="text-[11px] text-stone-500 text-right mt-1">
                          ou 3x de <strong>R$ {bridalInstallment.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong> no cartão
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                      `Olá, Beatriz! Gostaria de consultar a disponibilidade para o Dia da Noiva:\n\n` +
                      `💍 *Pacote:* ${selectedBridalPkg.name}\n` +
                      `👥 *Madrinhas:* ${bridalMadrinhasCount}\n` +
                      `💳 *Pagamento:* ${bridalPaymentMethod === "vista" ? "À vista via PIX (com 10% desc)" : "Cartão em até 3x"}\n` +
                      `💰 *Valor Total Estimado:* R$ ${bridalTotal.toFixed(2)}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageCircle size={15} />
                    Enviar Proposta no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Photos Gallery */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Registros de Noivas no Salão
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200">
                  <img src={bridalHairstyle} alt="Penteado de noiva" className="w-full h-56 object-cover" />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-stone-800">Penteado com Visagismo</p>
                    <p className="text-[11px] text-stone-500 mt-0.5">Sustentação máxima para grinalda e véu.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200">
                  <img src={bridalPreparation} alt="Preparação de noiva" className="w-full h-56 object-cover" />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-stone-800">Camarim Reservado</p>
                    <p className="text-[11px] text-stone-500 mt-0.5">Ambiente tranquilo para relaxar e fotografar o Making Of.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200">
                  <img src={bridalPhotoshoot} alt="Noivas e Madrinhas" className="w-full h-56 object-cover" />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-stone-800">Noivas & Madrinhas</p>
                    <p className="text-[11px] text-stone-500 mt-0.5">Harmonia visual entre noiva, mãe e acompanhantes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* SECTION 3: AGENDAMENTO ONLINE */}
        {/* ============================================================== */}
        {activeSection === "agendamento" && (
          <motion.div
            key="agendamento"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs max-w-3xl mx-auto space-y-6">
              <div className="text-center max-w-lg mx-auto space-y-2">
                <span className="text-xs font-mono uppercase text-[#B5945F] font-bold tracking-wider">
                  Reserve com Antecedência
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900">
                  Agende o seu Atendimento com a Beatriz
                </h2>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Preencha o formulário abaixo para reservar o seu horário no salão. Você também pode finalizar a confirmação imediatamente pelo WhatsApp.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                {/* 1. Escolha do Serviço */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 block">
                    1. Escolha o Serviço Desejado:
                  </label>
                  <select
                    value={selectedService.id}
                    onChange={(e) => {
                      const found = SERVICES.find(s => s.id === e.target.value);
                      if (found) setSelectedService(found);
                    }}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                  >
                    <optgroup label="✂️ Corte & Finalização">
                      {SERVICES.filter(s => s.category === "Corte & Finalização").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎨 Coloração">
                      {SERVICES.filter(s => s.category === "Coloração").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="✨ Blond & Mechas">
                      {SERVICES.filter(s => s.category === "Blond & Mechas").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💎 Transformação (Progressiva & Botox)">
                      {SERVICES.filter(s => s.category === "Transformação").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🌿 Tratamentos Capilares">
                      {SERVICES.filter(s => s.category === "Tratamentos").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💄 Noivas & Eventos">
                      {SERVICES.filter(s => s.category === "Noivas & Eventos").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💈 Corte Masculino">
                      {SERVICES.filter(s => s.category === "Barbearia").map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                  </select>

                  {/* Selected service preview box */}
                  <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-stone-900 block">{selectedService.title}</span>
                      <span className="text-stone-500 text-[11px]">{selectedService.protocol || selectedService.description}</span>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-sm font-bold font-serif text-[#1C1A17] block">{selectedService.price}</span>
                      <span className="text-[10px] text-stone-500">em até 3x</span>
                    </div>
                  </div>
                </div>

                {/* 2. Data e Horário */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">
                      2. Data da sua Preferência:
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                      required
                    />
                    <span className="text-[10px] text-stone-500 block">
                      Atendimento de Terça a Sábado.
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">
                      3. Horário Disponível:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = bookingTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingTime(slot)}
                            className={`py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
                              isSelected
                                ? "bg-[#1C1A17] text-white border-[#1C1A17]"
                                : "bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. Seus Dados */}
                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <label className="text-xs font-semibold text-stone-700 block">
                    4. Seus Dados para Contato:
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Seu Nome Completo *"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="WhatsApp / Telefone com DDD *"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="E-mail (opcional)"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                    />
                  </div>

                  <div>
                    <textarea
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      rows={2}
                      placeholder="Alguma observação sobre seu cabelo ou preferência especial? (opcional)"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#B5945F]"
                    />
                  </div>
                </div>

                {/* Payment reminder */}
                <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-3 flex items-center justify-between text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CreditCard size={15} className="text-[#B5945F]" />
                    <span>Pagamento no dia: <strong>Cartão em até 3x</strong> ou <strong>PIX</strong></span>
                  </div>
                  <span className="text-[11px] text-stone-500">Sem cobrança online antecipada</span>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1C1A17] hover:bg-stone-800 text-white font-medium text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Calendar size={15} className="text-[#B5945F]" />
                    Confirmar Pré-Agendamento
                  </button>

                  <a
                    href={getWhatsAppBookingLink(selectedService.title, selectedService.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm text-center"
                  >
                    <MessageCircle size={15} />
                    Agendar Direto no WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* SECTION 4: O SALÃO & LOCALIZAÇÃO */}
        {/* ============================================================== */}
        {activeSection === "salao" && (
          <motion.div
            key="salao"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Salon Presentation */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono uppercase text-[#B5945F] font-bold tracking-wider">
                  The Place Salon • Jardim Marajoara
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
                  Um Espaço Aconchegante e Reservado para Você
                </h2>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                  A visagista <strong>Beatriz Bittencourt</strong> atende em sala privativa dentro do tradicional <strong>The Place Salon</strong>, oferecendo um atendimento calmo, sem barulho excessivo e com total dedicação ao seu visual.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 text-center space-y-1">
                  <span className="text-lg">🚗</span>
                  <p className="text-xs font-semibold text-stone-800">Estacionamento</p>
                  <p className="text-[10px] text-stone-500">Vagas de cortesia no local</p>
                </div>

                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 text-center space-y-1">
                  <span className="text-lg">☕</span>
                  <p className="text-xs font-semibold text-stone-800">Café & Conforto</p>
                  <p className="text-[10px] text-stone-500">Ambiente climatizado e aconchegante</p>
                </div>

                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 text-center space-y-1">
                  <span className="text-lg">💳</span>
                  <p className="text-xs font-semibold text-stone-800">Facilidade</p>
                  <p className="text-[10px] text-stone-500">Cartões em até 3x e PIX</p>
                </div>

                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 text-center space-y-1">
                  <span className="text-lg">⭐</span>
                  <p className="text-xs font-semibold text-stone-800">Nota 4.7★</p>
                  <p className="text-[10px] text-stone-500">+230 avaliações no Google</p>
                </div>
              </div>

              {/* Address and Map box */}
              <div className="bg-[#1C1A17] text-[#FAF9F5] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3D3831]">
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[#B5945F] text-xs font-mono">
                    <MapPin size={14} />
                    <span>ENDEREÇO OFICIAL</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold">
                    Rua Dr. Ferreira Lopes, 703 — Piso Térreo
                  </h3>
                  <p className="text-xs text-stone-300">
                    Jardim Marajoara, São Paulo - SP, CEP 04671-011<br />
                    (Perto da Chácara Flora, Vila Sofia, Escola Suíço-Brasileira e Colégio Chapel)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
                  <a
                    href={STUDIO_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white hover:bg-stone-100 text-stone-900 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <Navigation size={14} className="text-[#B5945F]" />
                    Abrir no Google Maps
                  </a>
                  <a
                    href={STUDIO_INFO.wazeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2D2A26] hover:bg-stone-800 text-white border border-stone-700 px-4 py-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <Compass size={14} className="text-[#B5945F]" />
                    Abrir no Waze
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="border-t border-stone-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono mb-2">
                  Horários de Atendimento (Com hora marcada):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <strong>Terça a Sexta-feira:</strong> 09:00 às 19:00
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <strong>Sábados:</strong> 09:00 às 16:00
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-stone-400">
                    <strong>Domingo e Segunda:</strong> Fechado
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* SECTION 5: DÚVIDAS & AVALIAÇÕES */}
        {/* ============================================================== */}
        {activeSection === "faq" && (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {/* FAQ Section */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#B5945F] font-bold tracking-wider">
                  Tire Suas Dúvidas
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Perguntas Mais Frequentes das Clientes
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Respostas simples e diretas sobre os procedimentos, pagamentos e agendamentos:
                </p>
              </div>

              <div className="space-y-3">
                {FAQ.map((faqItem, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-stone-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-stone-50 hover:bg-stone-100/80 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-stone-900">
                          {faqItem.question}
                        </span>
                        <ChevronDown 
                          size={16} 
                          className={`text-stone-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#B5945F]" : ""}`} 
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                          {faqItem.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#B5945F] font-bold tracking-wider">
                  Experiências Reais
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  O que Nossas Clientes Dizem
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.slice(0, 6).map((item: any, idx: number) => (
                  <div key={idx} className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} size={13} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono">{item.source || "Google"}</span>
                      </div>
                      <p className="text-xs text-stone-700 italic leading-relaxed">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="border-t border-stone-100 pt-2.5">
                      <p className="text-xs font-semibold text-stone-900">{item.name}</p>
                      <p className="text-[10px] text-stone-500">{item.service} • {item.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form to leave a review */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-4 max-w-xl mx-auto">
                <h4 className="text-sm font-serif font-bold text-stone-900 text-center">
                  Já foi atendida pela Beatriz? Deixe sua avaliação:
                </h4>

                {reviewSubmitMessage && (
                  <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs p-3 rounded-xl text-center">
                    {reviewSubmitMessage}
                  </div>
                )}

                <form onSubmit={handleCreateReview} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newReviewName}
                      onChange={(e) => setNewReviewName(e.target.value)}
                      placeholder="Seu nome"
                      className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      value={newReviewLocation}
                      onChange={(e) => setNewReviewLocation(e.target.value)}
                      placeholder="Seu bairro (ex: Chácara Flora)"
                      className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newReviewService}
                      onChange={(e) => setNewReviewService(e.target.value)}
                      placeholder="Serviço feito (ex: Mechas)"
                      className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none"
                    />
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Estrelas)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Estrelas)</option>
                      <option value={3}>⭐⭐⭐ (3 Estrelas)</option>
                    </select>
                  </div>

                  <textarea
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    rows={3}
                    placeholder="Conte como foi sua experiência..."
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#1C1A17] hover:bg-stone-800 text-white font-medium text-xs py-2.5 rounded-xl transition-all"
                  >
                    Publicar Avaliação
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

      </main>

      {/* Booking Success Modal */}
      {bookingSuccessModal && bookedAppointment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Pré-Agendamento Registrado!
              </h3>
              <p className="text-xs text-stone-600">
                Olá, <strong>{bookedAppointment.clientName}</strong>! Seu pedido para o dia <strong>{bookedAppointment.date}</strong> às <strong>{bookedAppointment.timeSlot}</strong> foi salvo.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Serviço:</span>
                <span className="font-semibold text-stone-900">{bookedAppointment.serviceTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Local:</span>
                <span className="font-semibold text-stone-900">Rua Dr. Ferreira Lopes, 703</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Pagamento:</span>
                <span className="font-semibold text-stone-900">No dia (em até 3x ou PIX)</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={sendAppointmentWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle size={15} />
                Confirmar Imediatamente no WhatsApp
              </button>

              <button
                onClick={() => setBookingSuccessModal(false)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs py-2.5 rounded-xl transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button for Easy Access */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent("Olá, Beatriz! Gostaria de agendar um horário com você.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold pr-1">
          Falar com a Beatriz
        </span>
      </a>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white mt-16 text-xs text-stone-600">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="space-y-2 md:col-span-2">
              <span className="text-base font-serif font-bold text-stone-900 tracking-wider">
                BEATRIZ BITTENCOURT
              </span>
              <p className="text-xs text-stone-500 max-w-md leading-relaxed">
                Cuidado, técnica e personalização para realçar a sua beleza. Atendimento de salão de beleza no Jardim Marajoara (divisa com Chácara Flora e Vila Sofia), Zona Sul de São Paulo.
              </p>
              <div className="flex items-center gap-3 pt-2 text-stone-700">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <CreditCard size={13} className="text-[#B5945F]" />
                  Cartões em até 3x
                </span>
                <span>•</span>
                <span className="font-mono text-[11px]">
                  Desconto no PIX
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-stone-900 tracking-wider block">
                Localização & Contato
              </span>
              <p className="text-xs text-stone-500 leading-relaxed">
                The Place Salon<br />
                Rua Dr. Ferreira Lopes, 703 - Piso Térreo<br />
                Jardim Marajoara, São Paulo - SP<br />
                CEP: 04671-011
              </p>
              <p className="text-xs font-semibold text-stone-800">
                WhatsApp: (11) 99227-9655
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-stone-900 tracking-wider block">
                Horários
              </span>
              <p className="text-xs text-stone-500 leading-relaxed">
                Terça a Sexta: 09h às 19h<br />
                Sábado: 09h às 16h<br />
                Domingo e Segunda: Fechado<br />
                <span className="text-[11px] text-[#B5945F] font-medium">Atendimento com hora marcada</span>
              </p>
            </div>

          </div>

          <div className="border-t border-stone-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
            <p>© {new Date().getFullYear()} Beatriz Bittencourt. Todos os direitos reservados.</p>
            <p>Salão de Beleza & Noivas no Jardim Marajoara, São Paulo - SP</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
