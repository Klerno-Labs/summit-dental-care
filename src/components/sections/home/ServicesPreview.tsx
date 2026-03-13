"use client";

import { motion } from "framer-motion";
import { Link } from "next/link";
import { ArrowRight, Tooth, Sparkles, HeartPulse } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "../shared/SectionHeader";

const services = [
  {
    icon: Tooth,
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and preventative care to keep your smile healthy and bright for years to come.",
    link: "/services#general",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, and bonding designed to look natural and beautiful.",
    link: "/services#cosmetic",
  },
  {
    icon: HeartPulse,
    title: "Restorative Care",
    description: "Advanced solutions including implants, crowns, and bridges to restore function and aesthetics to damaged teeth.",
    link: "/services#restorative",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="Comprehensive Dental Services"
          subtitle="We offer a full range of dental treatments tailored to meet the unique needs of every patient in your family."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface p-8 rounded-large border border-transparent hover:border-secondary/30 hover:shadow-hover transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-text">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>
              <Link href={service.link} className="inline-flex items-center font-bold text-primary group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}