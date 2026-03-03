import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

const features = [
  "Gestión de vehículos",
  "Asignación y control",
  "Historial y seguimiento",
  "Adjuntos (documentación)",
];

export default function MobilityCard() {
  return (
    <section className="bg-bg-light pb-20">
      <div className="max-w-[858px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.05)] px-8 py-6 flex flex-col gap-6">
          <p className="text-muted text-base font-semibold">
            COMPLEMENTO OPCIONAL
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-light-blue rounded-[5.6px] size-7 flex items-center justify-center">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 11.5V13C13.5 13.8284 12.8284 14.5 12 14.5H4C3.17157 14.5 2.5 13.8284 2.5 13V11.5M13.5 11.5H2.5M13.5 11.5L12.5 6.5H3.5L2.5 11.5M11 14.5V15.5M5 14.5V15.5M4.5 11.5V9.5M11.5 11.5V9.5M5 4L6.5 2.5H9.5L11 4V6.5H5V4Z"
                    stroke="#10234c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold leading-[1.2] text-black">
                Movilidad
              </h3>
            </div>

            <p className="text-blue-accent text-base">
              Consulta precios según vehículos
            </p>
          </div>

          <div className="border-t border-gray-200" />

          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-black text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contacto?addon=movilidad"
            className="block w-full text-center bg-navy text-light-blue rounded-[32px] h-12 leading-[48px] font-semibold hover:opacity-90 transition-opacity"
          >
            Consultar precio
          </Link>
        </div>
      </div>
    </section>
  );
}
