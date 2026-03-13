"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, Users } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Trusted by 5000+ Families" },
  { icon: Star, text: "4.9/5 Average Rating" },
  { icon: Clock, text: "Same-Day Emergencies" },
  { icon: Users, text: "Expert Dental Team" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 overflow-hidden">
      <div className="flex justify-around items-center gap-8 px-4 min-w-max mx-auto">
        {[...trustItems, ...trustItems].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 text-text/80"
          >
            <item.icon className="text-primary w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wide whitespace-nowrap">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}