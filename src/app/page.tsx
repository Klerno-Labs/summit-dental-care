import { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";
import { EmergencyBanner } from "@/components/sections/home/EmergencyBanner";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Summit Dental Care provides modern, family-friendly dentistry in Houston, TX. Accepting new patients for general, cosmetic, and restorative dentistry.",
  openGraph: {
    images: [images["hero"].src],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <CTASection variant="image" />
      <EmergencyBanner />
    </>
  );
}