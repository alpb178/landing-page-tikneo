import { Check, X, Car, Rocket, Star } from "lucide-react";
import Link from "next/link";

const comparisonRows: { feature: string; basic: boolean; popular: boolean }[] =
  [
    { feature: "Gestión de empleados", basic: true, popular: true },
    { feature: "Turnos", basic: true, popular: true },
    { feature: "Gestión de ausencias", basic: true, popular: true },
    { feature: "Chat", basic: true, popular: true },
    { feature: "Acceso con Face ID", basic: true, popular: true },
    { feature: "Notificaciones", basic: true, popular: true },
    { feature: "Calendario", basic: true, popular: true },
    { feature: "Fichajes", basic: true, popular: true },
    { feature: "Historial de fichajes", basic: false, popular: true },
    { feature: "Proyectos", basic: false, popular: true },
    { feature: "Chrono (Control Horario)", basic: false, popular: true },
    { feature: "Check-List", basic: false, popular: true },
    { feature: "Clientes", basic: false, popular: true },
    { feature: "Presupuestos", basic: false, popular: true },
  ];

const movilidadFeatures = [
  "Gestión de vehículos",
  "Asignación y control",
  "Historial y seguimiento",
  "Adjuntos (documentación)",
];

export default function ComparativeTable() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 text-center mb-3 px-2">
        Comparativa de planes TIKNEO
      </h1>
      <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
        ¿No estás seguro cuál elegir? Empieza con Básico y cambia cuando
        necesites más módulos.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">
        {/* Tabla comparativa: scroll horizontal en móvil */}
        <div className="bg-purple-100/60 rounded-2xl shadow-md border border-purple-200/60 overflow-hidden -mx-2 sm:mx-0">
          <div className="overflow-x-auto overscroll-x-contain scrollbar-hide">
            <table className="w-full min-w-[380px]">
              <thead>
                <tr className="border-b border-purple-200/80">
                  <th className="text-left py-4 px-4 md:px-6 text-purple-900 font-bold">
                    Características
                  </th>
                  <th className="text-center py-4 px-4 md:px-6 text-purple-900 font-bold">
                    Plan Básico
                  </th>
                  <th className="text-center py-4 px-4 md:px-6 text-purple-900 font-bold">
                    <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Más popular
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-purple-200/50 last:border-b-0"
                  >
                    <td className="py-3 px-4 md:px-6 text-purple-900 text-sm md:text-base">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-center">
                      {row.basic ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-center">
                      {row.popular ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Leyenda */}
          <div className="flex flex-wrap justify-center gap-6 py-4 px-4 bg-purple-100/40 border-t border-purple-200/50 text-sm text-purple-800">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0" />
              Incluido
            </span>
            <span className="flex items-center gap-2">
              <X className="h-4 w-4 text-red-500 shrink-0" />
              No incluido
            </span>
          </div>
        </div>

        {/* Complemento opcional: Movilidad */}
        <div className="bg-purple-100/60 rounded-2xl shadow-md border border-purple-200/60 p-6 md:p-8 flex flex-col">
          <span className="inline-block w-fit bg-purple-200/80 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
            Complemento opcional
          </span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center text-purple-700 shrink-0">
              <Car className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold text-purple-900">Movilidad</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Consulta precios según vehículos
          </p>
          <p className="text-purple-900 font-bold text-sm mb-2">Incluye:</p>
          <ul className="space-y-2 mb-6 flex-1">
            {movilidadFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-purple-900 text-sm"
              >
                <Check className="h-4 w-4 text-green-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="block w-full py-3 rounded-xl font-semibold text-center bg-purple-600 hover:bg-purple-700 text-white transition-colors mt-auto"
          >
            Consultar precio
          </Link>
        </div>
      </div>
    </div>
  );
}
