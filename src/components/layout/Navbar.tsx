"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-gray-100 py-2"
          : "bg-white/90 backdrop-blur-md border-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-secondary transition-colors">
            S
          </div>
          <span className="font-heading font-bold text-xl text-text tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body font-semibold text-text hover:text-primary transition-colors text-sm lg:text-base"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary mr-2">
            <Phone size={18} />
            <span>{siteConfig.contact.phone}</span>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-text hover:bg-surface rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col p-6 shadow-xl animate-in slide-in-from-top-10 duration-300">
          <nav className="flex flex-col gap-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-bold text-xl text-text hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-border">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-3 text-lg font-semibold text-primary mb-4"
            >
              <Phone size={20} />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Request Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}