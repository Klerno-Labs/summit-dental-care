"use client";

import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { DoctorCard } from "@/components/sections/about/DoctorCard";
import { CTASection } from "@/components/sections/shared/CTASection";
import { Users, Award, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Note: Metadata export is removed from "use client" components.
// In a real app, this would be split into a parent page.tsx (Server) and AboutContent.tsx (Client).
// For this single-file build, we prioritize functionality.

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-24 border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-6">Our Mission</h1>
            <p className="text-lg text-muted leading-relaxed">
              At Summit Dental Care, we are dedicated to improving the oral health of our community through compassionate care, state-of-the-art technology, and a commitment to excellence.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold mb-6">A Tradition of Caring</h2>
              <p className="text-muted mb-4 leading-relaxed">
                Founded in 2015, Summit Dental Care was built on a simple premise: treat every patient like family. From the moment you walk through our doors on Westheimer Road, you will notice the difference.
              </p>
              <p className="text-muted mb-6 leading-relaxed">
                Our team continually invests in the latest dental technologies, from digital impressions to 3D imaging, ensuring that your diagnosis is accurate and your treatment is efficient. We believe that education is key, and we take the time to explain every procedure thoroughly so you can make informed decisions about your dental health.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-surface p-4 rounded-large text-center">
                  <Award className="text-primary w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-text">10+</div>
                  <div className="text-xs text-muted uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="bg-surface p-4 rounded-large text-center">
                  <Users className="text-primary w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-text">5k+</div>
                  <div className="text-xs text-muted uppercase tracking-wide">Happy Patients</div>
                </div>
                <div className="bg-surface p-4 rounded-large text-center">
                  <Clock className="text-primary w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-text">15+</div>
                  <div className="text-xs text-muted uppercase tracking-wide">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
               {/* Using about image again as placeholder for clinic interior */}
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop" 
                alt="Clinic Interior" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <Container>
          <SectionHeader title="Why Choose Us" align="center" />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Gentle Care", desc: "We prioritize your comfort, offering sedation options and a calm environment." },
              { title: "Modern Tech", desc: "Digital X-rays, intraoral cameras, and laser dentistry for precise results." },
              { title: "Transparent Pricing", desc: "No hidden fees. We work with most major insurance plans and offer financing." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-large shadow-card">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader 
            title="Meet Our Doctors" 
            subtitle="Our skilled team of dentists brings decades of combined experience to Summit Dental Care." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DoctorCard 
              name="Dr. Sarah Bennett" 
              role="General Dentist" 
              bio="Dr. Bennett specializes in cosmetic procedures and pediatric care, making smiles of all ages brighter."
            />
            <DoctorCard 
              name="Dr. Michael Chen" 
              role="Orthodontist" 
              bio="Expert in Invisalign and traditional braces, Dr. Chen creates perfect alignment plans."
              imageSlot="hero-alt" // Reusing hero alt for demo
            />
            <DoctorCard 
              name="Dr. Emily Rodriguez" 
              role="Endodontist" 
              bio="Specializing in root canals and saving natural teeth with the latest microscopic technology."
              imageSlot="gallery-1" // Reusing gallery for demo
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}