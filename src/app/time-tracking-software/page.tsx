import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Clock,
  Smartphone,
  Tablet,
  Globe,
  Shield,
  BarChart3,
  Zap,
  MessageCircle,
  Download,
  StarIcon,
} from "lucide-react";

export default function TimeTrackingSoftwarePage() {
  const features = [
    {
      icon: Clock,
      title: "Control horario multidispositivo",
      description:
        "Ficha desde cualquier dispositivo: móvil, tablet, web o terminal físico. Tus empleados pueden fichar desde cualquier lugar.",
    },
    {
      icon: Smartphone,
      title: "App móvil nativa",
      description:
        "Aplicación móvil disponible para iOS y Android con todas las funcionalidades del control horario.",
    },
    {
      icon: Tablet,
      title: "Terminal de fichaje",
      description:
        "Convierte cualquier tablet en un terminal de fichaje con reconocimiento facial y código QR.",
    },
    {
      icon: Globe,
      title: "Portal web",
      description:
        "Acceso web completo para administradores y empleados con todas las funcionalidades.",
    },
    {
      icon: Shield,
      title: "Cumplimiento legal",
      description:
        "Cumple con la normativa de registro horario obligatorio y todas las leyes laborales vigentes.",
    },
    {
      icon: BarChart3,
      title: "Informes en tiempo real",
      description:
        "Genera informes detallados de horas trabajadas, ausencias, horas extra y productividad.",
    },
  ];

  const benefits = [
    "Cumplimiento automático con la ley de registro horario",
    "Reducción del 80% en tareas administrativas",
    "Control de horas extra y productividad",
    "Integración con sistemas de nóminas",
    "Geolocalización y control de presencia",
    "Notificaciones automáticas y alertas",
    "Backup automático de todos los datos",
    "Soporte técnico 24/7",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📢 Ficha a tu manera, ficha con Humancore.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Software de control horario
              <br />
              <span className="text-blue-600">que cumple con la ley</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Cumple con la nueva ley de fichaje digital sin cambiar tu rutina.
              Control horario completo, multidispositivo y con todas las
              garantías legales.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Todo lo que necesitas para el
              <br />
              <span className="text-blue-600">control horario perfecto</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una solución completa que se adapta a cualquier empresa, desde
              startups hasta grandes corporaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Humancore para tu control horario?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de cientos empresas confían en Humancore para gestionar el
                tiempo de sus empleados de forma eficiente y legal.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resultados reales
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
                    15 min
                  </div>
                  <div className="text-gray-600">
                    Tiempo medio de configuración
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600">
                    Tiempo de actividad garantizado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas frecuentes sobre control horario
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Es obligatorio el registro horario en mi empresa?
              </h3>
              <p className="text-gray-600">
                Sí, desde mayo de 2019 es obligatorio para todas las empresas
                registrar la jornada diaria de sus empleados. Humancore te ayuda
                a cumplir con esta normativa de forma automática.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo usar Humancore desde el móvil?
              </h3>
              <p className="text-gray-600">
                Por supuesto. Humancore cuenta con aplicaciones nativas para iOS
                y Android, además de acceso web responsive. Tus empleados pueden
                fichar desde cualquier dispositivo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona el reconocimiento facial?
              </h3>
              <p className="text-gray-600">
                Nuestro sistema de reconocimiento facial es opcional y permite
                fichar de forma segura y rápida. Los datos biométricos se
                almacenan de forma encriptada y cumplen con la normativa GDPR.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Se integra con mi software de nóminas?
              </h3>
              <p className="text-gray-600">
                Sí, Humancore se integra con los principales software de nóminas
                del mercado. Esto te permite automatizar la transferencia de
                datos y evitar duplicar trabajo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Es posible gestionar turnos, vacaciones y ausencias con
                Humancore?
              </h3>
              <p className="text-gray-600">
                Sí. Además del control horario, Humancore incluye
                funcionalidades para la gestión de turnos, vacaciones y
                ausencias. Los empleados pueden solicitar días libres y los
                responsables pueden aprobar o rechazar estas solicitudes, todo
                desde la misma plataforma, lo que simplifica la planificación y
                organización del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu control horario?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a más de cientos empresas que ya confían en Humancore
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
