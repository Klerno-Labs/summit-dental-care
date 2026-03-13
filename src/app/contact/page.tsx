import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Summit Dental Care. Book an appointment or ask us a question.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-6">Get in Touch</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to book? Have a question? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading font-bold text-2xl text-text mb-6">Contact Information</h2>
                <p className="text-muted mb-8">
                  Fill out the form and our team will get back to you within 24 hours. For emergencies, please call us directly.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Address</h3>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                        {siteConfig.contact.address}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="text-muted hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-muted hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
                {/* Simulating map */}
                <div className="absolute inset-0 bg-surface flex items-center justify-center flex-col text-muted">
                  <MapPin size={32} className="mb-2 text-gray-400" />
                  <span className="text-sm font-medium">Interactive Map Loading...</span>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                   <Clock className="text-primary" />
                   <h3 className="font-bold text-text">Office Hours</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Mon - Fri</span>
                    <span className="font-medium text-text">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Saturday</span>
                    <span className="font-medium text-text">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-text">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface p-8 lg:p-12 rounded-2xl border border-gray-100 h-fit">
              <h2 className="font-heading font-bold text-2xl text-text mb-6">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}