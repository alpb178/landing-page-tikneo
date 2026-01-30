import AppMockup from "@/components/initial/AppMockup";
import Hero from "@/components/initial/Hero";
import BusinessTools from "@/components/initial/BusinessTools";
import ClientsFeature from "@/components/initial/ClientsFeature";
import WhatIs from "@/components/initial/WhatIs";
import ReinventSection from "@/components/initial/ReinventSection";

export default function Initial() {
    return (
        <>
            <Hero />
            <AppMockup />
            <WhatIs />
            <BusinessTools />
            <ClientsFeature />
            <ReinventSection />
        </>
    );
}