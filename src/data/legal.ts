/**
 * Shared content model for TikNEO's legal pages (privacy policy, terms).
 *
 * Both documents render through the same <LegalPage> component, so they share
 * one structure. Inline emphasis is expressed via the optional `term` label;
 * an `email` turns the item into a mailto link and an `href` into a regular
 * link.
 */

export interface LegalLink {
  /** Visible text of the link, rendered right after the paragraph text. */
  label: string;
  href: string;
  /** Text appended after the link, e.g. the closing period. */
  suffix?: string;
}

export interface LegalItem {
  /** Optional leading label rendered in bold (e.g. "Datos de registro:"). */
  term?: string;
  text: string;
  /** When set, `text` is rendered as a mailto link to this address. */
  email?: string;
  /** When set, `text` is rendered as a link to this route. */
  href?: string;
}

export type LegalBlock =
  | { kind: "paragraph"; text: string; link?: LegalLink }
  | { kind: "list"; items: LegalItem[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  /** Page <h1>. */
  title: string;
  /** Optional label under the title, e.g. "Última actualización: …". */
  updated?: string;
  /** Optional lead paragraph shown above the numbered sections. */
  intro?: string;
  sections: LegalSection[];
}
