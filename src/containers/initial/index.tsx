import AppMockup from "@/components/initial/AppMockup";
import Hero from "@/components/initial/Hero";
import BusinessTools from "@/components/initial/BussinessTools";
import ClientsFeature from "@/components/initial/ClientsFeature";
import WhatIs from "@/components/initial/WhatIs";
import ReinventSection from "@/components/initial/ReinventSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Initial() {
  return (
    <>
      <AnimateOnScroll variant="fadeUp">
        <Hero />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <AppMockup />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <WhatIs />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <BusinessTools />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <ClientsFeature />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <ReinventSection />
      </AnimateOnScroll>
    </>
  );
}
