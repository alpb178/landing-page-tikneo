import { Check } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const reasons = [
  "Cumple con la normativa laboral (Real Decreto-ley 8/2019)",
  "Evita sanciones económicas a la empresa",
  "Protege tus derechos como trabajador/a",
  "Favorece la transparencia en el control de horas extra",
];

export default function ReinventSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary mb-6">
          Reinventa tu negocio con Tikneo
        </h2>
        <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 font-normal">
          Desde el 12 de mayo de 2019, todas las empresas están obligadas por
          ley a llevar un registro diario de la jornada laboral de sus
          trabajadores, incluyendo hora de entrada y salida.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
          ¿Por qué es importante fichar?
        </h3>
        <ul className="space-y-3 mb-0 text-left max-w-xl mx-auto text-base md:text-lg text-primary/90 font-normal">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5 text-primary" />
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <CTABanner />
    </section>
  );
}
