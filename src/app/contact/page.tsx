import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Summit Dental Care in Houston, TX. Book an appointment or ask us a question.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-24 pt-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-text-muted">
            Ready to schedule your visit? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-heading font-bold text-text mb-6">
                  Office Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Address</h3>
                      <p className="text-text-muted">
                        {siteConfig.contact.address}
                      </p>
                      <a
                        href="https://maps.google.com/?q=4521+Westheimer+Rd+Suite+200+Houston+TX+77027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold text-sm underline mt-1 inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface p-6 rounded-large">
                <h3 className="font-bold text-text mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {siteConfig.contact.hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-text">{item.day}</span>
                      <span className="text-text-muted">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-large overflow-hidden relative">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   loading="lazy" 
                   allowFullScreen
                   src="https://maps.google.com/maps?q=4521%20Westheimer%20Rd%20Suite%20200%20Houston%20TX%2077027&t=&z=15&ie=UTF8&iwloc=&output=embed">
                 </iframe>
              </div>
            </div>

            {/* Form */}
            <div className="lg:pl-8">
              <div className="bg-white p-8 rounded-large shadow-lg border border-border sticky top-24">
                <h2 className="text-2xl font-heading font-bold text-text mb-6">
                  Request Appointment
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}