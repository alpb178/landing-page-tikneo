import { Check, X, Car, Rocket, Star } from "lucide-react";
import Link from "next/link";

const avanzadoFeatures = [
  "Historial de fichajes",
  "Proyectos",
  "Chrono (Control Horario)",
  "Check-List",
  "Clientes",
  "Presupuestos",
];

export default function AdvancedPlan() {
  return (
    <div className="bg-purple-100/60 rounded-2xl shadow-md border flex flex-col justify-center items-center border-gray-200 p-3 ">
      <div className="rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="h-6 w-6 text-purple-600 shrink-0" />
          <Star className="h-5 w-5 text-purple-500 shrink-0" />
          <h3 className="text-xl font-bold text-purple-900">Plan Avanzado</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          El plan completo para automatizar y tener control total.
        </p>
        <div className="rounded-2xl shadow-md border border-gray-200 p-6 mt-4 mb-6 flex flex-col">
          <p className="text-gray-800 mb-2">
            <span className="font-bold text-purple-900">Incluye:</span>{" "}
            <span className="text-purple-900">
              Todo lo del Plan Esencial + 39.99 €/mes hasta 10 empleados + 3.50
              €/mes por cada empleado adicional
            </span>
          </p>
          <ul className="space-y-2 mb-6 flex-1">
            {avanzadoFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700 text-sm"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mb-4">
            <span className="font-bold">Recomendado para:</span> empresas que
            crecen y necesitan gestión avanzada, control y reportes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link
              href="/demo"
              className="flex-1 py-3 rounded-xl font-semibold text-center border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Ver demo
            </Link>
            <Link
              href="/signup"
              className="flex-1 py-3 rounded-xl font-semibold text-center bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              Probar Avanzado
            </Link>
          </div>
        </div>
        <p className="text-gray-500 text-xs">
          Nota: El Plan Avanzado incluye todo lo del Plan Esencial + funciones
          adicionales avanzadas.
        </p>
      </div>
    </div>
  );
}
