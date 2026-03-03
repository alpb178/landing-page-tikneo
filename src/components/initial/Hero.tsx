import { CheckCircle, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 md:pt-12 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
          El control horario que crece con tu empresa
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
          Gestiona turnos, ausencias y{" "}
          <span className="text-primary font-semibold">fichajes</span> desde
          cualquier lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-primary-foreground font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-opacity min-h-[48px] touch-manipulation"
          >
            Prueba gratis 15 días
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-colors min-h-[48px] touch-manipulation"
          >
            <Play className="h-5 w-5 mr-2 shrink-0" />
            Ver demostración
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-muted-foreground text-sm">
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-primary/70 mr-2 shrink-0" />
            Sin tarjeta
          </span>
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-primary/70 mr-2 shrink-0" />
            Configuración rápida
          </span>
          <span className="flex items-center">
            <CheckCircle className="h-5 w-5 text-primary/70 mr-2 shrink-0" />
            Soporte
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5 rounded">
            Novedad
          </span>
          <span className="text-muted-foreground text-sm">
            Chat interno con tus clientes
          </span>
        </div>
      </div>
    </section>
  );
}
