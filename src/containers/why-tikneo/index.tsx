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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 text-center mb-8 sm:mb-10">
            ¿Por qué usar Tikneo?
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={80}>
        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-10 sm:mb-12">
          <p>
            ¿Por qué deberías elegir nuestra aplicación de control de horario?
            La respuesta es simple: porque te ayuda a tomar el control de tu
            tiempo de manera eficiente y efectiva.
          </p>
          <p>
            Nuestra aplicación te permite planificar, registrar y analizar tus
            actividades diarias de manera intuitiva y conveniente. Con funciones
            avanzadas como el seguimiento de tareas, el registro de horas
            trabajadas y herramientas de análisis, puedes optimizar tu tiempo y
            aumentar tu productividad como nunca antes.
          </p>
          <p>
            Imagina tener una visión clara de cómo empleas cada hora de tu día.
            Con nuestra aplicación, puedes identificar fácilmente dónde estás
            invirtiendo tu tiempo y ajustar tus hábitos para ser más productivo.
            Desde profesionales independientes hasta equipos de trabajo, nuestra
            aplicación se adapta a tus necesidades y te ayuda a alcanzar tus
            metas de manera más eficiente.
          </p>
          <p>
            Además, la seguridad de tus datos es nuestra prioridad. Con
            tecnologías de encriptación avanzadas, puedes estar seguro de que tu
            información está protegida en todo momento.
          </p>
          <p>
            En resumen, usar nuestra aplicación de control de horario significa
            tomar el control de tu tiempo y tu vida. Es una herramienta poderosa
            que te ayuda a trabajar de manera más inteligente, no más difícil.
            Únete a nosotros y descubre cómo puedes aprovechar al máximo cada
            momento de tu día.
          </p>
        </div>

        <div className="flex justify-center mb-12 sm:mb-16">
          <Link
            href="/price"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md transition-colors min-h-[44px] touch-manipulation"
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
