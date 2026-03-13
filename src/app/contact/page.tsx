"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-surface py-24 border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text mb-6">Get in Touch</h1>
            <p className="text-lg text-muted leading-relaxed">
              Have a question or ready to schedule an appointment? We are here to help. Fill out the form, give us a call, or stop by our office in Houston.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Layout */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map & Info */}
            <div className="space-y-8">
              <div className="h-[300px] lg:h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-md relative">
                 {/* Static Map Placeholder using image for demo stability */}
                 <img 
                   src="https://maps.googleapis.com/maps/api/staticmap?center=4521+Westheimer+Rd,Houston,TX&zoom=15&size=800x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C4521+Westheimer+Rd,Houston,TX&key=YOUR_API_KEY_HERE"
                   alt="Map Location"
                   className="w-full h-full object-cover"
                   onError={(e) => { e.currentTarget.src = "https://placehold.co/800x600/cccccc/666666?text=Map+Placeholder"; }}
                 />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-large border border-border">
                  <MapPin className="text-primary w-6 h-6 mb-3" />
                  <h3 className="font-bold text-text mb-2">Visit Us</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <Link 
                    href="https://maps.google.com/?q=4521+Westheimer+Rd,+Suite+200,+Houston,+TX+77027" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-bold hover:underline mt-2 inline-block"
                  >
                    Get Directions
                  </Link>
                </div>

                <div className="bg-surface p-6 rounded-large border border-border">
                  <Phone className="text-primary w-6 h-6 mb-3" />
                  <h3 className="font-bold text-text mb-2">Call Us</h3>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-xl font-bold text-text hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-muted text-sm mt-2">New Patients Welcome</p>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-large border border-border">
                <Clock className="text-primary w-6 h-6 mb-4" />
                <h3 className="font-bold text-text mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {siteConfig.hours.map((slot, idx) => (
                    <div key={idx} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                      <span className="text-muted">{slot.day}</span>
                      <span className="font-semibold text-text">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:pt-12">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}