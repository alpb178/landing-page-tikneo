import type { LegalDoc } from "./legal";

/**
 * Privacy policy for TikNEO, ported verbatim from the previous
 * /legal/privacidad page so the published wording stays untouched.
 */
export const PRIVACY_DOC: LegalDoc = {
  title: "Política de privacidad",
  sections: [
    {
      title: "1. Responsable del tratamiento",
      blocks: [
        {
          kind: "paragraph",
          text: "Tikneo, con domicilio en Plaza Ferrerias 19, Oficina 1, Donostia, España, CP 20011, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web y de la plataforma TikNEO. Contacto: info@tikneo.com.",
        },
      ],
    },
    {
      title: "2. Datos que tratamos",
      blocks: [
        {
          kind: "paragraph",
          text: "Tratamos los datos que nos facilitas a través de los formularios del sitio (nombre, apellidos, email, teléfono, empresa, cargo y sector), así como los datos necesarios para la prestación del servicio a las empresas cliente (datos de empleados, fichajes, turnos y ausencias).",
        },
      ],
    },
    {
      title: "3. Finalidad y base legal",
      blocks: [
        {
          kind: "paragraph",
          text: "Utilizamos tus datos para atender solicitudes de información o demo (consentimiento), prestar el servicio contratado (ejecución de contrato) y cumplir las obligaciones legales aplicables, como el registro de jornada previsto en el Real Decreto-ley 8/2019.",
        },
      ],
    },
    {
      title: "4. Conservación",
      blocks: [
        {
          kind: "paragraph",
          text: "Conservamos los datos mientras exista una relación contractual o hasta que solicites su supresión, y posteriormente durante los plazos exigidos por la normativa aplicable.",
        },
      ],
    },
    {
      title: "5. Destinatarios",
      blocks: [
        {
          kind: "paragraph",
          text: "No cedemos datos a terceros salvo obligación legal o proveedores que actúan como encargados del tratamiento (alojamiento, comunicaciones), con los que existen los contratos exigidos por el RGPD.",
        },
      ],
    },
    {
      title: "6. Seguridad",
      blocks: [
        {
          kind: "paragraph",
          text: "Aplicamos medidas técnicas y organizativas apropiadas, incluida la encriptación de la información, el control de accesos por roles y copias de seguridad automáticas.",
        },
      ],
    },
    {
      title: "7. Tus derechos",
      blocks: [
        {
          kind: "paragraph",
          text: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@tikneo.com. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        },
      ],
    },
  ],
};
