import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | TikNEO",
  description: "Política de privacidad y protección de datos de TikNEO.",
};

export default function PrivacidadPage() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          Política de privacidad
        </h1>

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              1. Responsable del tratamiento
            </h2>
            <p>
              Tikneo, con domicilio en Plaza Ferrerias 19, Oficina 1, Donostia,
              España, CP 20011, es el responsable del tratamiento de los datos
              personales recogidos a través de este sitio web y de la
              plataforma TikNEO. Contacto: info@tikneo.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              2. Datos que tratamos
            </h2>
            <p>
              Tratamos los datos que nos facilitas a través de los formularios
              del sitio (nombre, apellidos, email, teléfono, empresa, cargo y
              sector), así como los datos necesarios para la prestación del
              servicio a las empresas cliente (datos de empleados, fichajes,
              turnos y ausencias).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              3. Finalidad y base legal
            </h2>
            <p>
              Utilizamos tus datos para atender solicitudes de información o
              demo (consentimiento), prestar el servicio contratado (ejecución
              de contrato) y cumplir las obligaciones legales aplicables, como
              el registro de jornada previsto en el Real Decreto-ley 8/2019.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              4. Conservación
            </h2>
            <p>
              Conservamos los datos mientras exista una relación contractual o
              hasta que solicites su supresión, y posteriormente durante los
              plazos exigidos por la normativa aplicable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              5. Destinatarios
            </h2>
            <p>
              No cedemos datos a terceros salvo obligación legal o proveedores
              que actúan como encargados del tratamiento (alojamiento,
              comunicaciones), con los que existen los contratos exigidos por
              el RGPD.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              6. Seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas, incluida
              la encriptación de la información, el control de accesos por
              roles y copias de seguridad automáticas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              7. Tus derechos
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              oposición, limitación y portabilidad escribiendo a
              info@tikneo.com. También tienes derecho a presentar una
              reclamación ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
