import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bell,
  Clock,
  Calendar,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Users,
  Play,
  FileText,
} from "lucide-react";

export default function AlertsAndApprovals() {
  const features = [
    {
      icon: Bell,
      title: "Notificaciones push",
      description:
        "Envía a tu equipo la información que necesitan y asegúrate de que les llegue activando las notificaciones push en la APP de Humancore.",
    },
    {
      icon: Clock,
      title: "Alertas de horas extra",
      description:
        "Alerte a tus empleados cuando hayan llegado al final de su jornada laboral y evita las horas extra involuntarias.",
    },
    {
      icon: Calendar,
      title: "Horarios en móvil",
      description:
        "Tus empleados tendrán toda la información sobre sus turnos y horarios en su móvil, pueden solicitar ausencias y puedes notificarles si se realizan cambios.",
    },
    {
      icon: AlertTriangle,
      title: "Alertas de fichaje olvidado",
      description:
        "Marca en la configuración de Humancore la hora de finalización de la jornada y alerta con un mensaje automático a los empleados que aún no han fichado la salida.",
    },
    {
      icon: MapPin,
      title: "Alertas de inicio y fin de jornada",
      description:
        "Recuerda a los empleados el inicio de la jornada laboral. Muy útil en trabajo por turnos. También puedes recordarles dónde necesitan ir cuando sea necesario.",
    },
    {
      icon: MessageSquare,
      title: "Enviar comunicaciones",
      description:
        "Comunícate fácilmente con tus empleados enviando información directamente a sus smartphones.",
    },
  ];

  const communicationFeatures = [
    {
      title: "Comunicación de turnos",
      description:
        "Los empleados pueden consultar sus turnos en cualquier momento.",
      icon: Calendar,
    },
    {
      title: "Comunicación de ausencias",
      description:
        "Recibe notificaciones automáticamente cuando tus empleados soliciten permisos de ausencia.",
      icon: Users,
    },
  ];

  const benefits = [
    "Convierte Humancore en INTELIGENTE",
    "Usa alertas inteligentes para mejorar cómo los empleados computan sus tiempos",
    "Evita errores y corrige fácilmente los errores de fichaje",
    "Notificaciones en tiempo real",
    "Gestión móvil",
    "Comunicaciones automatizadas",
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      position: "Gerente de RRHH",
      company: "TechCorp",
      content:
        "La verdad es que es muy cómodo poder consultar mis horarios en la app de Humancore. Además, si hay algún cambio me notifican automáticamente.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Alertas y
                <br />
                <span className="text-orange-600">aprobaciones</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Alertas y notificaciones. No te pierdas nada
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Recibe y envía notificaciones cuando las necesites. Avisos de
                empleados, horas extra, solicitudes de ausencia o horas extra y
                fichajes olvidados.
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Centro de Alertas
                      </span>
                    </div>
                    <div className="text-sm text-orange-600 font-semibold">
                      3 Nuevas
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Alerta de Horas Extra
                        </div>
                        <div className="text-xs text-gray-600">
                          John excedió las horas de trabajo
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 flex items-center">
                      <Clock className="h-4 w-4 text-yellow-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Fichaje Olvidado
                        </div>
                        <div className="text-xs text-gray-600">
                          Sarah no ha fichado la salida
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 flex items-center">
                      <Calendar className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Cambio de Horario
                        </div>
                        <div className="text-xs text-gray-600">
                          Actualización de turno para mañana
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convert Sesame to SMART */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Convierte Humancore en INTELIGENTE
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Usa alertas inteligentes para mejorar la forma en que los
              empleados computan sus tiempos. Evita errores y corrige fácilmente
              los errores de fichaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Communication features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communicationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App manager */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gestor de APP
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Gestiona todo fácilmente desde tu móvil
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                No necesitas ir a la oficina para aprobar y gestionar los
                incidentes de tu equipo. Hazlo donde y cuando quieras desde la
                APP.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Gestión Móvil
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Aprobado</span>
                  </div>
                  <span className="text-sm text-green-600">
                    Solicitud de Vacaciones
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Pendiente</span>
                  </div>
                  <span className="text-sm text-yellow-600">
                    Solicitud de Horas Extra
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Rechazado</span>
                  </div>
                  <span className="text-sm text-red-600">
                    Cambio de Horario
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Nuevo</span>
                  </div>
                  <span className="text-sm text-blue-600">
                    Solicitud de Ausencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros usuarios
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                  ★
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic text-lg">
              &quot;{testimonials[0].content}&quot;
            </p>
            <div>
              <div className="font-semibold text-gray-900">
                {testimonials[0].name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonials[0].position}
              </div>
              <div className="text-sm text-orange-600">
                {testimonials[0].company}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
