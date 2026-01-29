import {
  BarChart3,
  CalendarDays,
  Wifi,
  Building2,
  ShieldCheck,
  FolderKanban,
  MessageCircle,
  Handshake,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  badge?: string;
};

const cards: FeatureCard[] = [
  {
    icon: BarChart3,
    title: "Informes Laborales",
    description:
      "Genera informes detallados sobre asistencia, puntualidad y horas trabajadas.",
    href: "#",
  },
  {
    icon: CalendarDays,
    title: "Gestión de Turnos",
    description:
      "Organiza y planifica los turnos de tus empleados de manera eficaz.",
    href: "#",
  },
  {
    icon: Wifi,
    title: "Fichaje en Remoto",
    description:
      "Permite a tus empleados fichar desde cualquier lugar, en remoto o presencial.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Multiempresa",
    description: "Gestiona múltiples empresas desde una sola cuenta fácilmente.",
    href: "#",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Privacidad",
    description:
      "Protege la información sensible con protocolos de seguridad avanzados.",
    href: "#",
  },
  {
    icon: FolderKanban,
    title: "Proyectos y Tareas",
    description:
      "Asigna y supervisa proyectos y tareas colaborativas en tu equipo.",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "Avisos y Chat",
    description:
      "Comunicación instantánea y notificaciones directas, para mantener a tu equipo informado.",
    href: "#",
  },
  {
    icon: Handshake,
    title: "Clientes",
    description: "Comunicación interna con tus clientes.",
    href: "#",
    badge: "Novedad",
  },
];

export default function BusinessTools() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-600 font-semibold text-sm md:text-base mb-2">
          TikNeo
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-3">
          La mejor herramienta para el control de tu negocio
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 md:mb-16 italic">
          &ldquo;El orden es el primer paso hacia la productividad&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-shadow hover:shadow-lg relative"
            >
              {card.badge && (
                <span className="absolute top-4 right-4 bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {card.badge}
                </span>
              )}
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {card.description}
              </p>
              <Link
                href={card.href ?? "#"}
                className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
              >
                Más info
                <ChevronRight className="h-4 w-4 ml-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
