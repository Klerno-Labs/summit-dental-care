"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Users } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Insurance Accepted" },
  { icon: Award, text: "Award Winning Team" },
  { icon: Clock, text: "Same-Day Appointments" },
  { icon: Users, text: "500+ Happy Patients" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                <item.icon size={20} />
              </div>
              <span className="font-semibold text-text text-sm md:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}