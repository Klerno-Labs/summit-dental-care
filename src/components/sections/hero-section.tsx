"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { images } from "@/config/images";
import { ShieldCheck, Sparkles, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.1]">
              Experienced Care <br/>
              <span className="text-primary">You Can Trust.</span>
            </h1>
            
            <p className="text-lg text-muted max-w-lg leading-relaxed">
              Modern dentistry with a gentle, patient-first approach. From routine checkups to advanced cosmetic procedures, we create healthy smiles for the whole family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Book Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="p-2 bg-blue-50 rounded-full text-primary">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-semibold">Board Certified</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="p-2 bg-blue-50 rounded-full text-primary">
                  <Clock size={20} />
                </div>
                <span className="text-sm font-semibold">Same Day Care</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="p-2 bg-blue-50 rounded-full text-primary">
                  <Sparkles size={20} />
                </div>
                <span className="text-sm font-semibold">Latest Tech</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-modal max-w-xs z-10 border border-gray-100"
            >
              <h4 className="font-heading font-bold text-text mb-2">Check Your Insurance</h4>
              <p className="text-sm text-muted mb-4">Enter your zip code to see if we accept your plan.</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-primary"
                />
                <Button size="sm" className="bg-accent hover:bg-[#e6a502] text-white">Check</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}