"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "State-of-the-art Technology",
  "Gentle, Caring Dentists",
  "Flexible Financing Options",
  "Relaxing, Comfortable Environment",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-large overflow-hidden shadow-xl border-4 border-white">
              <img
                src={images["about"].src}
                alt={images["about"].alt}
                width={images["about"].width}
                height={images["about"].height}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 bg-white p-6 rounded-large shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Check size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-text text-lg">15+ Years</p>
                  <p className="text-sm text-text-muted">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Houston&lsquo;s Premier Dental Practice
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              At Summit Dental Care, we believe a visit to the dentist should be
              a positive experience. Founded in 2008, our mission is to provide
              top-tier dental care in a setting that feels more like a spa than
              a clinic.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="font-semibold text-text">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button variant="secondary" size="lg">
                Meet Our Team <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}