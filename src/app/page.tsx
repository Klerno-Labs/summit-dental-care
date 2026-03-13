import { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactForm from "@/components/contact-form";
import { images } from "@/config/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Summit Dental Care provides modern dentistry in Houston. Accepting new patients.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Trust Bar */}
      <section className="bg-primary py-8 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-blue-200">We Accept Most Major Insurance Plans</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text placeholders for logos to avoid external dependency issues in this build */}
            <span className="font-bold text-xl">Delta Dental</span>
            <span className="font-bold text-xl">Cigna</span>
            <span className="font-bold text-xl">Aetna</span>
            <span className="font-bold text-xl">Humana</span>
            <span className="font-bold text-xl">MetLife</span>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      {/* About Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
               <Image
                 src={images.about.src}
                 alt={images.about.alt}
                 width={600}
                 height={450}
                 className="rounded-2xl shadow-modal w-full object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
            
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                A Different Kind of <span className="text-primary">Dental Experience.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                At Summit Dental Care, we believe a visit to the dentist should be stress-free. 
                Our Houston clinic combines cutting-edge technology with a warm, welcoming atmosphere 
                to ensure you feel at home from the moment you walk in.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Comfortable, spa-like environment",
                  "Advanced digital X-rays (less radiation)",
                  "Transparent pricing, no hidden fees",
                  "Emergency appointments available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/about">Read Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
           <Image 
             src={images.cta.src}
             alt=""
             fill
             className="object-cover"
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Ready to Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, happier smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-8">
              <Link href="tel:7135550198">Call (713) 555-0198</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}