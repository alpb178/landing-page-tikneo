"use client";

import Features from "@/components/initial/BussinessTools/Features";
import {
  FileText,
  Clock,
  Wifi,
  Building2,
  ShieldCheck,
  FolderKanban,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const features = [
  { icon: FileText, label: "Informes Laborales" },
  { icon: Clock, label: "Gestión de turnos" },
  { icon: Wifi, label: "Fichaje en remoto" },
  { icon: Building2, label: "Multiempresa" },
  { icon: ShieldCheck, label: "Seguridad y Privacidad" },
  { icon: FolderKanban, label: "Proyectos" },
  { icon: MessageCircle, label: "Avisos y Chat" },
];

export default function WhyTikneo() {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-5xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 sm:mb-10">
            ¿Por qué usar Tikneo?
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={80}>
        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-10 sm:mb-12">
          <p>
            Gestionar una empresa no debería sentirse como apagar incendios.
            Con TikNeo tienes todo en un solo lugar.
          </p>
          <p>
            Proyectos, tareas, tiempos, gastos, presupuestos, fichajes,
            movilidad de flota e informes automáticos con IA — todo conectado,
            todo visible, todo bajo control.
          </p>
          <p>
            Para que tú y tu equipo dejen de buscar información y empiecen a
            tomar decisiones.
          </p>
          <p>Así es como crecen las empresas modernas.</p>
        </div>

        <div className="flex justify-center mb-12 sm:mb-16">
          <Link
            href="/price"
            className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md transition-colors min-h-[44px] touch-manipulation"
          >
            Ver Planes
          </Link>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={120}>
          <Features />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
