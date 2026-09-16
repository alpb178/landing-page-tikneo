import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY_DOC } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Política de privacidad | TikNEO",
  description: "Política de privacidad y protección de datos de TikNEO.",
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_DOC} />;
}
