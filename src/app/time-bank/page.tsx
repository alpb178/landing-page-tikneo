import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Calculator,
  FileText,
  BarChart3,
  Settings,
  Users,
  CheckCircle,
  Calendar,
  Play,
  Download,
} from "lucide-react";

export default function TimeBank() {
  const features = [
    {
      icon: Calculator,
      title: "Conteo simple",
      description:
        "De un vistazo descubrirás toda la información sobre las horas extra de tus empleados, el total de horas compensadas y las pendientes de compensación.",
    },
    {
      icon: Settings,
      title: "Crear una regla",
      description:
        "¿Qué tipo de regla se puede aplicar a cada empleado? Configura un sistema de reglas basado en tu empresa y convenio laboral para establecer multiplicadores para fines de semana, turnos nocturnos, festivos...",
    },
    {
      icon: FileText,
      title: "Informes de horas trabajadas",
      description:
        "Con la bolsa de horas extrae informes de horas trabajadas completamente personalizados sobre horas extra en cualquier momento.",
    },
  ];

  const benefits = [
    "Control y seguimiento de horas extra en tiempo real",
    "Informes personalizados para cada empleado",
    "Cálculo automático de saldos positivos y negativos",
    "Gestión de compensaciones durante todo el año",
    "Integración con convenios laborales",
    "Gestión administrativa simplificada",
  ];

  const timeBankFeatures = [
    {
      title: "Seguimiento en tiempo real",
      description: "Monitorea las horas extra mientras suceden",
      icon: Clock,
    },
    {
      title: "Gestión de saldos",
      description: "Rastrea saldos positivos y negativos de horas",
      icon: BarChart3,
    },
    {
      title: "Solicitudes de compensación",
      description:
        "Los empleados pueden solicitar compensaciones en tiempo real",
      icon: Users,
    },
    {
      title: "Liquidación de fin de año",
      description: "Liquidación fácil antes del fin de año",
      icon: Calendar,
    },
  ];

  const stats = [
    {
      number: "100%",
      description: "Seguimiento automatizado de horas extra",
    },
    {
      number: "Real-time",
      description: "Actualizaciones y monitoreo de saldos",
    },
    {
      number: "Custom",
      description: "Informes y configuración de reglas",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bolsa de horas,
                <br />
                <span className="text-purple-600">registro de horas extra</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conoce y controla en tiempo real el total de horas extra de tu
                equipo y diseña informes personalizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Prueba gratuita
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Ver demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg bg-gray-100 rounded-lg p-4 shadow-2xl">
                <div className="w-full h-8 bg-gray-300 rounded mb-4 flex items-center px-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Bolsa de Horas
                      </span>
                    </div>
                    <div className="text-sm text-purple-600 font-semibold">
                      Activo
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Horas Extra</span>
                      <span className="text-sm font-semibold text-red-600">
                        +24h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Compensadas</span>
                      <span className="text-sm font-semibold text-green-600">
                        -12h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Saldo</span>
                      <span className="text-sm font-semibold text-purple-600">
                        +12h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn to register hour balance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aprende a registrar el saldo de horas
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              ¿Quieres computar las horas trabajadas y no trabajadas de cada
              empleado y crear saldos positivos y negativos que se compensan con
              el tiempo?
              <br />
              <br />
              Con la funcionalidad de bolsa de horas puedes obtener un conteo de
              horas reales, horas extra, horas compensadas y el saldo total de
              cada trabajador.
            </p>

            <div className="bg-purple-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo funciona la bolsa de horas de Humancore
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Simple counting
                  </h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Create a rule
                  </h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Work hours reports
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Adjust work organization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ajusta la organización del trabajo y la producción laboral
                gracias a la bolsa de horas de Humancore
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Con nuestro software de RRHH ya no tendrás que preocuparte por
                el control de horas extra y la gestión adecuada del saldo de
                horas.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Gestión de Bolsa de Horas
              </h3>

              <div className="space-y-4">
                {timeBankFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 flex items-center"
                  >
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {feature.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage team overtime in a few clicks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gestiona las horas extra de tu equipo en pocos clics
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Como jefe de proyecto o líder de proyecto, organiza adecuadamente
              la bolsa de horas de tu departamento, mide fácilmente el saldo de
              horas, bonificaciones y compensación de esas horas en cualquier
              momento.
              <br />
              <br />
              Los empleados pueden solicitar esas compensaciones en tiempo real
              y el administrador puede liquidarlas fácilmente antes del fin de
              año.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prueba gratuita durante 14 días
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Si quieres saber cómo hacerlo (esta es la parte que más nos gusta)
            te contamos cómo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Prueba gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Más información
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
