import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condiciones generales de contratación | TikNEO",
  description:
    "Condiciones generales de contratación del servicio TikNEO.",
};

export default function CondicionesPage() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          Condiciones generales de contratación
        </h1>

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              1. Identificación del titular
            </h2>
            <p>
              TikNEO (en adelante, &ldquo;el Servicio&rdquo;) es una plataforma
              de control horario y gestión de personal operada por Tikneo, con
              domicilio en Plaza Ferrerias 19, Oficina 1, Donostia, España, CP
              20011. Contacto: info@tikneo.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">2. Objeto</h2>
            <p>
              Las presentes condiciones regulan la contratación y el uso del
              Servicio por parte de las empresas cliente. La contratación de
              cualquiera de los planes implica la aceptación íntegra de estas
              condiciones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              3. Planes, precios y facturación
            </h2>
            <p>
              Los precios vigentes de cada plan son los publicados en la página
              de planes y precios. Salvo indicación expresa, los precios no
              incluyen los impuestos aplicables. La facturación es mensual y el
              importe depende del plan contratado y del número de empleados
              activos.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              4. Periodo de prueba
            </h2>
            <p>
              TikNEO ofrece un periodo de prueba gratuito sin necesidad de
              introducir tarjeta. Finalizado el periodo de prueba, el acceso a
              las funcionalidades quedará condicionado a la contratación de un
              plan.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              5. Cancelación
            </h2>
            <p>
              El cliente puede cancelar su suscripción en cualquier momento
              desde la configuración de su cuenta. La cancelación impide la
              renovación siguiente, manteniéndose el acceso hasta el final del
              periodo ya facturado.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              6. Obligaciones del cliente
            </h2>
            <p>
              El cliente se compromete a hacer un uso lícito del Servicio, a
              custodiar sus credenciales de acceso y a garantizar que dispone de
              base legal para el tratamiento de los datos de sus empleados
              dentro de la plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              7. Protección de datos
            </h2>
            <p>
              El tratamiento de datos personales se rige por nuestra{" "}
              <a
                href="/legal/privacidad"
                className="text-primary font-medium hover:underline"
              >
                Política de privacidad
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              8. Legislación aplicable
            </h2>
            <p>
              Estas condiciones se rigen por la legislación española. Para
              cualquier controversia, las partes se someten a los juzgados y
              tribunales de Donostia, salvo que la normativa aplicable disponga
              otro fuero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
