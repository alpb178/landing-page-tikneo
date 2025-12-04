import {
  CheckCircle,
  Play,
  ArrowRight,
  Search,
  Clock,
  User,
  Plus,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="bg-white pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Optimiza la gestión de empleados
              <br />
              <span className="text-blue-600">
                ahorrando tiempo, esfuerzo y dinero
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Y para que veas como funciona Humancore, te ofrecemos{" "}
              <span className="text-purple-600 font-semibold">
                14 días de prueba totalmente gratuita
              </span>{" "}
              sin compromiso
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
