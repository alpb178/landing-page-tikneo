import type { LegalDoc } from "./legal";

/**
 * General terms of service for TikNEO, ported verbatim from the previous
 * /legal/condiciones page so the published wording stays untouched. The only
 * change is the privacy link in section 7, now pointing at /privacy.
 */
export const TERMS_DOC: LegalDoc = {
  title: "Condiciones generales de contratación",
  sections: [
    {
      title: "1. Identificación del titular",
      blocks: [
        {
          kind: "paragraph",
          text: "TikNEO (en adelante, “el Servicio”) es una plataforma de control horario y gestión de personal operada por Tikneo, con domicilio en Plaza Ferrerias 19, Oficina 1, Donostia, España, CP 20011. Contacto: info@tikneo.com.",
        },
      ],
    },
    {
      title: "2. Objeto",
      blocks: [
        {
          kind: "paragraph",
          text: "Las presentes condiciones regulan la contratación y el uso del Servicio por parte de las empresas cliente. La contratación de cualquiera de los planes implica la aceptación íntegra de estas condiciones.",
        },
      ],
    },
    {
      title: "3. Planes, precios y facturación",
      blocks: [
        {
          kind: "paragraph",
          text: "Los precios vigentes de cada plan son los publicados en la página de planes y precios. Salvo indicación expresa, los precios no incluyen los impuestos aplicables. La facturación es mensual y el importe depende del plan contratado y del número de empleados activos.",
        },
      ],
    },
    {
      title: "4. Periodo de prueba",
      blocks: [
        {
          kind: "paragraph",
          text: "TikNEO ofrece un periodo de prueba gratuito sin necesidad de introducir tarjeta. Finalizado el periodo de prueba, el acceso a las funcionalidades quedará condicionado a la contratación de un plan.",
        },
      ],
    },
    {
      title: "5. Cancelación",
      blocks: [
        {
          kind: "paragraph",
          text: "El cliente puede cancelar su suscripción en cualquier momento desde la configuración de su cuenta. La cancelación impide la renovación siguiente, manteniéndose el acceso hasta el final del periodo ya facturado.",
        },
      ],
    },
    {
      title: "6. Obligaciones del cliente",
      blocks: [
        {
          kind: "paragraph",
          text: "El cliente se compromete a hacer un uso lícito del Servicio, a custodiar sus credenciales de acceso y a garantizar que dispone de base legal para el tratamiento de los datos de sus empleados dentro de la plataforma.",
        },
      ],
    },
    {
      title: "7. Protección de datos",
      blocks: [
        {
          kind: "paragraph",
          text: "El tratamiento de datos personales se rige por nuestra",
          link: {
            label: "Política de privacidad",
            href: "/privacy",
            suffix: ".",
          },
        },
      ],
    },
    {
      title: "8. Legislación aplicable",
      blocks: [
        {
          kind: "paragraph",
          text: "Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Donostia, salvo que la normativa aplicable disponga otro fuero.",
        },
      ],
    },
  ],
};
