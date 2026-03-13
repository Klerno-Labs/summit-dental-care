"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { InsuranceChecker } from "@/components/forms/InsuranceChecker";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary w-fit font-semibold text-sm mb-2">
            <CheckCircle2 size={18} />
            Accepting New Patients
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text leading-tight">
            Experienced Care You Can Trust
          </h1>
          
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Modern dentistry with a gentle touch. We use advanced technology to
            ensure your comfort and deliver the smile you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book Online
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex items-center gap-4 text-sm text-text-muted">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                   {/* Placeholder avatars using CSS gradients for performance/simplicity in static export */}
                   <div className="w-full h-full bg-gradient-to-tr from-blue-200 to-blue-400" style={{ opacity: 0.5 + (i * 0.2) }}></div>
                </div>
              ))}
            </div>
            <p>
              Rated <span className="font-bold text-text">4.9/5</span> by over
              500+ patients in Houston
            </p>
          </div>
        </motion.div>

        {/* Right: Visual + Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 relative h-[500px] lg:h-auto flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={images["hero"].src}
                alt={images["hero"].alt}
                width={images["hero"].width}
                height={images["hero"].height}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative shapes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
            
            {/* Floating Widget */}
            <div className="absolute -bottom-6 -left-6 lg:left-0 w-full max-w-xs">
              <InsuranceChecker />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}