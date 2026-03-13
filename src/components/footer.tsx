import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-2xl">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern dentistry with a gentle touch. We are committed to providing you and your family with the highest quality dental care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Social */}
          <div>
             <h3 className="font-heading font-bold text-lg mb-6 text-white">Office Hours</h3>
             <ul className="space-y-2 text-sm text-gray-400 mb-6">
               <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
               <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 2:00 PM</span></li>
               <li className="flex justify-between"><span>Sunday:</span> <span className="text-white">Closed</span></li>
             </ul>

             <div className="flex gap-4">
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}