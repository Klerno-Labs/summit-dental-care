import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Summit Dental
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Modern dentistry with a gentle touch. We are committed to providing you and your family with the highest quality dental care in a comfortable and relaxed atmosphere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold text-white mb-2 text-sm">Office Hours</h5>
              <ul className="text-xs text-gray-400 space-y-1">
                {siteConfig.hours.map((slot, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{slot.day}</span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              {siteConfig.links.facebook && (
                <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.links.twitter && (
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
            <p className="text-xs text-gray-500">
              Connect with us for the latest updates, dental tips, and community news.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </Container>
    </footer>
  );
}