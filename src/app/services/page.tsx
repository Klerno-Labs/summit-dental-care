import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Our Services",
  description: "Explore our full range of dental services including general, cosmetic, and restorative dentistry.",
};

const services = [
  {
    id: "general",
    title: "General Dentistry",
    desc: "The foundation of a healthy smile. We recommend regular checkups every six months to prevent issues before they start.",
    items: ["Comprehensive Exams", "Professional Cleanings", "Digital X-Rays", "Fluoride Treatments", "Oral Cancer Screenings"],
    price: "Exams from $75"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with our aesthetic treatments designed to enhance the natural beauty of your teeth.",
    items: ["Professional Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Invisalign®", "Gum Contouring"],
    price: "Whitening from $199"
  },
  {
    id: "restorative",
    title: "Restorative Care",
    desc: "Repair damaged teeth and restore function with high-quality, durable materials that look completely natural.",
    items: ["Tooth-Colored Fillings", "Dental Crowns & Bridges", "Dental Implants", "Root Canal Therapy", "Dentures"],
    price: "Implants from $1500"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Dental Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From preventive care to complex restorations, we offer a complete suite of services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((category, idx) => (
            <div key={category.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    {/* Placeholder graphic for service image */}
                    <div className="absolute inset-0 bg-[#0056b3]/5 group-hover:bg-[#0056b3]/10 transition-colors"></div>
                    <span className="text-4xl font-bold text-gray-200/50">{category.title}</span>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-[#00a8cc] font-bold tracking-wider text-sm uppercase">Specialty Care</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4">{category.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{category.desc}</p>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#00a8cc]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Starting at {category.price}</span>
                  <Link href="/contact" className="text-[#0056b3] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Book Consultation <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}