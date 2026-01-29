import {
  FileText,
  Clock,
  Wifi,
  Building2,
  ShieldCheck,
  FolderKanban,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: FileText, label: "Informes Laborales" },
  { icon: Clock, label: "Gestión de turnos" },
  { icon: Wifi, label: "Fichaje en remoto" },
  { icon: Building2, label: "Multiempresa" },
  { icon: ShieldCheck, label: "Seguridad y Privacidad" },
  { icon: FolderKanban, label: "Proyectos" },
  { icon: MessageCircle, label: "Avisos y Chat" },
];

export default function WhyTikneo() {
  return (
    <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          ¿Por qué usar Tikneo?
        </h1>

        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-12">
          <p>
            ¿Por qué deberías elegir nuestra aplicación de control de horario? La
            respuesta es simple: porque te ayuda a tomar el control de tu tiempo
            de manera eficiente y efectiva.
          </p>
          <p>
            Nuestra aplicación te permite planificar, registrar y analizar tus
            actividades diarias de manera intuitiva y conveniente. Con funciones
            avanzadas como el seguimiento de tareas, el registro de horas
            trabajadas y herramientas de análisis, puedes optimizar tu tiempo y
            aumentar tu productividad como nunca antes.
          </p>
          <p>
            Imagina tener una visión clara de cómo empleas cada hora de tu día.
            Con nuestra aplicación, puedes identificar fácilmente dónde estás
            invirtiendo tu tiempo y ajustar tus hábitos para ser más productivo.
            Desde profesionales independientes hasta equipos de trabajo, nuestra
            aplicación se adapta a tus necesidades y te ayuda a alcanzar tus metas
            de manera más eficiente.
          </p>
          <p>
            Además, la seguridad de tus datos es nuestra prioridad. Con
            tecnologías de encriptación avanzadas, puedes estar seguro de que tu
            información está protegida en todo momento.
          </p>
          <p>
            En resumen, usar nuestra aplicación de control de horario significa
            tomar el control de tu tiempo y tu vida. Es una herramienta poderosa
            que te ayuda a trabajar de manera más inteligente, no más difícil.
            Únete a nosotros y descubre cómo puedes aprovechar al máximo cada
            momento de tu día.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Link
            href="/price"
            className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-8 py-3.5 rounded-2xl shadow-md transition-colors"
          >
            Ver Planes
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                <item.icon className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
