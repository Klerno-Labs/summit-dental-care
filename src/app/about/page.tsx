import { Metadata } from "next";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { DoctorCard } from "@/components/sections/about/DoctorCard";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CTASection } from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team at Summit Dental Care. Experienced dentists serving Houston, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* Minimal Hero */}
      <section className="bg-surface py-24 pt-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              To provide compassionate, high-quality dental care that empowers
              our patients to smile with confidence. We combine advanced
              technology with a personalized approach to ensure every visit is
              comfortable and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold text-text mb-6">
                A Different Kind of Dental Experience
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Summit Dental Care was founded on a simple premise: going to the
                dentist shouldn't be scary. From the moment you walk into our
                Westheimer Rd office, you'll notice the difference. We've
                designed our space to be warm, inviting, and calming.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                Our team stays at the forefront of dental technology, offering
                digital X-rays, 3D imaging, and laser dentistry to minimize
                discomfort and maximize precision. But technology is only as
                good as the people behind it, which is why we invest in ongoing
                education for every staff member.
              </p>
              <Link href="/contact">
                <Button variant="primary">Schedule a Visit</Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={images["about"].src}
                alt={images["about"].alt}
                width={images["about"].width}
                height={images["about"].height}
                className="rounded-large shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Us"
            align="center"
            description="We are committed to excellence in every aspect of your care."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-large shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-First</h3>
              <p className="text-text-muted">
                We listen to your concerns and tailor treatment plans to fit
                your budget and lifestyle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-large shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Tech</h3>
              <p className="text-text-muted">
                Utilizing the latest in dental technology for precise diagnoses
                and painless treatments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-large shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Respectful Time</h3>
              <p className="text-text-muted">
                We value your time. We strive to run on schedule so you aren't
                left waiting in the lobby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Meet Our Doctors"
            description="Our highly skilled team is dedicated to your oral health."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <DoctorCard
              name="Dr. Sarah Bennett"
              role="Lead Dentist, DDS"
              imageKey="team-1"
              bio="Dr. Bennett specializes in cosmetic dentistry and has over 15 years of experience creating beautiful smiles."
            />
            <DoctorCard
              name="Dr. James Rodriguez"
              role="Orthodontist, DMD"
              imageKey="team-2"
              bio="Dr. Rodriguez is an expert in Invisalign and braces for both adults and children."
            />
             <DoctorCard
              name="Dr. Emily Chen"
              role="Periodontist, DDS"
              imageKey="team-1" // Reusing for demo, normally distinct
              bio="Dr. Chen focuses on gum health and dental implants, ensuring a strong foundation for your teeth."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}