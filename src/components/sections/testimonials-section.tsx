"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    text: "I've always been afraid of the dentist, but the team at Summit changed that. They were so gentle and explained everything. Best cleaning I've ever had!",
    role: "Patient"
  },
  {
    name: "James T.",
    text: "Dr. Bennett did an amazing job on my veneers. They look completely natural. The office is beautiful and modern, too. Highly recommended!",
    role: "Patient"
  },
  {
    name: "Elena R.",
    text: "Booking was easy, they took my insurance, and I was in and out for my filling in under an hour. Great experience all around.",
    role: "Patient"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-5">
         <Image 
           src={images["testimonial-bg"].src}
           alt=""
           fill
           className="object-cover"
           sizes="100vw"
         />
       </div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-1 text-accent mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-lg text-muted">Rated 4.9/5 on Google</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-card border border-gray-100"
            >
              <div className="flex items-center gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-text">{testimonial.name}</p>
                  <p className="text-xs text-muted uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}