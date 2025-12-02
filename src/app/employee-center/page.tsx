import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Users,
  Smartphone,
  Globe,
  Shield,
  BarChart3,
  Zap,
  MessageCircle,
  Download,
  Star,
  Bell,
} from "lucide-react";

export default function CentroEmpleadosPage() {
  const features = [
    {
      icon: Users,
      title: "Portal del empleado",
      description:
        "Los empleados acceden a toda su información laboral desde un portal web intuitivo y fácil de usar desde cualquier dispositivo.",
    },
    {
      icon: Smartphone,
      title: "App móvil completa",
      description:
        "Aplicación móvil nativa con todas las funcionalidades: fichaje, vacaciones, nóminas, comunicaciones y más.",
    },
    {
      icon: Globe,
      title: "Acceso web responsive",
      description:
        "Portal web que se adapta perfectamente a móviles, tablets y ordenadores para máxima flexibilidad.",
    },
    {
      icon: Shield,
      title: "Seguridad avanzada",
      description:
        "Autenticación de dos factores, encriptación de datos y cumplimiento total con normativas de privacidad.",
    },
    {
      icon: BarChart3,
      title: "Dashboard personalizado",
      description:
        "Cada empleado ve su información relevante: horas trabajadas, vacaciones pendientes, próximos eventos y más.",
    },
    {
      icon: Bell,
      title: "Notificaciones inteligentes",
      description:
        "Sistema de notificaciones push y email para mantener a los empleados informados de todo lo importante.",
    },
  ];

  const benefits = [
    "Mejora del 85% en satisfacción del empleado",
    "Reducción del 60% en consultas a RRHH",
    "Acceso 24/7 desde cualquier dispositivo",
    "Información siempre actualizada en tiempo real",
    "Autogestión completa de datos personales",
    "Comunicación directa con la empresa",
    "Transparencia total en información laboral",
    "Integración perfecta con todos los módulos",
  ];

  const functionalities = [
    {
      title: "Control Horario",
      description:
        "Fichaje, consulta de horas, justificación de ausencias y gestión de horas extra.",
      features: [
        "Fichaje móvil",
        "Consulta de horarios",
        "Justificación de ausencias",
        "Gestión de horas extra",
      ],
    },
    {
      title: "Gestión de Vacaciones",
      description:
        "Solicitud de vacaciones, consulta de días disponibles y seguimiento de aprobaciones.",
      features: [
        "Solicitud de vacaciones",
        "Calendario personal",
        "Estado de solicitudes",
        "Historial de ausencias",
      ],
    },
    {
      title: "Información Laboral",
      description:
        "Acceso a nóminas, contratos, certificados y toda la documentación laboral.",
      features: [
        "Descarga de nóminas",
        "Contratos digitales",
        "Certificados laborales",
        "Documentación personal",
      ],
    },
    {
      title: "Comunicación",
      description:
        "Mensajería interna, notificaciones, avisos de la empresa y comunicación bidireccional.",
      features: [
        "Mensajería interna",
        "Notificaciones push",
        "Avisos corporativos",
        "Chat con RRHH",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Laura Sánchez",
      position: "Empleada",
      company: "TechCorp",
      content:
        "El centro de empleados de Humancore es increíble. Puedo consultar mis horas, solicitar vacaciones y descargar mis nóminas desde el móvil. Todo súper fácil.",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      position: "Director de RRHH",
      company: "RetailMax",
      content:
        "Hemos reducido las consultas a RRHH en un 70%. Los empleados encuentran toda la información que necesitan de forma autónoma.",
      rating: 5,
    },
    {
      name: "Ana García",
      position: "Gerente",
      company: "StartupLab",
      content:
        "La satisfacción de nuestros empleados ha mejorado muchísimo. Tener toda la información laboral en un solo lugar es un gran avance.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                👥 Centro de empleados completo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Centro de empleados
                <br />
                <span className="text-purple-600">
                  que empodera a tu equipo
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dale a tus empleados acceso completo a toda su información
                laboral desde un portal web y app móvil intuitivos. Autogestión,
                transparencia y satisfacción garantizada.
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>
                  Sin compromiso • Configuración automática • Soporte incluido
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">
                      Mi Humancore
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Empleado</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">
                        Mi jornada hoy
                      </span>
                      <span className="text-sm text-purple-600">6h 30min</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Entrada: 08:30</span>
                        <span className="text-green-600">✓ Fichado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Salida estimada: 17:30</span>
                        <span className="text-blue-600">⏰ Pendiente</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Mis vacaciones
                      </span>
                      <span className="text-sm text-blue-600">12 días</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Disponibles: 12 días</p>
                      <p>• Próxima solicitud: Pendiente</p>
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
              Todo lo que necesitan tus empleados
              <br />
              <span className="text-purple-600">en un solo lugar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un centro de empleados completo que pone toda la información
              laboral al alcance de tus empleados de forma intuitiva y segura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Functionalities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Funcionalidades del centro de empleados
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que tus empleados necesitan para gestionar su vida laboral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functionalities.map((func, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {func.title}
                </h3>
                <p className="text-gray-600 mb-6">{func.description}</p>
                <ul className="space-y-2">
                  {func.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir el centro de empleados de Humancore?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de cientos empresas confían en nuestro centro de empleados
                para mejorar la experiencia de sus equipos.
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

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resultados que obtienes
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    85%
                  </div>
                  <div className="text-gray-600">Mejora en satisfacción</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    60%
                  </div>
                  <div className="text-gray-600">Menos consultas a RRHH</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Acceso siempre disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-lg text-gray-600">
              Empleados y empresas han transformado su experiencia laboral con
              nuestro centro de empleados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-purple-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas frecuentes sobre centro de empleados
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Los empleados pueden acceder desde el móvil?
              </h3>
              <p className="text-gray-600">
                Sí, el centro de empleados está disponible tanto en app móvil
                nativa como en versión web responsive. Los empleados pueden
                acceder desde cualquier dispositivo con la misma funcionalidad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Qué información pueden ver los empleados?
              </h3>
              <p className="text-gray-600">
                Los empleados pueden ver toda su información laboral: fichajes,
                vacaciones, nóminas, contratos, certificados, comunicaciones de
                la empresa y más. Todo personalizado según su perfil.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Es seguro el acceso a información personal?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Utilizamos autenticación de dos factores,
                encriptación de extremo a extremo y cumplimos con todas las
                normativas de privacidad y protección de datos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Pueden los empleados solicitar cambios desde el portal?
              </h3>
              <p className="text-gray-600">
                Sí, los empleados pueden solicitar vacaciones, justificar
                ausencias, comunicarse con RRHH y realizar muchas gestiones de
                forma autónoma desde el centro de empleados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Se integra con otros sistemas de la empresa?
              </h3>
              <p className="text-gray-600">
                Sí, el centro de empleados se integra perfectamente con sistemas
                de nóminas, control de acceso, comunicaciones corporativas y
                cualquier otro sistema que uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para empoderar a tus empleados?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Únete a miles de empresas que ya tienen empleados más satisfechos y
            autónomos
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
