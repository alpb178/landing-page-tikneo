import { Users, Briefcase, Paperclip, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featurePills = [
  { icon: Briefcase, label: "Progresos" },
  { icon: Paperclip, label: "Adjuntos" },
  { icon: MessageCircle, label: "Chat" },
];

export default function ClientsFeature() {
  return (
    <section className="relative overflow-hidden  px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Patrón sutil de puntos */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147 51 234 / 0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido izquierdo */}
          <div>
            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Novedad
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-4">
              Clientes
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-purple-900">
                Gestiona tus clientes
              </p>
            </div>
            <p className="text-purple-700/90 text-base md:text-lg leading-relaxed mb-6">
              Ponte en contacto con ellos a través de nuestra app y permite que
              el cliente vea el progreso de sus proyectos, adjuntos, y chat
              interno por si quieren preguntar algo.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {featurePills.map((pill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-lg"
                >
                  <pill.icon className="h-4 w-4" />
                  {pill.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Ver demo
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Probar Avanzado
              </Link>
            </div>
          </div>

          {/* Mockup smartphone derecho */}
          <Image src="/images/clients.png" alt="Clients" width={1024} height={1024} />
        </div>
      </div>
    </section>
  );
}
