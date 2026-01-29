import { CheckCircle, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-6 leading-tight">
          El control horario que crece con tu empresa
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Gestiona turnos, ausencias y{" "}
          <span className="text-purple-600 font-semibold">fichajes</span> desde
          cualquier lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Prueba gratis 15 días
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center bg-white border-2 border-purple-400 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            <Play className="h-5 w-5 mr-2" />
            Ver demostración
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-500 text-sm">
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
            Sin tarjeta
          </span>
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
            Configuración rápida
          </span>
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 shrink-0" />
            Soporte
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100/80">
          <span className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
            Novedad
          </span>
          <span className="text-gray-600 text-sm">
            Chat interno con tus clientes
          </span>
        </div>
      </div>
    </section>
  );
}
