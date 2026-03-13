import { images, ImageSlot } from "@/config/images";
import { Linkedin } from "lucide-react";

interface DoctorCardProps {
  name: string;
  role: string;
  imageKey: ImageSlot;
  bio: string;
}

export function DoctorCard({ name, role, imageKey, bio }: DoctorCardProps) {
  return (
    <div className="text-center group">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-primary rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
        <img
          src={images[imageKey].src}
          alt={name}
          width={images[imageKey].width}
          height={images[imageKey].height}
          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-md group-hover:border-secondary/30 transition-colors"
        />
      </div>
      <h3 className="text-2xl font-heading font-bold text-text mb-1">
        {name}
      </h3>
      <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
        {role}
      </p>
      <p className="text-muted italic text-sm border-t border-border pt-4 mt-4">
        "{bio}"
      </p>
    </div>
  );
}