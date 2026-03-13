"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", date: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">We are here to help. Reach out to schedule an appointment or ask a question.</p>
        </div>
      </section>

      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-white p-2 rounded-2xl shadow-sm h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200">
                {/* Simulated Map Embed */}
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#0056b3]" />
                  <p>Interactive Google Map</p>
                  <p className="text-sm">(Placeholder for demo)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Phone className="w-6 h-6 text-[#0056b3] mb-3" />
                  <p className="text-sm text-gray-500 uppercase font-semibold">Phone</p>
                  <a href="tel:+17135550123" className="text-xl font-bold text-gray-900 hover:text-[#0056b3]">(713) 555-0123</a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-[#0056b3] mb-3" />
                  <p className="text-sm text-gray-500 uppercase font-semibold">Email</p>
                  <a href="mailto:info@summitdental.com" className="text-xl font-bold text-gray-900 hover:text-[#0056b3] break-all">info@summitdental.com</a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm sm:col-span-2">
                  <MapPin className="w-6 h-6 text-[#0056b3] mb-3" />
                  <p className="text-sm text-gray-500 uppercase font-semibold">Address</p>
                  <p className="text-lg font-bold text-gray-900">4521 Westheimer Rd, Suite 200</p>
                  <p className="text-gray-600">Houston, TX 77027</p>
                </div>
              </div>

              <div className="bg-[#0056b3] rounded-2xl p-8 text-white">
                <Clock className="w-8 h-8 mb-4 text-[#00a8cc]" />
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>Mon - Fri</div><div>8am - 6pm</div>
                  <div>Saturday</div><div>9am - 2pm</div>
                  <div>Sunday</div><div>Closed</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Request Appointment</h2>
              
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We will be in touch within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-[#0056b3] font-bold hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="hidden">
                    <label htmlFor="gotcha">Don't fill this out</label>
                    <input id="gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/20 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">How can we help? *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/20 outline-none transition-all resize-none"
                      placeholder="I am interested in..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <Button type="submit" size="lg" className="w-full" isLoading={status === "loading"}>
                    Send Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}