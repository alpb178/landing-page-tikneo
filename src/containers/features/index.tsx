"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setSectionRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) sectionRefs.current.set(id, el);
    else sectionRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const containerRect = container.getBoundingClientRect();
        let topmostId: string | null = null;
        let topmostTop = Infinity;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("data-feature-id");
          if (!id) continue;
          const top = (entry.target as HTMLElement).getBoundingClientRect().top;
          if (top < topmostTop) {
            topmostTop = top;
            topmostId = id;
          }
        }
        if (topmostId) setActiveId(topmostId);
      },
      {
        root: container,
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    const refs = sectionRefs.current;
    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToFeature = (id: string) => {
    setActiveId(id);
    const container = contentRef.current;
    const el = sectionRefs.current.get(id);
    if (!container || !el) return;
    // Posición correcta relativa al contenedor (evita saltos al 5.º por offsetParent)
    const isFirst = features[0].id === id;
    const top = isFirst
      ? 0
      : Math.max(
          0,
          container.scrollTop +
            el.getBoundingClientRect().top -
            container.getBoundingClientRect().top -
            16
        );
    container.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-layout-lavender py-10 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-3">
              Características
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Descubre todas las funcionalidades que Tikneo ofrece para gestionar
              eficientemente tu empresa.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[280px_1fr] gap-4 sm:gap-6 lg:gap-8 items-stretch lg:min-h-[65vh]">
          {/* Sidebar: fijo, sin scroll vertical; solo el panel derecho hace scroll */}
          <nav className="rounded-2xl shadow-md border border-gray-100 p-2 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible lg:overflow-y-hidden shrink-0 scrollbar-hide overscroll-x-contain">
            {features.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToFeature(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-colors min-h-[44px] touch-manipulation shrink-0 ${
                    isActive
                      ? "bg-purple-200 text-purple-900 font-semibold"
                      : "text-gray-500 hover:bg-purple-50 hover:text-purple-800 active:bg-purple-100"
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 shrink-0 ${
                      isActive ? "text-purple-700" : "text-purple-500"
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Panel de contenido: ilustración sobre el borde del contenedor; solo este hace scroll */}
          <div className="min-w-0 relative">
            {/* Ilustración sobre el borde superior del contenedor de tarjetas */}
            <div className="absolute top-0 right-0 z-10  -translate-y-1/2 flex items-center justify-center pointer-events-none">
              <Image
                src="/features.png"
                alt=""
                width={1024}
                height={1024}
                className="hidden md:block w-full max-w-[200px] md:max-w-[240px] h-36 rounded-2xl object-contain object-center"
              />
            </div>
            <div
              ref={contentRef}
              className="min-h-0 flex flex-col overflow-y-auto p-3 pt-16 sm:pt-20 md:pt-24 gap-4 max-h-[55vh] sm:max-h-[60vh] lg:max-h-[65vh] scrollbar-hide"
            >
              {features.map((item) => {
                const isActiveCard = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    ref={(el) => setSectionRef(item.id, el)}
                    data-feature-id={item.id}
                    className={`shrink-0 rounded-2xl shadow-md border p-6 md:p-8 scroll-mt-4 transition-colors ${
                      isActiveCard
                        ? "bg-purple-100/80 border-purple-200"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-xl md:text-2xl font-bold text-purple-900">
                        {item.label}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
