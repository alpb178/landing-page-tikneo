import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Users,
  Smartphone,
  Calendar,
  MapPin,
  CheckCircle,
  Download,
  FileText,
  Play,
  ArrowRight,
  Target,
  Home,
} from "lucide-react";

export default function RemoteWork() {
  const features = [
    {
      icon: Clock,
      title: "Control horario",
      description:
        "Mide el tiempo que tu equipo dedica a cada tarea y controla la rentabilidad del proyecto. Visualiza en tiempo real las tareas y quién está realizando cada tarea.",
    },
    {
      icon: Users,
      title: "Quién está",
      description:
        "Tanto la empresa como los empleados pueden saber, en tiempo real, quién está trabajando en la oficina, en descanso o trabajando remotamente.",
    },
    {
      icon: Smartphone,
      title: "APP Móvil",
      description:
        "El empleado puede registrar desde su móvil el tiempo que dedica a cada proyecto y gestionar todo lo relacionado con su jornada laboral.",
    },
    {
      icon: Calendar,
      title: "Ausencias",
      description:
        "Con la aplicación de teletrabajo, gestiona las ausencias de empleados y los días de trabajo remoto con un par de clics.",
    },
    {
      icon: Target,
      title: "Planificación",
      description:
        "Planifica tareas y turnos y obtén informes y estadísticas sobre el rendimiento y productividad de la fuerza laboral de empleados.",
    },
    {
      icon: MapPin,
      title: "Fichaje geolocalizado",
      description:
        "Fichaje remoto sin complicaciones a través de nuestra APP, para saber desde dónde trabaja tu equipo.",
    },
  ];

  const benefits = [
    "Adapta tu empresa a los nuevos tiempos",
    "Monitoreo del estado del equipo en tiempo real",
    "Gestión flexible del trabajo",
    "Mejor equilibrio trabajo-vida",
    "Mayor autonomía de los empleados",
    "Reducción de costos para las empresas",
  ];

  const stats = [
    {
      number: "5%",
      description: "Empresas ofrecían teletrabajo a principios de 2020",
    },
    {
      number: "40%",
      description: "Empresas ahora ofrecen teletrabajo",
    },
    {
      number: "8,000",
      description: "Empresas ya confían en nosotros",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Teletrabajo,
                <br />
                <span className="text-green-600">más simple que nunca</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Trabaja en la oficina, en casa o en movimiento... ¡Tenemos una
                aplicación para ti! El teletrabajo ya no es el futuro, ¡es el
                presente! Optimiza la gestión del teletrabajo con Tikneo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Prueba gratuita
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
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
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Teletrabajo
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">En línea</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Estado del Equipo
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        8 Activos
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Trabajadores Remotos
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        5
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Trabajadores de Oficina
                      </span>
                      <span className="text-sm font-semibold text-purple-600">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adapt your company to new times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Adapta tu empresa a los nuevos tiempos
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              A principios de 2020 solo el 5% de las empresas ofrecían la opción
              de teletrabajo a sus empleados, ahora casi el 40% de las empresas
              lo hacen. ¡Y la cifra está aumentando!
              <br />
              <br />
              Apuesta por software adaptado al teletrabajo, es una gran
              oportunidad para gestionar el trabajo desde casa, facilitar el
              equilibrio trabajo-vida y proporcionar mayor autonomía.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software adapted to remote work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Software adaptado al teletrabajo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Know your team's status from anywhere in the world */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conoce el estado de tu equipo desde cualquier parte del mundo
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Control horario adaptado al teletrabajo.
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Gestiona equipos de trabajo y conoce su estado en cualquier
                momento.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Panel de Estado del Equipo
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Sarah Johnson</span>
                  </div>
                  <span className="text-sm text-green-600">Remoto</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Mike Chen</span>
                  </div>
                  <span className="text-sm text-blue-600">Oficina</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Emma Wilson</span>
                  </div>
                  <span className="text-sm text-yellow-600">Descanso</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">David Lee</span>
                  </div>
                  <span className="text-sm text-green-600">Remoto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful resources for remote work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recursos útiles para el teletrabajo
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              La gestión del teletrabajo no tiene que ser difícil, con los
              recursos adecuados, tu equipo puede trabajar y enriquecerse de esa
              experiencia. ¿Qué estás esperando?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ley de Teletrabajo
              </h3>
              <p className="text-gray-600 mb-6">
                Toda la información sobre la Ley de Teletrabajo en España.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                Más información
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Descarga nuestra guía de teletrabajo
              </h3>
              <p className="text-gray-600 mb-6">
                Obtén nuestra guía completa para implementar el teletrabajo en
                tu empresa.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Descargar guía
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Consiento el tratamiento de mis datos para recibir información
                comercial de Tikneo
              </h3>
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-green-600 mr-4">
                  8,000
                </div>
                <div className="text-gray-600">
                  empresas ya confían en nosotros
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prueba gratuita durante 14 días
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Si quieres saber cómo hacerlo (esta es la parte que más nos gusta)
            te contamos cómo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Prueba gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              Más información
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
