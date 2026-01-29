import { Check, Rocket, Car, Star } from "lucide-react";
import Link from "next/link";

const esencialFeatures = [
  "Empleados",
  "Notificaciones",
  "Chat",
  "Incidencias",
  "Agenda",
  "Turnos",
];

const avanzadoFeatures = [
  "Departamentos",
  "Clientes",
  "Proyectos",
  "Tareas",
  "Chrono",
  "Check-List",
  "Productos",
];

const movilidadFeatures = [
  "Gestión de vehículos",
  "Asignación y control",
  "Registro de incidencias",
  "Historial y seguimiento",
  "Adjuntos (documentación)",
];

export default function Price() {
  return (
    <section className="min-h-screen  py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-3">
          Comparativa de planes TickNEO
        </h1>
        <p className="text-gray-600 text-center text-base md:text-lg max-w-2xl mx-auto mb-12">
          ¿No estás seguro cuál elegir? Empieza con Esencial y cambia a
          Avanzado cuando necesites más módulos.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Plan Esencial */}
          <div className="bg-gray-100 rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Check className="h-6 w-6 text-purple-600 shrink-0" />
              <h2 className="text-xl font-bold text-purple-900">Plan Esencial</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Para empezar con lo necesario, sin complicaciones.
            </p>
            <p className="text-gray-800 mb-6">
              <span className="font-bold">Incluye:</span> 25 €/mes + IVA
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {esencialFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm mb-6">
              <span className="font-bold">Recomendado para:</span> pequeñas
              empresas y equipos que quieren cumplir normativa y organizar el día
              a día.
            </p>
            <Link
              href="/demo"
              className="block w-full py-3 rounded-xl font-semibold text-center bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              Empezar con Esencial
            </Link>
          </div>

          {/* Plan Avanzado */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 md:p-8 flex flex-col relative md:-mt-2 md:scale-[1.02]">
            <span className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-semibold px-2.5 py-1 rounded-full">
              Más popular
            </span>
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="h-6 w-6 text-purple-600 shrink-0" />
              <Star className="h-5 w-5 text-purple-500 shrink-0" />
              <h2 className="text-xl font-bold text-purple-900">Plan Avanzado</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              El plan completo para automatizar y tener control total.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-bold">Incluye todo lo del Plan Esencial +</span>
            </p>
            <ul className="space-y-2 mb-6 flex-1">
              {avanzadoFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
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
            <p className="text-gray-500 text-xs">
              Nota: El Plan Avanzado incluye todo lo del Plan Esencial +
              funciones adicionales avanzadas.
            </p>
          </div>

          {/* Movilidad */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col">
            <span className="inline-block w-fit bg-gray-200 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
              Complemento opcional
            </span>
            <div className="flex items-center gap-2 mb-3">
              <Car className="h-6 w-6 text-purple-600 shrink-0" />
              <h2 className="text-xl font-bold text-purple-900">Movilidad</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Consulta precios según vehículos
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-bold">Incluye:</span>
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {movilidadFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
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
    </section>
  );
}
