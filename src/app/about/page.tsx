import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Award, Heart } from "lucide-react";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description: "Learn more about Summit Dental Care's mission, our experienced team, and our commitment to gentle family dentistry.",
  openGraph: {
    images: [{ url: images["about"].src }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={images["about"].src}
            alt="Clinic Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            To provide the Houston community with exceptional dental care that prioritizes comfort, technology, and trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">More Than Just Dentists</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Founded in 2008, Summit Dental Care started with a simple idea: going to the dentist shouldn't be scary. We built our practice from the ground up focusing on patient experience. From the moment you walk in, you'll notice the difference—soothing colors, comfortable seating, and a team that genuinely cares about your well-being. We invest in the latest technology not because it's flashy, but because it allows us to diagnose issues earlier and treat them less invasively.
          </p>
          
          <blockquote className="border-l-4 border-[#0056b3] pl-6 italic text-2xl text-gray-800 font-serif my-12 text-left">
            "We treat every patient like a member of our own family. That means clear communication, no surprises, and always putting your health first."
          </blockquote>
          <p className="text-right text-gray-900 font-bold mb-12">— Dr. Sarah Jenkins, Founder</p>

          <Button href="/contact" size="lg">Book a Consultation</Button>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Patient-First", desc: "We listen. We explain. We ensure you are comfortable with every step of your treatment plan." },
              { icon: Award, title: "Expertise", desc: "Our doctors are continually trained in the latest techniques, from laser dentistry to implantology." },
              { icon: Heart, title: "Compassion", desc: "Dental anxiety is real. We offer sedation options and a gentle touch to ease your fears." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#e3f2fd] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0056b3]">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Doctors</h2>
            <p className="text-lg text-gray-600">Experts in their fields, passionate about your smile.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Jenkins",
                role: "DDS, Founder",
                bio: "Graduated with honors from UT Health. Specializes in cosmetic makeovers and implant restoration.",
                img: "team-1"
              },
              {
                name: "Dr. Michael Chen",
                role: "DDS, Orthodontics",
                bio: "Certified Invisalign provider. Passionate about creating confident smiles for teens and adults.",
                img: "team-1" // Using same img for demo, would be unique in prod
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "DDS, Pediatric Specialist",
                bio: "Makes kids actually look forward to the dentist! Gentle, fun, and highly skilled.",
                img: "team-1" // Using same img for demo
              }
            ].map((doc, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                   <div className="absolute inset-0 bg-[#00a8cc] rounded-full transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                   <Image
                    src={images["team-1"].src}
                    alt={doc.name}
                    width={200}
                    height={200}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-[#00a8cc] font-semibold uppercase text-sm tracking-wider mb-4">{doc.role}</p>
                <p className="text-gray-600 italic text-sm border-t border-gray-100 pt-4">{doc.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}