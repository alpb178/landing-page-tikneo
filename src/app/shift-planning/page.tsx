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

export default function ShiftPlanningPage() {
  const features = [
    {
      icon: Calendar,
      title: "Calendarios inteligentes",
      description:
        "Crea calendarios de trabajo personalizados con turnos rotativos, horarios flexibles y patrones de trabajo complejos.",
    },
    {
      icon: Users,
      title: "Gestión de equipos",
      description:
        "Asigna empleados a turnos específicos, gestiona disponibilidades y controla la cobertura de personal.",
    },
    {
      icon: Clock,
      title: "Turnos automáticos",
      description:
        "Automatiza la asignación de turnos basada en reglas predefinidas, preferencias de empleados y necesidades del negocio.",
    },
    {
      icon: Smartphone,
      title: "Notificaciones móviles",
      description:
        "Los empleados reciben notificaciones push sobre sus turnos, cambios de horario y recordatorios importantes.",
    },
    {
      icon: BarChart3,
      title: "Análisis de productividad",
      description:
        "Mide la eficiencia de los turnos, identifica patrones de trabajo y optimiza la distribución del personal.",
    },
    {
      icon: AlertCircle,
      title: "Control de cumplimiento",
      description:
        "Asegura el cumplimiento de las leyes laborales, descansos obligatorios y límites de horas trabajadas.",
    },
  ];

  const benefits = [
    "Reducción del 60% en tiempo de planificación",
    "Eliminación de conflictos de horarios",
    "Mejora de la satisfacción del empleado",
    "Cumplimiento automático de normativas laborales",
    "Optimización de recursos humanos",
    "Comunicación clara y transparente",
    "Flexibilidad para cambios de última hora",
    "Integración con control horario",
  ];

  const useCases = [
    {
      title: "Retail y Comercio",
      description:
        "Gestiona turnos de ventas, cajas, reposición y atención al cliente con horarios variables y picos de demanda.",
      features: [
        "Turnos de mañana, tarde y noche",
        "Gestión de festivos",
        "Cobertura de vacaciones",
        "Turnos de fin de semana",
      ],
    },
    {
      title: "Hostelería y Restauración",
      description:
        "Organiza turnos de cocina, sala, bar y limpieza adaptándote a los picos de ocupación y eventos especiales.",
      features: [
        "Turnos de cocina y sala",
        "Gestión de eventos",
        "Turnos nocturnos",
        "Cobertura de festivos",
      ],
    },
    {
      title: "Salud y Sanidad",
      description:
        "Planifica turnos de 24 horas, guardias médicas, enfermería y personal auxiliar con máxima precisión.",
      features: [
        "Turnos de 24 horas",
        "Guardias médicas",
        "Turnos de emergencia",
        "Cobertura continua",
      ],
    },
    {
      title: "Manufactura e Industria",
      description:
        "Coordina turnos de producción, mantenimiento y logística para optimizar la cadena de producción.",
      features: [
        "Turnos de producción",
        "Mantenimiento programado",
        "Turnos de logística",
        "Gestión de paradas",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Laura Sánchez",
      position: "Directora de Operaciones",
      company: "RetailMax",
      content:
        "Humancore nos ha revolucionado la gestión de turnos. Antes tardábamos 4 horas semanales en planificar, ahora es automático.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      position: "Gerente de RRHH",
      company: "Hotel Palace",
      content:
        "La flexibilidad para gestionar turnos de hostelería es increíble. Nuestros empleados están mucho más satisfechos.",
      rating: 5,
    },
    {
      name: "Carmen López",
      position: "Supervisora",
      company: "Clínica San José",
      content:
        "Para el sector sanitario es fundamental tener turnos bien organizados. Humancore nos da la tranquilidad que necesitamos.",
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
                📅 Planificación inteligente de turnos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Planificación de turnos
                <br />
                <span className="text-purple-600">que funciona</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Organiza los turnos de tu equipo de forma inteligente,
                automática y sin conflictos. Desde retail hasta sanidad, adapta
                los horarios a las necesidades de tu negocio.
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
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">
                      Humancore Turnos
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Semana 15</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">
                        Lunes 15 Abril
                      </span>
                      <span className="text-sm text-purple-600">
                        8 empleados
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span>Mañana (08:00-16:00)</span>
                        <span className="text-green-600">4 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tarde (16:00-00:00)</span>
                        <span className="text-green-600">4 ✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Martes 16 Abril
                      </span>
                      <span className="text-sm text-blue-600">7 empleados</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• María - Vacaciones</p>
                      <p>• Turno extra: Carlos</p>
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
              <span className="text-purple-600">
                planificar turnos perfectos
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una herramienta completa que se adapta a cualquier sector y tamaño
              de empresa para optimizar la gestión de turnos.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfecto para tu sector
            </h2>
            <p className="text-lg text-gray-600">
              Adaptamos la planificación de turnos a las necesidades específicas
              de cada industria
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
                ¿Por qué elegir Humancore para planificar turnos?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de cientos empresas confían en Humancore para organizar los
                turnos de sus equipos de forma eficiente y sin conflictos.
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
                    60%
                  </div>
                  <div className="text-gray-600">
                    Menos tiempo en planificación
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-600">
                    Reducción de conflictos de horarios
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    40%
                  </div>
                  <div className="text-gray-600">
                    Mejora en satisfacción del empleado
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
              turnos con Humancore
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
            Preguntas frecuentes sobre planificación de turnos
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo crear turnos rotativos automáticamente?
              </h3>
              <p className="text-gray-600">
                Sí, Humancore permite crear patrones de turnos rotativos que se
                aplican automáticamente. Puedes configurar turnos de mañana,
                tarde y noche que roten entre los empleados según tus reglas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo gestiono las vacaciones y ausencias en los turnos?
              </h3>
              <p className="text-gray-600">
                Humancore integra la gestión de vacaciones con la planificación
                de turnos. Cuando un empleado solicita vacaciones, el sistema
                automáticamente busca cobertura y ajusta los turnos afectados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo cambiar turnos de última hora?
              </h3>
              <p className="text-gray-600">
                Por supuesto. Humancore permite cambios de turno en tiempo real
                con notificaciones automáticas a los empleados afectados. El
                sistema busca automáticamente sustitutos disponibles.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Se integra con el control horario?
              </h3>
              <p className="text-gray-600">
                Sí, la planificación de turnos está completamente integrada con
                el control horario. Los empleados pueden ver sus turnos
                asignados y fichar según su horario planificado.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Funciona para empresas con múltiples ubicaciones?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Humancore permite gestionar turnos para múltiples
                centros de trabajo, sucursales o departamentos desde una sola
                plataforma centralizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
