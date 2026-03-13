"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../shared/SectionHeader";
import { images } from "@/config/images";
import { Tooth, Sparkles, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: HeartPulse,
    title: "Preventive Care",
    excerpt: "Regular checkups, cleanings, and fluoride treatments to keep your teeth healthy.",
    image: "service-1",
    link: "/services#preventive",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    excerpt: "Teeth whitening, veneers, and bonding to give you the smile you've always wanted.",
    image: "service-2",
    link: "/services#cosmetic",
  },
  {
    icon: Tooth,
    title: "Restorative",
    excerpt: "Implants, crowns, and fillings using the latest materials for a natural look.",
    image: "service-3",
    link: "/services#restorative",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Comprehensive Dental Services"
          description="From routine cleanings to complex restorations, we offer a full range of services to meet your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-large border border-border shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                {service.excerpt}
              </p>
              
              <Link
                href={service.link}
                className="inline-flex items-center font-bold text-primary group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}