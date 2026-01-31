import Features from "./Features";

export default function BusinessTools() {
  return (
    <section className=" px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col justify-center items-center">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-purple-900 mb-3">
        TikNeo
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-3">
        La mejor herramienta para el control de tu negocio
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-12 md:mb-16 italic">
        &ldquo;El orden es el primer paso hacia la productividad&rdquo;
      </p>

      <Features />
    </section>
  );
}
