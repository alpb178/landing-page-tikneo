import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Calendar,
  Users,
  Clock,
  Smartphone,
  BarChart3,
  Zap,
  MessageCircle,
  Download,
  Star,
  AlertCircle,
} from "lucide-react";

export default function VacationManagerPage() {
  const features = [
    {
      icon: Calendar,
      title: "Gestión de vacaciones",
      description:
        "Los empleados pueden solicitar vacaciones directamente desde la app móvil o el portal web, con aprobación automática o manual según tus reglas.",
    },
    {
      icon: Users,
      title: "Control de disponibilidad",
      description:
        "Visualiza quién está de vacaciones, cuándo regresa y planifica la cobertura necesaria para mantener la productividad.",
    },
    {
      icon: Clock,
      title: "Políticas personalizables",
      description:
        "Configura diferentes tipos de ausencias, días de vacaciones por año, períodos de bloqueo y reglas de aprobación.",
    },
    {
      icon: Smartphone,
      title: "Notificaciones automáticas",
      description:
        "Los empleados reciben recordatorios sobre días de vacaciones pendientes y los managers son notificados de nuevas solicitudes.",
    },
    {
      icon: BarChart3,
      title: "Informes de ausencias",
      description:
        "Genera reportes detallados sobre el uso de vacaciones, patrones de ausencias y análisis de tendencias.",
    },
    {
      icon: AlertCircle,
      title: "Integración con nóminas",
      description:
        "Sincroniza automáticamente los días de vacaciones con tu software de nóminas para cálculos precisos.",
    },
  ];

  const benefits = [
    "Reducción del 70% en tiempo de gestión de vacaciones",
    "Eliminación de errores en el cálculo de días pendientes",
    "Mejora en la planificación de recursos humanos",
    "Cumplimiento automático de políticas de vacaciones",
    "Transparencia total para empleados y managers",
    "Integración perfecta con control horario",
    "Notificaciones proactivas y recordatorios",
    "Reportes automáticos para RRHH",
  ];

  const useCases = [
    {
      title: "Empresas Pequeñas",
      description:
        "Gestión simple y directa de vacaciones con aprobación automática o manual según tus necesidades.",
      features: [
        "Solicitudes desde móvil",
        "Aprobación en un clic",
        "Calendario compartido",
        "Recordatorios automáticos",
      ],
    },
    {
      title: "Empresas Medianas",
      description:
        "Control avanzado con políticas personalizadas, múltiples tipos de ausencias y flujos de aprobación.",
      features: [
        "Múltiples tipos de ausencias",
        "Flujos de aprobación",
        "Políticas por departamento",
        "Integración con nóminas",
      ],
    },
    {
      title: "Grandes Corporaciones",
      description:
        "Solución completa con análisis avanzados, integración con sistemas existentes y reportes ejecutivos.",
      features: [
        "Analytics avanzados",
        "Integración con ERP",
        "Reportes ejecutivos",
        "Gestión multi-país",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Elena Rodríguez",
      position: "Directora de RRHH",
      company: "TechCorp",
      content:
        "El gestor de vacaciones de Humancore nos ha ahorrado horas semanales. Los empleados pueden solicitar desde el móvil y nosotros aprobamos en segundos.",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      position: "Gerente de Operaciones",
      company: "RetailMax",
      content:
        "La integración con nuestro sistema de nóminas es perfecta. Ya no tenemos errores en el cálculo de días de vacaciones pendientes.",
      rating: 5,
    },
    {
      name: "Ana García",
      position: "CEO",
      company: "StartupLab",
      content:
        "La transparencia que da a nuestros empleados sobre sus días de vacaciones ha mejorado mucho la satisfacción del equipo.",
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
                📅 Gestión inteligente de vacaciones
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Gestor de vacaciones
                <br />
                <span className="text-blue-600">que simplifica tu RRHH</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gestiona las vacaciones de tu equipo de forma automática,
                transparente y sin errores. Desde solicitudes hasta
                aprobaciones, todo en una sola plataforma.
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>
                  Sin compromiso • Configuración en minutos • Soporte incluido
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">
                      Humancore Vacaciones
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Enero 2025</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">
                        Solicitudes pendientes
                      </span>
                      <span className="text-sm text-blue-600">
                        3 solicitudes
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>María - 5 días (15-19 Ene)</span>
                        <span className="text-green-600">✓ Aprobada</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carlos - 3 días (22-24 Ene)</span>
                        <span className="text-yellow-600">⏳ Pendiente</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Días disponibles
                      </span>
                      <span className="text-sm text-green-600">22 días</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Usados: 8 días</p>
                      <p>• Pendientes: 14 días</p>
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
              Todo lo que necesitas para
              <br />
              <span className="text-blue-600">
                gestionar vacaciones perfectamente
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una herramienta completa que se adapta a cualquier tamaño de
              empresa para optimizar la gestión de ausencias y vacaciones.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfecto para tu empresa
            </h2>
            <p className="text-lg text-gray-600">
              Adaptamos la gestión de vacaciones a las necesidades específicas
              de cada tipo de empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
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
                ¿Por qué elegir Humancore para gestionar vacaciones?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de cientos empresas confían en Humancore para gestionar las
                vacaciones de sus equipos de forma eficiente y sin errores.
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

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resultados que obtienes
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    70%
                  </div>
                  <div className="text-gray-600">Menos tiempo en gestión</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Eliminación de errores</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    85%
                  </div>
                  <div className="text-gray-600">Mejora en satisfacción</div>
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
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600">
              Empresas de todos los sectores han transformado su gestión de
              vacaciones con Humancore
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas frecuentes sobre gestión de vacaciones
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo configurar diferentes tipos de ausencias?
              </h3>
              <p className="text-gray-600">
                Sí, Humancore permite configurar múltiples tipos de ausencias:
                vacaciones, días personales, enfermedad, formación, etc. Cada
                tipo puede tener sus propias reglas y políticas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona la aprobación de vacaciones?
              </h3>
              <p className="text-gray-600">
                Puedes configurar aprobación automática para ciertos casos o
                manual para otros. Los managers reciben notificaciones y pueden
                aprobar o rechazar desde cualquier dispositivo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Se integra con el control horario?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Las vacaciones se sincronizan automáticamente con
                el control horario, evitando que los empleados puedan fichar
                durante sus días de vacaciones.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo establecer períodos de bloqueo?
              </h3>
              <p className="text-gray-600">
                Sí, puedes configurar períodos donde no se permiten vacaciones
                (como temporadas altas) y establecer reglas de antelación mínima
                para las solicitudes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo se calculan los días de vacaciones pendientes?
              </h3>
              <p className="text-gray-600">
                El sistema calcula automáticamente los días disponibles
                basándose en la antigüedad, tipo de contrato y políticas de la
                empresa. Se actualiza en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
