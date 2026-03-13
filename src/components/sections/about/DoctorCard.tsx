"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "next/link";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  role: string;
  bio: string;
  imageSlot?: keyof typeof images;
  className?: string;
}

export function DoctorCard({ name, role, bio, imageSlot = "team-1", className }: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("bg-white p-6 rounded-large shadow-card border border-border text-center h-full", className)}
    >
      <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-surface group-hover:border-primary transition-colors duration-300">
        <Image 
          src={images[imageSlot].src} 
          alt={name} 
          fill 
          className="object-cover" 
        />
      </div>
      <h3 className="text-2xl font-heading font-bold text-text mb-2">{name}</h3>
      <p className="text-secondary font-semibold uppercase tracking-wider text-xs mb-4">{role}</p>
      <p className="text-muted text-sm leading-relaxed mb-6">{bio}</p>
      <Link href="/contact" className="text-primary font-bold text-sm hover:underline">
        Book with {name.split(" ")[0]}
      </Link>
    </motion.div>
  );
}