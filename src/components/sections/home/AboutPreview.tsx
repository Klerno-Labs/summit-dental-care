"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={images["about"].src} alt={images["about"].alt} width={800} height={600} className="object-cover w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                <p className="text-xl font-heading font-bold">Serving Houston since 2015</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-6">Why Choose Summit Dental?</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              We believe that visiting the dentist should be a positive experience. Our state-of-the-art facility is equipped with the latest technology, and our team is dedicated to personalized care.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Advanced Digital X-Rays",
                "Comfortable, Sedation Options",
                "Transparent Pricing & Insurance Support"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-medium text-text">{feature}</span>
                </li>
              ))}
            </ul>

            <Button href="/about" variant="secondary" size="lg">
              Meet Our Team
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}