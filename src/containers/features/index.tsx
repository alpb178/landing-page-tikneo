"use client";

import { useState } from "react";
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

type FeatureItem = {
  id: string;
  icon: LucideIcon;
  label: string;
  content: string;
};

const features: FeatureItem[] = [
  {
    id: "informe-laboral",
    icon: FileCheck,
    label: "Informe Laboral",
    content:
      "Los informes laborales de fichajes de Tikneo son una herramienta esencial para empleados y empleadores. Ofrecen un análisis detallado de la asistencia, horas trabajadas, ausencias y puntualidad. Para los empleadores, permiten monitorear el rendimiento y la gestión del tiempo del equipo. Para los empleados, brindan transparencia y facilitan la planificación del horario laboral. Estos informes también son útiles para la gestión de nóminas y el cumplimiento de regulaciones laborales. En resumen, los informes laborales de fichajes de Tikneo promueven la eficiencia y el cumplimiento en el ámbito laboral, beneficiando tanto a empleadores como a empleados.",
  },
  {
    id: "multiempresa",
    icon: Building2,
    label: "Gestión Multiempresa",
    content:
      "Con Tikneo, la gestión multiempresa se simplifica: administra varias empresas desde una sola cuenta. Centraliza empleados, turnos, informes y permisos sin cambiar de plataforma. Ideal para grupos, franquicias o profesionales que gestionan varios negocios.",
  },
  {
    id: "proyectos",
    icon: FolderKanban,
    label: "Gestión de proyectos",
    content:
      "Organiza y supervisa proyectos y tareas con Tikneo. Asigna responsables, plazos y seguimiento. Los equipos pueden ver el progreso, adjuntos y chat interno por proyecto, mejorando la coordinación y la entrega a tiempo.",
  },
  {
    id: "turnos",
    icon: Clock,
    label: "Gestión de turnos",
    content:
      "Planifica y asigna turnos de forma eficaz. Visualiza calendarios, cubre ausencias y evita conflictos de horarios. Los empleados consultan sus turnos desde la app y pueden solicitar cambios con validación del responsable.",
  },
  {
    id: "avisos-chat",
    icon: MessageCircle,
    label: "Avisos y Chat",
    content:
      "Comunicación instantánea y notificaciones directas con tu equipo. Envía avisos, resuelve dudas por chat y mantén a todos informados. Reduce reuniones innecesarias y centraliza la comunicación en un solo lugar.",
  },
  {
    id: "seguridad",
    icon: ShieldCheck,
    label: "Seguridad y Privacidad",
    content:
      "Protección de datos con protocolos de seguridad avanzados. Tikneo cumple con la normativa de protección de datos y ofrece control de accesos, copias de seguridad y transparencia en el tratamiento de la información sensible.",
  },
  {
    id: "fichaje-remoto",
    icon: Smartphone,
    label: "Fichaje Remoto",
    content:
      "Fichaje desde cualquier lugar: en remoto o presencial. Los empleados registran entradas y salidas desde el móvil o el ordenador, con geolocalización opcional y validación por parte de la empresa. Cumplimiento normativo garantizado.",
  },
  {
    id: "almacenamiento",
    icon: Cloud,
    label: "Almacenamiento ilimitado",
    content:
      "Guarda documentos, informes, adjuntos y historial sin límites. Toda la información de tu empresa centralizada y accesible cuando la necesites, con copias de seguridad y búsqueda rápida.",
  },
  {
    id: "clientes",
    icon: Users,
    label: "Clientes",
    content:
      "Gestiona la relación con tus clientes desde Tikneo. Comparte progreso de proyectos, adjuntos y chat interno para que puedan consultar y preguntar en tiempo real, mejorando la transparencia y la satisfacción.",
  },
  {
    id: "calendario",
    icon: Calendar,
    label: "Calendario",
    content:
      "Calendario integrado para ausencias, vacaciones, reuniones y eventos. Visualiza la disponibilidad del equipo, evita solapamientos y planifica con visión global. Sincronizable con otras herramientas si lo necesitas.",
  },
];

export default function Features() {
  const [activeId, setActiveId] = useState(features[0].id);
  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section className="min-h-screen  py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">
          Características
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl">
          Descubre todas las funcionalidades que Tikneo ofrece para gestionar
          eficientemente tu empresa.
        </p>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0 lg:overflow-x-visible">
            {features.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap transition-colors ${isActive
                      ? "bg-purple-100 text-purple-900 border-l-4 border-purple-600 lg:border-l-4 lg:border-l-purple-600"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-800"
                    }`}
                >
                  <item.icon className="h-5 w-5 shrink-0 text-purple-600" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Contenido + ilustración */}
          <div className="min-w-0">
            {/* Ilustración decorativa */}
            <div className="flex justify-end mb-6">
              <div className="w-full max-w-xs h-32 md:h-40 rounded-2xl bg-linear-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <div className="flex gap-4 text-purple-700">
                  <FileCheck className="h-12 w-12 md:h-16 md:w-16 opacity-90" />
                  <Clock className="h-10 w-10 md:h-12 md:w-12 self-end opacity-80" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                  <active.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-purple-900">
                  {active.label}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{active.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
