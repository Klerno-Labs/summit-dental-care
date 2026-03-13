"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1e21] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#00a8cc] rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-bold font-heading">Summit Dental</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional dental care with a gentle, patient-first approach. Your smile is our top priority.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[#00a8cc] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#00a8cc] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#00a8cc] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#00a8cc] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#00a8cc] mt-1 flex-shrink-0" />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#00a8cc] flex-shrink-0" />
                <a href="tel:+17135550123" className="hover:text-white transition-colors">(713) 555-0123</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#00a8cc] flex-shrink-0" />
                <a href="mailto:info@summitdental.com" className="hover:text-white transition-colors">info@summitdental.com</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Social */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Office Hours</h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00a8cc] hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Summit Dental Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-[#0056b3] text-white p-3 rounded-full shadow-lg hover:bg-[#00a8cc] transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}