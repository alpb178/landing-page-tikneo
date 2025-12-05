import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Download,
  FileText,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ReportsPage() {
  const reportTypes = [
    {
      icon: Clock,
      title: "Informes de jornada",
      description:
        "Consulta las horas trabajadas por empleado, departamento o proyecto.",
    },
    {
      icon: TrendingUp,
      title: "Análisis de productividad",
      description: "Mide el rendimiento y la eficiencia de tu equipo.",
    },
    {
      icon: Users,
      title: "Informes de personal",
      description: "Gestiona vacaciones, ausencias y horas extra de tu equipo.",
    },
    {
      icon: BarChart3,
      title: "Dashboard ejecutivo",
      description:
        "Vista general de métricas clave para la toma de decisiones.",
    },
  ];

  const features = [
    "Exportación en Excel y PDF",
    "Filtros avanzados por fecha, empleado y proyecto",
    "Gráficos interactivos y visualizaciones",
    "Programación automática de informes",
    "Comparativas históricas",
    "Alertas y notificaciones personalizadas",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Informes y
              <br />
              <span className="text-blue-600">análisis avanzados</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Consulta informes de rendimiento laboral interactivos o descarga
              toda la información que necesites en formato Excel y PDF. Obtén
              una gran ventaja en la gestión de tus equipos.
            </p>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tipos de
              <br />
              <span className="text-blue-600">informes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportTypes.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <report.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {report.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {report.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Características de
                <br />
                <span className="text-blue-600">nuestros informes</span>
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ejemplo de informe
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Horas trabajadas</span>
                    <span className="text-blue-600 font-bold">168h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Productividad</span>
                    <span className="text-green-600 font-bold">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Satisfacción</span>
                    <span className="text-purple-600 font-bold">4.8/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
