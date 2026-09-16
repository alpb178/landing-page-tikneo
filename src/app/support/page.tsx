import type { Metadata } from "next";
import Support from "@/containers/support";

export const metadata: Metadata = {
  title: "Soporte | TikNEO",
  description:
    "Soporte de TikNEO — escríbenos tus dudas, problemas o sugerencias y te responderemos lo antes posible.",
};

export default function SupportPage() {
  return <Support />;
}
