import {
  Clock,
  Smartphone,
  Calendar,
  Link,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Time tracking",
      description:
        "Los empleados pueden fichar con un solo clic. Hacer una pausa, cambiar de tipo de trabajo o añadir detalles de tareas es muy sencillo.",
      link: "Más detalles",
    },
    {
      icon: Smartphone,
      title: "APP mobile",
      description:
        "Descarga nuestra app de control horario tanto en iOS como Android. Podrás fichar, gestionar y aprobar tiempos de tu equipo desde cualquier lugar.",
      link: "Más detalles",
    },
    {
      icon: Calendar,
      title: "Planificación",
      description:
        "Crea calendarios de trabajos para los empleados, horarios y turnos y haz que los reciban de forma inmediata y cómoda.",
      link: "Más detalles",
    },
    {
      icon: Link,
      title: "Integraciones",
      description:
        "Conecta con tu software de creación de nóminas favorito o crea un acceso para tu asesoría y sincroniza las nóminas con el tiempo real de trabajo.",
      link: "Más detalles",
    },
    {
      icon: Zap,
      title: "Horas extra",
      description:
        "Crea reglas para contabilizar las horas extra y asígnales distintos precios en función del día o la hora en que se realicen para que el sistema te ayude a calcular el pago. Además, establece límites al número de horas y avisa a tus empleados cuando los alcancen.",
    },
    {
      icon: BarChart3,
      title: "Informes",
      description:
        "Consulta informes de rendimiento laboral interactivos o descarga toda la información que necesites en formato Excel y PDF. Obtén una gran ventaja en la gestión de tus equipos.",
      link: "Más detalles",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            El control horario
            <br />
            <span className="text-blue-600">que simplifica tu negocio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a
                href={
                  feature.title === "Time tracking"
                    ? "/time-tracking-software"
                    : feature.title === "APP mobile"
                    ? "/mobile-app"
                    : feature.title === "Planificación"
                    ? "/shift-planning"
                    : feature.title === "Integraciones"
                    ? "/web-platform"
                    : feature.title === "Horas extra"
                    ? "/ime-tracking-software"
                    : feature.title === "Informes"
                    ? "/reports-and-statistics"
                    : "#"
                }
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center"
              >
                {feature.link}
                {feature.link && <ArrowRight className="ml-1 h-4 w-4" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
