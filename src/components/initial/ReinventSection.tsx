import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  "Cumple con la normativa laboral (Real Decreto-ley 8/2019)",
  "Evita sanciones económicas a la empresa",
  "Protege tus derechos como trabajador/a",
  "Favorece la transparencia en el control de horas extra",
];

function PhoneMockup({
  screenshot,
  alt,
  className,
}: {
  screenshot: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`absolute w-[316px] h-[657px] ${className ?? ""}`}>
      <div className="absolute left-[11px] top-[8px] w-[296px] h-[639px] rounded-[24px] overflow-hidden">
        <Image src={screenshot} alt={alt} fill className="object-cover" />
      </div>
      <Image
        src="/images/phone-frame.svg"
        alt=""
        width={316}
        height={654}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ "--fill-0": "#10234c" } as React.CSSProperties}
        aria-hidden="true"
      />
    </div>
  );
}

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

      {/* Banner CTA navy con mockups de teléfono */}
      <div className="bg-navy overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative h-[300px] md:h-[430px]">
          {/* Phone mockups - visible en lg+ */}
          <div className="hidden lg:block">
            <PhoneMockup
              screenshot="/images/phone-registro.png"
              alt="TikNEO Registro de entrada y salida"
              className="left-[164px] top-[60px]"
            />
            <PhoneMockup
              screenshot="/images/phone-fichajes.png"
              alt="TikNEO Fichajes"
              className="left-[510px] top-[60px]"
            />
          </div>

          {/* CTA content */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-8 lg:pr-[168px]">
            <div className="flex flex-col gap-4 max-w-[339px] text-center lg:text-left">
              <p className="text-xl md:text-2xl text-white font-normal tracking-[-0.408px]">
                Mejora procesos horarios con nuestra aplicación.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/demo"
                  className="flex-1 text-center border-2 border-white text-white rounded-[32px] h-12 leading-[44px] font-semibold hover:bg-white/10 transition-colors"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/price"
                  className="flex-1 text-center bg-white text-navy rounded-[32px] h-12 leading-[48px] font-semibold hover:opacity-90 transition-opacity"
                >
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
