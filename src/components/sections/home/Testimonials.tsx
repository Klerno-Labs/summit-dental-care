"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../shared/SectionHeader";
import { Star, Quote } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Maria L.",
    role: "Patient",
    text: "I used to be terrified of the dentist, but Dr. Bennett made me feel so comfortable. The sedation options are a game changer!",
    rating: 5,
    image: "gallery-1",
  },
  {
    name: "James T.",
    role: "Patient",
    text: "Best dental experience in Houston. The staff is friendly, the office is clean, and my teeth have never looked better.",
    rating: 5,
    image: "gallery-2",
  },
  {
    name: "Sarah J.",
    role: "Patient",
    text: "They got me in same-day for a toothache. The pain relief was immediate and the treatment plan was affordable.",
    rating: 5,
    image: "gallery-3",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="What Our Patients Say"
          description="Don't just take our word for it. Here is what our community has to say about Summit Dental Care."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-large shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              
              <p className="text-text-muted italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={images[testimonial.image as keyof typeof images].src}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface"
                />
                <div>
                  <p className="font-bold text-text">{testimonial.name}</p>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}