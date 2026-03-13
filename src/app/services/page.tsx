import { Metadata } from "next";
import ServiceCard from "@/components/service-card";
import { Tooth, Smile, AlignLeft, Stethoscope, Baby, Activity } from "lucide-react";
import { images } from "@/config/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive dental services including general, cosmetic, and orthodontic care.",
};

const services = [
  {
    title: "General Dentistry",
    description: "Routine cleanings, comprehensive exams, fluoride treatments, and cavity fillings to maintain your oral health.",
    image: images["service-general"],
    icon: Tooth
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with professional teeth whitening, porcelain veneers, and aesthetic bonding.",
    image: images["service-cosmetic"],
    icon: Smile
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with clear aligners or traditional braces. Correct bite issues and improve aesthetics.",
    image: images["service-ortho"],
    icon: AlignLeft
  },
  {
    title: "Emergency Care",
    description: "Same-day appointments for toothaches, chipped teeth, and other urgent dental needs.",
    image: images["service-general"], // Reusing generic for demo
    icon: Stethoscope
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle care for children of all ages. From first visits to sealants, we make dentistry fun for kids.",
    image: images["service-general"], // Reusing generic for demo
    icon: Baby
  },
  {
    title: "Periodontal Therapy",
    description: "Treatment for gum disease including deep cleanings (scaling and root planing) and gum grafting.",
    image: images["service-general"], // Reusing generic for demo
    icon: Activity
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-6">Comprehensive Dental Services</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From preventative care to complete smile makeovers, we offer a full spectrum of dental services for the whole family.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                   <Image
                     src={service.image.src}
                     alt={service.title}
                     width={600}
                     height={400}
                     className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center">
                    <service.icon size={24} />
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-text">{service.title}</h2>
                  <p className="text-lg text-muted leading-relaxed">{service.description}</p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance Banner */}
      <section className="bg-primary py-12 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Insurance & Financing</h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">We work with most major insurance providers and offer flexible payment plans for your convenience.</p>
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/contact">Check Coverage</Link>
        </Button>
      </section>
    </div>
  );
}