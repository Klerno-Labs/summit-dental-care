import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/shared/CTASection";
import { CheckCircle2, Zap, HeartPulse, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive dental services including general dentistry, cosmetic enhancements, and restorative care at Summit Dental Care.",
};

const services = [
  {
    id: "general",
    title: "General Dentistry",
    icon: HeartPulse,
    description: "The foundation of a healthy smile. Our general dentistry services focus on prevention and early detection.",
    treatments: [
      "Comprehensive Oral Exams",
      "Professional Cleanings (Prophylaxis)",
      "Digital X-Rays",
      "Fluoride Treatments",
      "Dental Sealants",
      "Oral Cancer Screenings"
    ],
    price: "Starting at $150"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    icon: Zap,
    description: "Enhance the appearance of your smile with our advanced aesthetic treatments designed to boost confidence.",
    treatments: [
      "Professional Teeth Whitening",
      "Porcelain Veneers",
      "Dental Bonding",
      "Invisalign® Clear Aligners",
      "Gum Contouring",
      "Smile Makeovers"
    ],
    price: "Consultation $75"
  },
  {
    id: "restorative",
    title: "Restorative Care",
    icon: Crown,
    description: "Repair damaged teeth and restore function with our durable, natural-looking restorative solutions.",
    treatments: [
      "Tooth-Colored Fillings",
      "Porcelain Crowns & Bridges",
      "Dental Implants",
      "Root Canal Therapy",
      "Dentures (Partial & Full)",
      "Implant-Supported Dentures"
    ],
    price: "Varies by procedure"
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-surface py-24 border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-6">Comprehensive Dental Services</h1>
            <p className="text-lg text-muted leading-relaxed">
              From routine cleanings to complex restorations, Summit Dental Care offers a full spectrum of services to meet your oral health needs under one roof.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-text">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted mb-8 leading-relaxed">{service.description}</p>
                      
                      <div className="bg-surface p-8 rounded-large border border-border mb-8">
                        <h4 className="font-bold text-text mb-4 uppercase tracking-wide text-sm">Treatments Include:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.treatments.map((t, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted">
                              <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <span className="text-sm text-muted block mb-1">Starting From</span>
                          <span className="text-2xl font-bold text-primary">{service.price}</span>
                        </div>
                        <Button href="/contact" size="lg">Book Consultation</Button>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                      <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 relative">
                        {/* Placeholder images for services */}
                         <img 
                           src={`https://source.unsplash.com/random/800x600?dentist,${service.id}&sig=${index}`} 
                           alt={service.title} 
                           className="object-cover w-full h-full"
                           // Using solid colors as fallback since source.unsplash is deprecated/unreliable
                           style={{ backgroundColor: '#f0f0f0' }}
                           onError={(e) => { e.currentTarget.src = `https://placehold.co/800x600/0056b3/FFFFFF?text=${encodeURIComponent(service.title)}`; }}
                         />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}