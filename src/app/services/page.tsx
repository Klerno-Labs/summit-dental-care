import { Metadata } from "next";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { CTASection } from "@/components/sections/shared/CTASection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive dental services including preventive, cosmetic, and restorative dentistry.",
};

const services = [
  {
    id: "preventive",
    title: "Preventive Dentistry",
    description:
      "The best way to maintain a healthy smile is through prevention. We offer comprehensive exams, professional cleanings, fluoride treatments, and dental sealants to protect your teeth from decay and gum disease.",
    price: "Checkups starting at $99",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our cosmetic services. We specialize in professional teeth whitening, porcelain veneers, and bonding that looks completely natural. Get the confidence boost you deserve.",
    price: "Whitening starting at $299",
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    description:
      "Whether you need a filling, a crown, or a full dental implant, we use the highest quality materials to restore function and aesthetics. Our restorative procedures are designed to be durable and lifelike.",
    price: "Consultations are free",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Minimal Hero */}
      <section className="bg-surface py-24 pt-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Comprehensive Dental Services
          </h1>
          <p className="text-xl text-text-muted max-w-2xl">
            Modern solutions for all your dental needs, all under one roof in
            Houston.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-surface p-8 rounded-large relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-heading font-bold text-text mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-6 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  <p className="font-bold text-primary text-lg mb-6 relative z-10">
                    {service.price}
                  </p>
                  <Link href="/contact">
                    <Button variant="primary">Book Consultation</Button>
                  </Link>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Placeholder for service specific images if needed, reusing generic logic for now */}
                <div className="bg-gray-200 rounded-large h-80 w-full flex items-center justify-center text-text-muted">
                   <p className="font-semibold">Service Visual Placeholder</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}