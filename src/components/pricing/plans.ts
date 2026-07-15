export interface Plan {
  name: string;
  label: string;
  price: string;
  extraEmployee: string;
  baseDescription: string;
  features: string[];
  highlighted: boolean;
  slug: string;
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
    highlighted: false,
    slug: "esencial",
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
    highlighted: true,
    slug: "avanzado",
  },
];
