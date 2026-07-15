import Features from "./BussinessTools/Features";

export default function WhatIs() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-6">
          ¿Qué es TIKNEO?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Tikneo centraliza el control de horario y la gestión del personal en
          una plataforma eficiente, escalable y fácil de usar, para ayudar a las
          empresas que quieren automatizar sus procesos de RRHH y tomar las
          mejores decisiones para su negocio.
        </p>

        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
            La mejor herramienta para el control de tu negocio
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-12 md:mb-16 italic">
            &ldquo;El orden es el primer paso hacia la productividad&rdquo;
          </p>
        </div>

        <Features />
      </div>
    </section>
  );
}
