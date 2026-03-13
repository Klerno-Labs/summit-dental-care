"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { images } from "@/config/images";
import { SectionHeader } from "../shared/SectionHeader";

const testimonials = [
  {
    name: "Maria L.",
    role: "Patient",
    rating: 5,
    text: "I have never felt so comfortable at a dentist before. The entire team at Summit made me feel at ease, and my cleaning was painless. Highly recommended!",
  },
  {
    name: "James T.",
    role: "Patient",
    rating: 5,
    text: "Dr. Bennett did an amazing job on my crown. It looks completely natural, and the process was explained clearly every step of the way.",
  },
  {
    name: "Sarah J.",
    role: "Patient",
    rating: 5,
    text: "The office is beautiful and modern, but what really stands out is the customer service. They truly care about their patients.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src={images["testimonial-bg"].src} alt="" fill className="object-cover" />
      </div>
      <Container className="relative z-10">
        <SectionHeader
          title="What Our Patients Say"
          subtitle="Don't just take our word for it. Here is what our community has to say about their experience with Summit Dental Care."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-large shadow-card"
            >
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted italic mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                   <Image src={images["team-1"].src} alt={item.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-text">{item.name}</h4>
                  <span className="text-sm text-primary font-semibold">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}