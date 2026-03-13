import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import DoctorCard from "@/components/doctor-card";
import { ShieldCheck, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team at Summit Dental Care and learn about our mission to provide exceptional dental services.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <Image
          src={images.about.src}
          alt="Clinic Interior"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4">Our Mission</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing exceptional dental care with integrity, compassion, and a commitment to our community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl text-text">Why Summit Dental?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
             <div className="p-6 bg-surface rounded-xl">
                <ShieldCheck className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Safety First</h3>
                <p className="text-muted text-sm">We exceed CDC guidelines for sterilization and infection control to keep you safe.</p>
             </div>
             <div className="p-6 bg-surface rounded-xl">
                <Heart className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Patient-Centric</h3>
                <p className="text-muted text-sm">Your comfort is our priority. We offer amenities and sedation options for anxiety-free visits.</p>
             </div>
             <div className="p-6 bg-surface rounded-xl">
                <Zap className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Modern Tech</h3>
                <p className="text-muted text-sm">We utilize 3D imaging and laser dentistry for precise, efficient, and comfortable treatments.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">Meet Our Doctors</h2>
            <p className="text-muted max-w-2xl mx-auto">Our team of experienced professionals is dedicated to your oral health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            <DoctorCard 
              name="Dr. Sarah Bennett"
              role="Lead Dentist, DDS"
              bio="Dr. Bennett has over 15 years of experience and specializes in cosmetic restoration."
              imageKey="doctor-1"
            />
            <DoctorCard 
              name="Dr. Michael Ross"
              role="Orthodontist, DMD"
              bio="Passionate about creating perfect smiles, Dr. Ross is an Invisalign Diamond Provider."
              imageKey="doctor-2"
            />
            <DoctorCard 
              name="Dr. Emily Chen"
              role="Pediatric Dentist, DDS"
              bio="Dr. Chen makes every child's visit fun and educational, building healthy habits early."
              imageKey="doctor-1" 
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <h3 className="text-2xl font-bold mb-6">Join Our Dental Family</h3>
        <Button asChild variant="secondary" size="lg" className="rounded-full">
          <Link href="/contact">Schedule a Visit</Link>
        </Button>
      </section>
    </div>
  );
}