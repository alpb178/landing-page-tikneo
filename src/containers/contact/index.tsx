import { MapPin, Mail, Clock } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "ESPAÑA",
    content: (
      <>
        Plaza Ferrerias 19. Oficina 1,
        <br />
        Donostia
        <br />
        España CP 20011
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@tikneo.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: (
      <>
        Lunes a viernes:
        <br />
        09:00 - 14:00
        <br />
        16:00 - 19:00
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen  py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          Hablemos
        </h1>
        <p className="text-gray-600 text-center text-lg mb-12">
          ¿Quieres una demo o resolver dudas? Te respondemos rápido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 text-center md:text-left hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 text-purple-600">
                <card.icon className="h-7 w-7" />
              </div>
              <h2 className="text-lg font-bold text-purple-900 mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
