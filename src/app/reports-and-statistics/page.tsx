import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Download,
  FileText,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Target,
  ArrowRight,
  Play,
} from "lucide-react";

export default function ReportsAndStatistics() {
  const features = [
    {
      icon: BarChart3,
      title: "Informes y estadísticas en tiempo real",
      description:
        "Los datos te ayudan a tomar mejores decisiones en la gestión de tu equipo.",
    },
    {
      icon: Download,
      title: "Exportación CSV y PDF",
      description:
        "Descarga información de informes de RRHH cuando y como la necesites. Configura tus propios informes y expórtalos para tenerlos siempre a mano.",
    },
    {
      icon: Clock,
      title: "Informes de horas extra",
      description:
        "Consulta en tiempo real el saldo de horas de tus empleados. Mantén un control exhaustivo de las horas extra de tu equipo con informes de RRHH.",
    },
    {
      icon: AlertTriangle,
      title: "Informes de ausencias y retrasos",
      description:
        "Analiza los patrones de entrada y salida de tus equipos y toma decisiones sobre la optimización de su jornada laboral con el panel de RRHH.",
    },
    {
      icon: TrendingUp,
      title: "Rentabilidad de proyectos",
      description:
        "Con el cómputo de horas y tareas, planifica tus proyectos y controla su progreso diario midiendo su rentabilidad y mostrando estadísticas de RRHH.",
    },
    {
      icon: FileText,
      title: "Informes de turnos de trabajo",
      description:
        "Obtén información detallada sobre cada uno de tus trabajadores y toma mejores decisiones sobre tus equipos.",
    },
    {
      icon: CheckCircle,
      title: "Informes de inspección de trabajo",
      description:
        "Cumple con las regulaciones de fichaje de horas y almacena la información de registro de jornada de tus empleados.",
    },
  ];

  const reportTypes = [
    "Informes de horas extra",
    "Registros de jornada",
    "Calendario de vacaciones",
    "Rentabilidad del equipo",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Informes y
                <br />
                <span className="text-blue-600">estadísticas</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Consulta informes interactivos de rendimiento laboral o
                descárgalos en tu formato preferido. Tener toda la información
                centralizada te da una gran ventaja en la gestión de tus
                equipos.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg bg-gray-100 rounded-lg p-4 shadow-2xl">
                <div className="w-full h-8 bg-gray-300 rounded mb-4 flex items-center px-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="w-3/4 h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        Informes
                      </span>
                    </div>
                    <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        Estadísticas
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Generar Informe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All information simplified and easy to understand */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Toda la información simplificada y
              <br />
              <span className="text-blue-600">fácil de entender</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Informes de horas, puntualidad, horas extra, rentabilidad... Crea
              tus propios informes y descárgalos en tu formato preferido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extract intelligence from your data */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Extrae inteligencia de tus datos.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Quién estará de vacaciones la próxima semana? ¿Quién ha hecho
                horas extra este mes?
                <br />
                <br />
                Centraliza toda la actividad de tus equipos en un software y
                conviértete en un experto en tu empresa.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {reportTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Gran ahorro de costos.
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    80%
                  </div>
                  <div className="text-gray-600">
                    Reducción en tareas administrativas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    50%
                  </div>
                  <div className="text-gray-600">
                    Tiempo ahorrado en generación de informes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">
                    Cumplimiento de regulaciones
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your HR team now has things easier */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu equipo de RRHH ahora tiene las cosas más fáciles.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Guarda la información diaria de tu empresa y consúltala
              diariamente, mensualmente o anualmente. Olvídate de informes
              tediosos que se vuelven obsoletos rápidamente y ahorra tiempo
              teniendo toda la información centralizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información clara y accesible
              </h3>
              <p className="text-lg text-gray-600 mb-6">Para todos.</p>
              <p className="text-gray-600 mb-8">
                Más y mejor información crea equipos más eficientes. Con
                Humancore, los empleados podrán consultar toda la información
                relacionada con sus fichajes, sus vacaciones y sus proyectos.
                <br />
                <br />
                Empodera a tus equipos y haz crecer tus proyectos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Informes</h4>
                <p className="text-sm text-gray-600">Análisis en tiempo real</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Equipos</h4>
                <p className="text-sm text-gray-600">Gestión de equipos</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                <p className="text-sm text-gray-600">Control de tiempo</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Objetivos</h4>
                <p className="text-sm text-gray-600">
                  Seguimiento de rendimiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
