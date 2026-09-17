/**
 * Datos no traducibles de los planes: el identificador y el precio.
 * Los textos (nombre, etiqueta, características y mensajes de contacto) viven
 * en `messages/{es,en,fr}.json` bajo `pricing.plans.<slug>`.
 */
export type PlanSlug = "esencial" | "avanzado" | "movilidad";

export interface Plan {
  slug: PlanSlug;
  price: string;
}

export const plans: Plan[] = [
  { slug: "esencial", price: "24.99€" },
  { slug: "avanzado", price: "38.99€" },
];

export const mobilityOption: PlanSlug = "movilidad";
