import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Tablet,
  Smartphone,
  Shield,
  Zap,
  MessageCircle,
  Download,
  AlertCircle,
  Camera,
  Users,
  StarIcon,
} from "lucide-react";

export default function TabletClockInPage() {
  const features = [
    {
      icon: Tablet,
      title: "Tablet de fichaje",
      description:
        "Convierte cualquier tablet en un terminal de fichaje profesional con reconocimiento facial, código QR y geolocalización.",
    },
    {
      icon: Camera,
      title: "Reconocimiento facial",
      description:
        "Sistema de reconocimiento facial avanzado que permite fichar de forma segura y rápida sin necesidad de tarjetas o códigos.",
    },
    {
      icon: Shield,
      title: "Seguridad avanzada",
      description:
        "Cumple con todas las normativas de seguridad y privacidad. Los datos biométricos se almacenan de forma encriptada.",
    },
    {
      icon: Users,
      title: "Multi-usuario",
      description:
        "Soporta múltiples empleados en una sola tablet, ideal para oficinas, fábricas o centros de trabajo compartidos.",
    },
    {
      icon: Smartphone,
      title: "Sincronización en tiempo real",
      description:
        "Todos los fichajes se sincronizan automáticamente con la plataforma web y móvil en tiempo real.",
    },
    {
      icon: AlertCircle,
      title: "Control de acceso",
      description:
        "Configura horarios de acceso, zonas permitidas y restricciones por empleado o departamento.",
    },
  ];

  const benefits = [
    "Reducción del 90% en costes vs terminales tradicionales",
    "Instalación en menos de 15 minutos",
    "Reconocimiento facial en menos de 2 segundos",
    "Funciona sin conexión a internet",
    "Cumplimiento total con normativas laborales",
    "Interfaz intuitiva para todos los empleados",
    "Mantenimiento mínimo y actualizaciones automáticas",
    "Soporte técnico 24/7 incluido",
  ];

  const useCases = [
    {
      title: "Oficinas y Despachos",
      description:
        "Perfecto para oficinas donde los empleados necesitan fichar al entrar y salir del edificio.",
      features: [
        "Reconocimiento facial",
        "Código QR opcional",
        "Geolocalización",
        "Integración con sistemas de acceso",
      ],
    },
    {
      title: "Fábricas y Almacenes",
      description:
        "Ideal para entornos industriales con múltiples turnos y puntos de acceso.",
      features: [
        "Resistente a polvo",
        "Pantalla táctil robusta",
        "Funciona en exteriores",
        "Múltiples usuarios",
      ],
    },
    {
      title: "Retail y Comercio",
      description:
        "Solución perfecta para tiendas y centros comerciales con horarios variables.",
      features: [
        "Fácil instalación",
        "Diseño atractivo",
        "Notificaciones push",
        "Reportes automáticos",
      ],
    },
    {
      title: "Construcción y Obras",
      description:
        "Terminal robusto para entornos de construcción con condiciones adversas.",
      features: [
        "Resistente a golpes",
        "Pantalla brillante",
        "Batería de larga duración",
        "Conexión 4G",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Roberto Silva",
      position: "Director de Operaciones",
      company: "Constructora Plus",
      content:
        "El tablet de fichaje de Tikneo ha sido una revolución en nuestras obras. Los trabajadores fichan en segundos y nosotros tenemos control total.",
      rating: 5,
    },
    {
      name: "Carmen López",
      position: "Gerente de RRHH",
      company: "RetailMax",
      content:
        "La instalación fue súper fácil. En 10 minutos teníamos el sistema funcionando en todas nuestras tiendas. Los empleados lo adoptaron inmediatamente.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      position: "CEO",
      company: "TechFactory",
      content:
        "El reconocimiento facial es increíblemente rápido y preciso. Hemos eliminado completamente los problemas de fichajes duplicados o perdidos.",
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
                📱 Tablet de fichaje profesional
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tablet para fichar
                <br />
                <span className="text-green-600">
                  que revoluciona tu empresa
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Convierte cualquier tablet en un terminal de fichaje profesional
                con reconocimiento facial, código QR y todas las funcionalidades
                que necesitas para el control horario.
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
                  Sin compromiso • Instalación en 15 min • Soporte incluido
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <Tablet className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Tikneo Wall</span>
                  </div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">
                        Fichajes hoy
                      </span>
                      <span className="text-sm text-green-600">
                        24 empleados
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>María González</span>
                        <span className="text-green-600">08:30 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carlos Ruiz</span>
                        <span className="text-green-600">08:45 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ana Martínez</span>
                        <span className="text-yellow-600">⏳ Pendiente</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Reconocimiento facial
                      </span>
                      <span className="text-sm text-blue-600">
                        99.8% precisión
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Tiempo promedio: 1.2s</p>
                      <p>• Último fichaje: 08:45</p>
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
                fichar de forma profesional
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una solución completa que convierte cualquier tablet en un
              terminal de fichaje de nivel empresarial.
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
              Perfecto para tu sector
            </h2>
            <p className="text-lg text-gray-600">
              Adaptamos el tablet de fichaje a las necesidades específicas de
              cada industria
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
                ¿Por qué elegir Tikneo Wall?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Más de 14.000 empresas confían en nuestros tablets de fichaje
                para el control horario de sus equipos.
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
                    90%
                  </div>
                  <div className="text-gray-600">Reducción de costes</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15 min
                  </div>
                  <div className="text-gray-600">Tiempo de instalación</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    99.8%
                  </div>
                  <div className="text-gray-600">Precisión reconocimiento</div>
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
              Empresas de todos los sectores han transformado su fichaje con
              Tikneo Wall
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
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
            Preguntas frecuentes sobre tablet de fichaje
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Qué tablet necesito para usar Tikneo Wall?
              </h3>
              <p className="text-gray-600">
                Cualquier tablet Android o iPad funciona perfectamente.
                Recomendamos tablets de 10 pulgadas o más para una mejor
                experiencia de usuario. No necesitas hardware especial.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona el reconocimiento facial?
              </h3>
              <p className="text-gray-600">
                El sistema utiliza la cámara frontal del tablet para reconocer a
                los empleados en menos de 2 segundos. Los datos biométricos se
                almacenan de forma encriptada y cumplen con la normativa GDPR.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Funciona sin conexión a internet?
              </h3>
              <p className="text-gray-600">
                Sí, el tablet puede funcionar sin conexión a internet. Los
                fichajes se almacenan localmente y se sincronizan
                automáticamente cuando se restablece la conexión.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo usar múltiples tablets en la misma empresa?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Puedes tener tantos tablets como necesites, todos
                sincronizados con la misma cuenta y datos centralizados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Es seguro el reconocimiento facial?
              </h3>
              <p className="text-gray-600">
                Sí, utilizamos tecnología de reconocimiento facial de última
                generación con encriptación de extremo a extremo. Los datos
                biométricos nunca salen de tu infraestructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para revolucionar el fichaje en tu empresa?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Únete a miles de empresas que ya fichan con tablets de forma
            profesional
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
