import AppMockup from "@/components/initial/AppMockup";
import Hero from "@/components/initial/Hero";
import HeroFeatureCards from "@/components/initial/HeroFeatureCards";
import BusinessTools from "@/components/initial/BusinessTools";
import ClientsFeature from "@/components/initial/ClientsFeature";
import WhatIs from "@/components/initial/WhatIs";
import ReinventSection from "@/components/initial/ReinventSection";

export default function Initial() {
    return (
        <>
            <Hero />
            <AppMockup />
            <HeroFeatureCards />
            <WhatIs />
            <BusinessTools />
            <ClientsFeature />
            <ReinventSection />
        </>
    );
}