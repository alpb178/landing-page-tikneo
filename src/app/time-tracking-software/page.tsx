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

  const testimonials = [
    {
      name: "María González",
      position: "Directora de RRHH",
      company: "TechCorp",
      content:
        "Sesame nos ha permitido automatizar completamente el control horario. Ahorramos 10 horas semanales en tareas administrativas.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      position: "CEO",
      company: "InnovateLab",
      content:
        "La facilidad de uso es increíble. Nuestros empleados pueden fichar desde cualquier lugar y nosotros tenemos control total.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      position: "Gerente",
      company: "RetailPlus",
      content:
        "Los informes son muy detallados y nos ayudan a optimizar la productividad del equipo. Excelente herramienta.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📢 Ficha a tu manera, ficha con Sesame.
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Software de control horario
                <br />
                <span className="text-blue-600">que cumple con la ley</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cumple con la nueva ley de fichaje digital sin cambiar tu
                rutina. Control horario completo, multidispositivo y con todas
                las garantías legales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Prueba gratis 14 días
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contacta con ventas
                </button>
              </div>
              <div className="mt-6 flex items-center text-sm text-gray-600">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span>
                  Sin compromiso • Sin tarjeta de crédito • Configuración en 5
                  minutos
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <span className="font-bold text-gray-900">Sesame</span>
                  </div>
                  <div className="text-sm text-gray-500">09:45</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Control horario
                      </span>
                      <span className="text-sm text-green-600">● Online</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Entrada: 08:30</p>
                      <p>Salida: 17:30</p>
                      <p>Horas trabajadas: 8h 00min</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Empleados activos
                      </span>
                      <span className="text-sm text-blue-600">12/15</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                ¿Por qué elegir Sesame para tu control horario?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de 14.000 empresas confían en Sesame para gestionar el
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600">
              Miles de empresas ya han transformado su gestión del tiempo con
              Sesame
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
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
                registrar la jornada diaria de sus empleados. Sesame te ayuda a
                cumplir con esta normativa de forma automática.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo usar Sesame desde el móvil?
              </h3>
              <p className="text-gray-600">
                Por supuesto. Sesame cuenta con aplicaciones nativas para iOS y
                Android, además de acceso web responsive. Tus empleados pueden
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
                Sí, Sesame se integra con los principales software de nóminas
                del mercado. Esto te permite automatizar la transferencia de
                datos y evitar duplicar trabajo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Es posible gestionar turnos, vacaciones y ausencias con Sesame?
              </h3>
              <p className="text-gray-600">
                Sí. Además del control horario, Sesame incluye funcionalidades
                para la gestión de turnos, vacaciones y ausencias. Los empleados
                pueden solicitar días libres y los responsables pueden aprobar o
                rechazar estas solicitudes, todo desde la misma plataforma, lo
                que simplifica la planificación y organización del equipo.
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
            Únete a más de 14.000 empresas que ya confían en Sesame
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Zap className="mr-2 h-5 w-5" />
              Prueba gratis 14 días
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Descargar guía
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
