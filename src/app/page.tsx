import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppMockup from "@/components/AppMockup";
import HeroFeatureCards from "@/components/HeroFeatureCards";
import Features from "@/components/Features";
import Support from "@/components/Support";
import ClockInMethods from "@/components/ClockInMethods";
import Integrations from "@/components/Integrations";
import Compliance from "@/components/Compliance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AppMockup />
      <HeroFeatureCards />
   
        <Features />
   
      <Support />
      <ClockInMethods />
      <Integrations />
      <Compliance />
      <Footer />
    </>
  );
}
