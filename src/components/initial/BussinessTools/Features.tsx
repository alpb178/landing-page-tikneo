import { ContainerCard } from "../../Container";
import Image from "next/image";

type FeatureCard = {
  icon: string;
  title: string;
  description: string;
  badge?: string;
};

const cards: FeatureCard[] = [
  {
    icon: "/images/features/reports.png",
    title: "Informes Laborales",
    description:
      "Genera informes detallados sobre asistencia, puntualidad y horas trabajadas.",
  },
  {
    icon: "/images/features/shifts.png",
    title: "Gestión de Turnos, Ausencias y Vacaciones",
    description:
      "Organiza y planifica los turnos de tus empleados de manera eficaz.",
  },
  {
    icon: "/images/features/remote.png",
    title: "Fichaje en Remoto",
    description:
      "Permite a tus empleados fichar desde cualquier lugar, en remoto o presencial.",
  },
  {
    icon: "/images/features/multi-company.png",
    title: "Multiempresa",
    description:
      "Gestiona múltiples empresas desde una sola cuenta fácilmente.",
  },
  {
    icon: "/images/features/security.png",
    title: "Seguridad y Privacidad",
    description:
      "Protege la información sensible con protocolos de seguridad avanzados.",
  },
  {
    icon: "/images/features/project-task.png",
    title: "Proyectos y Tareas",
    description:
      "Asigna y supervisa proyectos y tareas colaborativas en tu equipo.",
  },
  {
    icon: "/images/features/chats.png",
    title: "Avisos y Chat",
    description:
      "Comunicación instantánea y notificaciones directas, para mantener a tu equipo informado.",
  },
  {
    icon: "/images/features/clients.png",
    title: "Clientes",
    description: "Comunicación interna con tus clientes.",
    badge: "Novedad",
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <ContainerCard key={index}>
          <div className=" items-center justify-center flex flex-col">
            <div className="w-full h-32  rounded-lg flex items-center justify-center mb-4 text-primary">
              <Image
                src={card.icon}
                alt={card.title}
                className="w-full h-full object-contain"
                width={1024}
                height={1024}
              />
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
