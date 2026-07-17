import type { Metadata } from "next";
import Image from "next/image";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import AppMockup from "@/components/initial/AppMockup";
import ClientsFeature from "@/components/initial/ClientsFeature";
import Hero from "@/components/initial/Hero";
import {
  ImproveProcessesBanner,
  ReinventContent,
} from "@/components/initial/ReinventSection";
import WhatIs from "@/components/initial/WhatIs";
import MobilityCard from "@/components/pricing/Mobility";
import PricingCards from "@/components/pricing/PricingCards";
import PricingCTABanner from "@/components/pricing/PricingCTABanner";
import Demo from "@/containers/demo";

export const metadata: Metadata = {
  title: "TikNEO — El control horario que crece con tu empresa",
  description:
    "Gestiona turnos, ausencias y fichajes desde cualquier lugar. Empieza tu prueba gratuita o solicita una demo de TikNEO.",
};

function LandingHeader() {
  return (
    <header className="bg-gradient-to-r from-white to-[#f5f5f5]">
      <div className="flex items-center justify-center h-20 sm:h-[134px] px-4">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="TikNEO"
            width={128}
            height={128}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="flex flex-row text-primary text-3xl">
          <span className="font-semibold">Tik</span>
          <span className="font-bold">Neo</span>
        </div>
      </div>
    </header>
  );
}

export default function LandingPage() {
  return (
    <>
      <LandingHeader />

      <AnimateOnScroll variant="fadeUp">
        <Hero variant="conversion" />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <AppMockup />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <WhatIs />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <ClientsFeature />
      </AnimateOnScroll>

      <div id="planes">
        <AnimateOnScroll variant="fadeUp" delay={100}>
          <PricingCards />
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={100}>
          <MobilityCard />
        </AnimateOnScroll>
      </div>

      <PricingCTABanner demoHref="#demo" />

      <AnimateOnScroll variant="fadeUp" delay={100}>
        <section className="relative overflow-hidden">
          <ReinventContent />
        </section>
      </AnimateOnScroll>

      <div id="demo">
        <AnimateOnScroll variant="fadeUp" delay={100}>
          <Demo />
        </AnimateOnScroll>
      </div>

      <ImproveProcessesBanner demoHref="#demo" pricesHref="#planes" />
    </>
  );
}
