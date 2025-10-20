import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Target,
  Users,
  Clock,
  BarChart3,
  Zap,
  MessageCircle,
  Download,
  Star,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export default function PlanificacionTareasPage() {
  const features = [
    {
      icon: Target,
      title: "Gestión de proyectos",
      description:
        "Organiza tareas en proyectos, establece dependencias y sigue el progreso en tiempo real con vistas Kanban y Gantt.",
    },
    {
      icon: Users,
      title: "Asignación de equipos",
      description:
        "Asigna tareas a empleados específicos, crea equipos de trabajo y gestiona la carga de trabajo de cada miembro.",
    },
    {
      icon: Clock,
      title: "Seguimiento de tiempo",
      description:
        "Los empleados registran el tiempo dedicado a cada tarea, permitiendo análisis de productividad y facturación precisa.",
    },
    {
      icon: BarChart3,
      title: "Análisis de rendimiento",
      description:
        "Mide la productividad del equipo, identifica cuellos de botella y optimiza la distribución de tareas.",
    },
    {
      icon: AlertCircle,
      title: "Alertas y notificaciones",
      description:
        "Notificaciones automáticas para plazos, cambios de prioridad y actualizaciones de estado de las tareas.",
    },
    {
      icon: RefreshCw,
      title: "Automatización de flujos",
      description:
        "Automatiza la creación de tareas recurrentes, aprobaciones y flujos de trabajo para optimizar procesos.",
    },
  ];

  const benefits = [
    "Aumento del 35% en productividad del equipo",
    "Reducción del 50% en tiempo de planificación",
    "Mejora de la visibilidad del progreso",
    "Optimización de recursos y capacidades",
    "Mejor comunicación entre equipos",
    "Cumplimiento de plazos y objetivos",
    "Análisis detallado de rendimiento",
    "Integración con control horario",
  ];

  const useCases = [
    {
      title: "Desarrollo de Software",
      description:
        "Gestiona sprints, historias de usuario, bugs y releases con metodologías ágiles integradas.",
      features: [
        "Sprints y releases",
        "Gestión de bugs",
        "Code reviews",
        "Testing automatizado",
      ],
    },
    {
      title: "Marketing y Comunicación",
      description:
        "Planifica campañas, contenido, eventos y estrategias de comunicación con seguimiento detallado.",
      features: [
        "Campañas publicitarias",
        "Contenido digital",
        "Eventos corporativos",
        "Análisis de ROI",
      ],
    },
    {
      title: "Consultoría y Servicios",
      description:
        "Organiza proyectos de consultoría, facturación por horas y seguimiento de clientes.",
      features: [
        "Proyectos de consultoría",
        "Facturación por horas",
        "Seguimiento de clientes",
        "Reportes de progreso",
      ],
    },
    {
      title: "Manufactura y Producción",
      description:
        "Coordina procesos de producción, mantenimiento, calidad y logística con métricas precisas.",
      features: [
        "Procesos de producción",
        "Control de calidad",
        "Mantenimiento",
        "Logística",
      ],
    },
  ];

  const testimonials = [
    {
      name: "David García",
      position: "CTO",
      company: "TechStart",
      content:
        "Sesame nos ha permitido gestionar nuestros sprints de desarrollo de forma mucho más eficiente. La visibilidad del progreso es excelente.",
      rating: 5,
    },
    {
      name: "Isabel Moreno",
      position: "Directora de Marketing",
      company: "Brand Agency",
      content:
        "La planificación de campañas es ahora mucho más organizada. Podemos seguir cada tarea y medir el impacto real de nuestro trabajo.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      position: "Gerente de Proyectos",
      company: "Consulting Pro",
      content:
        "Para proyectos de consultoría es fundamental el seguimiento del tiempo. Sesame nos da la precisión que necesitamos para facturar correctamente.",
      rating: 5,
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📋 Planificación inteligente de tareas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Planificación de tareas
                <br />
                <span className="text-green-600">que impulsa resultados</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Organiza, asigna y sigue el progreso de las tareas de tu equipo.
                Desde proyectos complejos hasta tareas diarias, maximiza la
                productividad y cumple objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Prueba gratis 14 días
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ver demo
                </button>
              </div>
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
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">
                      Sesame Tareas
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Proyecto Activo</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">
                        Proyecto: Nueva App
                      </span>
                      <span className="text-sm text-green-600">
                        75% completado
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Diseño UI/UX</span>
                        <span className="text-green-600">✓ Completado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Desarrollo Frontend</span>
                        <span className="text-blue-600">🔄 En progreso</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Testing</span>
                        <span className="text-gray-400">⏳ Pendiente</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Tareas de hoy
                      </span>
                      <span className="text-sm text-blue-600">5 tareas</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Revisar código de login</p>
                      <p>• Actualizar documentación</p>
                      <p>• Reunión con cliente</p>
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
              <span className="text-green-600">
                gestionar tareas eficientemente
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una herramienta completa que se adapta a cualquier metodología de
              trabajo y tamaño de equipo para maximizar la productividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
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
              Perfecto para tu tipo de trabajo
            </h2>
            <p className="text-lg text-gray-600">
              Adaptamos la gestión de tareas a las necesidades específicas de
              cada sector y metodología
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                ¿Por qué elegir Sesame para gestionar tareas?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de 14.000 empresas confían en Sesame para organizar el
                trabajo de sus equipos y alcanzar objetivos de forma eficiente.
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

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resultados que obtienes
              </h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    35%
                  </div>
                  <div className="text-gray-600">Aumento en productividad</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50%
                  </div>
                  <div className="text-gray-600">
                    Menos tiempo en planificación
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    90%
                  </div>
                  <div className="text-gray-600">
                    Mejora en cumplimiento de plazos
                  </div>
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
              tareas con Sesame
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
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-green-600">
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
            Preguntas frecuentes sobre planificación de tareas
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo crear proyectos con múltiples tareas y dependencias?
              </h3>
              <p className="text-gray-600">
                Sí, Sesame permite crear proyectos complejos con tareas
                interdependientes, fechas límite y seguimiento de progreso.
                Puedes establecer dependencias entre tareas y el sistema te
                alertará sobre posibles retrasos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona el seguimiento de tiempo en las tareas?
              </h3>
              <p className="text-gray-600">
                Los empleados pueden registrar el tiempo dedicado a cada tarea
                directamente desde la aplicación. Esto permite análisis de
                productividad, facturación precisa y optimización de la carga de
                trabajo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Se integra con metodologías ágiles como Scrum?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Sesame incluye plantillas para metodologías
                ágiles, gestión de sprints, historias de usuario y
                retrospectivas. Puedes adaptar el flujo de trabajo a tu
                metodología preferida.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo asignar tareas a equipos específicos?
              </h3>
              <p className="text-gray-600">
                Sí, puedes crear equipos de trabajo, asignar tareas a equipos
                completos o a miembros individuales, y gestionar la carga de
                trabajo de cada persona para evitar sobrecargas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona la automatización de tareas?
              </h3>
              <p className="text-gray-600">
                Sesame permite crear tareas recurrentes, automatizar
                aprobaciones, generar tareas basadas en eventos y configurar
                flujos de trabajo que se ejecutan automáticamente según reglas
                predefinidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para optimizar la gestión de tareas de tu equipo?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Únete a miles de empresas que ya gestionan tareas de forma eficiente
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Zap className="mr-2 h-5 w-5" />
              Prueba gratis 14 días
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
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
