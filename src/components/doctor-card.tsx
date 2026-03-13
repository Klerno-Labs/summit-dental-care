import Image from "next/image";
import { images } from "@/config/images";

interface DoctorCardProps {
  name: string;
  role: string;
  bio: string;
  imageKey: keyof typeof images;
}

export default function DoctorCard({ name, role, bio, imageKey }: DoctorCardProps) {
  return (
    <div className="text-center group">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />
        <Image
          src={images[imageKey].src}
          alt={images[imageKey].alt}
          fill
          className="object-cover rounded-full border-4 border-white shadow-md relative z-10"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <h3 className="text-2xl font-heading font-bold text-text">{name}</h3>
      <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">{role}</p>
      <p className="text-muted italic text-sm border-t border-gray-200 pt-4 max-w-xs mx-auto">{bio}</p>
    </div>
  );
}