import { Check, X } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
});

interface ComparisonRow {
  feature: string;
  esencial: boolean;
  avanzado: boolean;
}

const comparisonFeatures: ComparisonRow[] = [
  { feature: "Gestión de empleados", esencial: true, avanzado: true },
  { feature: "Turnos", esencial: true, avanzado: true },
  { feature: "Gestión de ausencias", esencial: true, avanzado: true },
  { feature: "Chat", esencial: true, avanzado: true },
  { feature: "Acceso con Face ID", esencial: true, avanzado: true },
  { feature: "Notificaciones", esencial: true, avanzado: true },
  { feature: "Calendario", esencial: true, avanzado: true },
  { feature: "Fichajes", esencial: true, avanzado: true },
  { feature: "Historial de fichajes", esencial: false, avanzado: true },
  { feature: "Proyectos", esencial: false, avanzado: true },
  { feature: "Chrono (control horario)", esencial: false, avanzado: true },
  { feature: "Check-List", esencial: false, avanzado: true },
  { feature: "Clientes", esencial: false, avanzado: true },
  { feature: "Presupuestos", esencial: false, avanzado: true },
];

export default function PricingComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[858px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 mb-14">
          <h2
            className={`${redHatDisplay.className} text-[40px] font-semibold text-navy text-center`}
          >
            Comparativa de planes
          </h2>
          <p
            className={`${redHatDisplay.className} text-2xl font-semibold text-navy text-center max-w-[718px]`}
          >
            ¿No estás seguro de cuál elegir? Encuentra la mejor opción para ti.
          </p>
        </div>

        <div className="rounded-[32px] shadow-[1px_16px_48px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-white px-8 py-4 text-left w-[255px] rounded-tl-[32px]">
                    <span className="text-base font-bold text-transparent">
                      Nombre
                    </span>
                  </th>
                  <th className="bg-white px-2 py-4 text-center w-[301px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xl font-bold text-navy">
                        Plan Esencial
                      </span>
                      <Link
                        href="/signup?plan=esencial"
                        className="inline-block bg-navy text-light-blue rounded-[32px] px-3 py-1.5 text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Elegir plan
                      </Link>
                    </div>
                  </th>
                  <th className="bg-white px-2 py-4 text-center w-[301px] rounded-tr-[32px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xl font-bold text-navy">
                        Plan Avanzado
                      </span>
                      <Link
                        href="/signup?plan=avanzado"
                        className="inline-block bg-navy text-light-blue rounded-[32px] px-3 py-1.5 text-base font-semibold hover:opacity-90 transition-opacity"
                      >
                        Elegir plan
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature}>
                    <td className="border-b border-bg-light px-8 py-3 text-sm font-semibold text-navy">
                      {row.feature}
                    </td>
                    <td className="border-b border-bg-light px-2 py-3 text-center">
                      {row.esencial ? (
                        <Check className="h-6 w-6 text-navy mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="border-b border-bg-light px-2 py-3 text-center">
                      {row.avanzado ? (
                        <Check className="h-6 w-6 text-navy mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
