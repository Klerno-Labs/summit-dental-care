import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";
import { EmergencyBanner } from "@/components/sections/home/EmergencyBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Summit Dental Care provides modern dentistry in Houston, TX. Book your appointment today.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <CTASection />
      <EmergencyBanner />
    </>
  );
}