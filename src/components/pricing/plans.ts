export interface PlanOption {
  name: string;
  label: string;
  price: string;
  baseDescription: string;
  slug: string;
  /** Asunto prerellenado en el modal de contacto */
  contactSubject: string;
  /** Mensaje prerellenado en el modal de contacto */
  contactMessage: string;
}

export interface Plan extends PlanOption {
  extraEmployee: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Plan Esencial",
    label: "PLAN ESENCIAL",
    price: "24.99€",
    extraEmployee: "+ 2.30€ /mes por cada empleado adicional",
    baseDescription: "/mes hasta 10 empleados",
    features: [
      "Gestión de empleados",
      "Turnos",
      "Gestión de ausencias",
      "Chat",
      "Acceso con Face ID",
      "Notificaciones",
      "Calendario",
      "Fichajes",
    ],
    slug: "esencial",
    contactSubject: "Información sobre el Plan Esencial",
    contactMessage:
      "Hola, me interesa el Plan Esencial de TikNEO (24.99€ /mes hasta 10 empleados) y me gustaría recibir más información para activarlo.",
  },
  {
    name: "Plan Avanzado",
    label: "PLAN AVANZADO",
    price: "38.99€",
    extraEmployee: "+ 3.50€ /mes por cada empleado adicional",
    baseDescription: "/mes hasta 10 empleados",
    features: [
      "Plan esencial +",
      "Historial de fichajes",
      "Proyectos",
      "Chrono (control horario)",
      "Check-List",
      "Clientes",
      "Presupuestos",
    ],
    slug: "avanzado",
    contactSubject: "Información sobre el Plan Avanzado",
    contactMessage:
      "Hola, me interesa el Plan Avanzado de TikNEO (38.99€ /mes hasta 10 empleados) y me gustaría recibir más información para activarlo.",
  },
];

export const mobilityOption: PlanOption = {
  name: "Complemento Movilidad",
  label: "MOVILIDAD",
  price: "A consultar",
  baseDescription: "según vehículos",
  slug: "movilidad",
  contactSubject: "Consulta de precio del complemento Movilidad",
  contactMessage:
    "Hola, me gustaría conocer el precio del complemento Movilidad de TikNEO según el número de vehículos que gestionamos.",
};
