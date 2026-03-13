"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2"
            : "bg-white/90 backdrop-blur-sm border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                S
              </div>
              <span className="font-heading font-bold text-2xl text-primary tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-semibold text-sm uppercase tracking-wide transition-colors hover:text-primary relative py-2",
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-600"
                  )}
                >
                  {item.title}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                >
                  <Phone size={18} />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <Button asChild variant="default" className="rounded-full">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
               <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-primary font-bold flex items-center gap-1"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-in slide-in-from-top-10 fade-in duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium border-b border-gray-100",
                  pathname === item.href
                    ? "text-primary bg-blue-50/50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full rounded-lg">
                <Link href="/contact" onClick={toggleMenu}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}