import {
  FileText,
  Calendar,
  Clock,
  Building2,
  ShieldCheck,
  FolderKanban,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ContainerCard } from "../../Container";

type FeatureCard = {
  Icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

const cards: FeatureCard[] = [
  {
    Icon: FileText,
    title: "Informes Laborales",
    description:
      "Genera informes detallados sobre asistencia, puntualidad y horas trabajadas.",
  },
  {
    Icon: Calendar,
    title: "Gestión de Turnos, Ausencias y Vacaciones",
    description:
      "Organiza y planifica los turnos de tus empleados de manera eficaz.",
  },
  {
    Icon: Clock,
    title: "Fichaje en Remoto",
    description:
      "Permite a tus empleados fichar desde cualquier lugar, en remoto o presencial.",
  },
  {
    Icon: Building2,
    title: "Multiempresa",
    description:
      "Gestiona múltiples empresas desde una sola cuenta fácilmente.",
  },
  {
    Icon: ShieldCheck,
    title: "Seguridad y Privacidad",
    description:
      "Protege la información sensible con protocolos de seguridad avanzados.",
  },
  {
    Icon: FolderKanban,
    title: "Proyectos y Tareas",
    description:
      "Asigna y supervisa proyectos y tareas colaborativas en tu equipo.",
  },
  {
    Icon: MessageCircle,
    title: "Avisos y Chat",
    description:
      "Comunicación instantánea y notificaciones directas, para mantener a tu equipo informado.",
  },
  {
    Icon: Users,
    title: "Clientes",
    description: "Comunicación interna con tus clientes.",
    badge: "Novedad",
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <ContainerCard key={index}>
          <div className=" items-center justify-center flex flex-col">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-primary shrink-0">
              <card.Icon className="h-10 w-10" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {card.description}
            </p>
          </div>
        </ContainerCard>
      ))}
    </div>
  );
}
