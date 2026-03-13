"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { InsuranceChecker } from "@/components/forms/InsuranceChecker";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface pt-20">
      <Container className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
            <BadgeCheck size={16} />
            <span>Accepting New Patients</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6">
            Experienced Care You Can Trust
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Summit Dental Care provides modern, family-friendly dentistry in a relaxed environment. From routine checkups to cosmetic makeovers, we’re here for your smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
              Book Appointment
            </Button>
            <Button href="/services" size="lg" variant="secondary" className="w-full sm:w-auto">
              View Services
            </Button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-2/5 relative h-[500px] lg:h-[700px] flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={images["hero"].src}
              alt={images["hero"].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Widget - Desktop Only */}
          <div className="hidden lg:block absolute bottom-10 -right-4 z-20 animate-float">
            <InsuranceChecker />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}