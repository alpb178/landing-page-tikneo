import { Check } from "lucide-react";
import Link from "next/link";

const reasons = [
  "Cumple con la normativa laboral (Real Decreto-ley 8/2019)",
  "Evita sanciones económicas a la empresa",
  "Protege tus derechos como trabajador/a",
  "Favorece la transparencia en el control de horas extra",
];

export default function ReinventSection() {
  return (
    <section className="relative overflow-hidden  px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal: ~36-40px, bold */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-purple-900 mb-6">
          Reinventa tu negocio con Tikneo
        </h2>
        {/* Párrafo: ~18-20px, regular */}
        <p className="text-purple-800/90 text-lg md:text-xl leading-relaxed mb-10 font-normal">
          Desde el 12 de mayo de 2019, todas las empresas están obligadas por
          ley a llevar un registro diario de la jornada laboral de sus
          trabajadores, incluyendo hora de entrada y salida.
        </p>

        {/* Pregunta: ~20-24px, bold */}
        <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-6">
          ¿Por qué es importante fichar?
        </h3>
        {/* Lista: ~16-18px, regular */}
        <ul className="space-y-3 mb-12 text-left max-w-xl mx-auto text-base md:text-lg text-purple-900/90 font-normal">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded bg-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5 text-purple-700" />
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>

        {/* Tarjetas: ~20-22px, semi-bold, texto alineado a la izquierda */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/demo"
            className="block bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 text-purple-900 font-semibold text-left text-lg md:text-xl hover:shadow-lg transition-shadow"
          >
            Mejora procesos horarios con nuestra aplicación
          </Link>
          <Link
            href="/price"
            className="block rounded-2xl shadow-md p-6 md:p-8 text-white font-semibold text-left text-lg md:text-xl bg-linear-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all"
          >
            Aprovecha todo el potencial de nuestra aplicación
          </Link>
        </div>
      </div>
    </section>
  );
}
