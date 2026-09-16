import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TERMS_DOC } from "@/data/terms";

export const metadata: Metadata = {
  title: "Condiciones generales de contratación | TikNEO",
  description: "Condiciones generales de contratación del servicio TikNEO.",
};

export default function TermsPage() {
  return <LegalPage doc={TERMS_DOC} />;
}
