import { Smartphone, Tablet, Globe, ArrowRight } from "lucide-react";

export default function ClockInMethods() {
  const methods = [
    {
      icon: Smartphone,
      title: "Mobile APP",
      description:
        "Empleados y administradores usan Humancore APP cada día para registrar su jornada, pedir vacaciones o comunicarse con su empresa. Además, las notificaciones push y los recordatorios harán más fácil la gestión de los tiempos en la empresa y mantendrán al equipo siempre informado.",

      image: (
        <div className="w-32 h-56 bg-gray-900 rounded-2xl p-2 shadow-2xl mx-auto mb-6">
          <div className="w-full h-full bg-white rounded-xl flex flex-col">
            <div className="h-8 bg-blue-600 rounded-t-xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">Humancore</span>
            </div>
            <div className="flex-1 p-3">
              <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-2 bg-gray-300 rounded mb-4"></div>
              <div className="w-full h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">Fichar</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Tablet,
      title: "Tablet de fichaje",
      description:
        "Con Humancore Wall convierte cualquier tablet en un punto de fichaje. Una gran alternativa a los sistemas de fichaje tradicionales, más económica y lista para utilizar en minutos.",

      image: (
        <div className="w-40 h-56 bg-gray-800 rounded-xl p-2 shadow-2xl mx-auto mb-6">
          <div className="w-full h-full bg-white rounded-lg flex flex-col">
            <div className="h-6 bg-green-600 rounded-t-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                Humancore Wall
              </span>
            </div>
            <div className="flex-1 p-4">
              <div className="w-full h-4 bg-gray-200 rounded mb-3"></div>
              <div className="w-2/3 h-3 bg-gray-300 rounded mb-3"></div>
              <div className="w-full h-3 bg-gray-300 rounded mb-4"></div>
              <div className="w-full h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">Registrar entrada</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Globe,
      title: "Web",
      description:
        "Registra las entradas y salidas, obtén informes en tiempo real, edita fichajes y gestiona tus equipos. Todo a través de una plataforma cloud, desde cualquier dispositivo.",

      image: (
        <div className="w-48 h-32 bg-gray-100 rounded-lg p-2 shadow-lg mx-auto mb-6">
          <div className="w-full h-full bg-white rounded flex flex-col">
            <div className="h-6 bg-purple-600 rounded-t flex items-center px-2">
              <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
              <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex-1 p-2">
              <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-4 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            3 maneras muy simples
            <br />
            <span className="text-blue-600">de registrar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <div key={index} className="text-center">
              {method.image}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
