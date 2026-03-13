"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { Tooth, Smile, AlignLeft } from "lucide-react";

const services = [
  {
    icon: Tooth,
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and fillings designed to keep your oral health in peak condition.",
    linkText: "Learn More",
    href: "/services"
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and bonding to give you the confident, radiant smile you deserve.",
    linkText: "View Options",
    href: "/services"
  },
  {
    icon: AlignLeft,
    title: "Orthodontics",
    description: "Modern clear aligners and traditional braces to correct alignment issues for both teens and adults.",
    linkText: "Start Journey",
    href: "/services"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">Our Services</h2>
          <p className="text-lg text-muted leading-relaxed">
            We offer a full range of dental services using state-of-the-art technology to ensure your comfort and best results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}