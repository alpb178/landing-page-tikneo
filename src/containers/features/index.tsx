import {
  FileCheck,
  Building2,
  FolderKanban,
  Clock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Cloud,
  Users,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type FeatureItem = {
  icon: LucideIcon;
  label: string;
  description: string;
  highlights: string[];
};

const features: FeatureItem[] = [
  {
    icon: FileCheck,
    label: "Informe Laboral",
    description:
      "Análisis detallado de asistencia, horas trabajadas, ausencias y puntualidad para empleados y empleadores.",
    highlights: [
      "Monitoreo de rendimiento y gestión del tiempo",
      "Gestión de nóminas y cumplimiento normativo",
      "Transparencia y planificación del horario",
    ],
  },
  {
    icon: Building2,
    label: "Gestión Multiempresa",
    description:
      "Administra varias empresas desde una sola cuenta. Centraliza empleados, turnos, informes y permisos.",
    highlights: [
      "Una cuenta para todas tus empresas",
      "Ideal para grupos y franquicias",
      "Sin cambiar de plataforma",
    ],
  },
  {
    icon: FolderKanban,
    label: "Gestión de Proyectos",
    description:
      "Organiza y supervisa proyectos asignando responsables, plazos y seguimiento en tiempo real.",
    highlights: [
      "Progreso visible para todo el equipo",
      "Adjuntos y chat interno por proyecto",
      "Mejora coordinación y entregas",
    ],
  },
  {
    icon: Clock,
    label: "Turnos, Ausencias y Vacaciones",
    description:
      "Planifica y asigna turnos de forma eficaz. Visualiza calendarios y evita conflictos de horarios.",
    highlights: [
      "Consulta de turnos desde la app",
      "Solicitud de cambios con validación",
      "Cobertura de ausencias automática",
    ],
  },
  {
    icon: MessageCircle,
    label: "Avisos y Chat",
    description:
      "Comunicación instantánea y notificaciones directas con tu equipo en un solo lugar.",
    highlights: [
      "Envío de avisos y resolución de dudas",
      "Reduce reuniones innecesarias",
      "Comunicación centralizada",
    ],
  },
  {
    icon: ShieldCheck,
    label: "Seguridad y Privacidad",
    description:
      "Protección de datos con protocolos avanzados y cumplimiento de normativa vigente.",
    highlights: [
      "Control de accesos y permisos",
      "Copias de seguridad automáticas",
      "Transparencia en tratamiento de datos",
    ],
  },
  {
    icon: Smartphone,
    label: "Fichaje Remoto",
    description:
      "Registro de entradas y salidas desde cualquier lugar, con geolocalización opcional.",
    highlights: [
      "Fichaje desde móvil u ordenador",
      "Geolocalización opcional",
      "Cumplimiento normativo garantizado",
    ],
  },
  {
    icon: Cloud,
    label: "Almacenamiento Ilimitado",
    description:
      "Documentos, informes y adjuntos centralizados y accesibles sin límites de espacio.",
    highlights: [
      "Historial completo de la empresa",
      "Copias de seguridad incluidas",
      "Búsqueda rápida de archivos",
    ],
  },
  {
    icon: Users,
    label: "Clientes",
    description:
      "Gestiona la relación con tus clientes compartiendo progreso, adjuntos y chat en tiempo real.",
    highlights: [
      "Transparencia total con el cliente",
      "Chat interno por proyecto",
      "Mejora la satisfacción del cliente",
    ],
  },
  {
    icon: Calendar,
    label: "Calendario",
    description:
      "Calendario integrado para ausencias, vacaciones, reuniones y eventos del equipo.",
    highlights: [
      "Disponibilidad del equipo en un vistazo",
      "Evita solapamientos de horarios",
      "Planificación con visión global",
    ],
  },
];

export default function Features() {
  return (
    <section className="bg-layout-lavender py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
              Características
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Descubre todas las funcionalidades que Tikneo ofrece para
              gestionar eficientemente tu empresa.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <AnimateOnScroll
              key={item.label}
              variant="fadeUp"
              delay={index * 80}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7" />
                </div>

                <h2 className="text-lg font-bold text-primary mb-2">
                  {item.label}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="mt-auto space-y-2">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                      <span className="text-sm text-foreground/70">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
