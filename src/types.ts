export interface VisagismDiagnosis {
  summary: string;
  temperament: string;
  temperamentDescription: string;
  facialLines: string;
  hairRecommendations: string[];
  makeupRecommendations: string[];
  accessoriesRecommendations: string[];
  brandArchetype: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  tags: string[];
}

export interface Appointment {
  id: string;
  serviceId: string;
  serviceTitle: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  status: "Pendente" | "Confirmado";
  createdAt: string;
}
