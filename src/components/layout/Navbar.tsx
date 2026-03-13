"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm border-gray-100" : "bg-white/80 backdrop-blur-md border-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-secondary transition-colors">
            S
          </div>
          <span className="font-heading font-bold text-xl text-primary tracking-tight">
            Summit Dental
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body font-semibold text-sm uppercase tracking-wide transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-text"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:7135550198" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors">
            <Phone size={18} />
            <span>(713) 555-0198</span>
          </a>
          <Button href="/contact" size="sm" variant="primary">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-text hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20">
          <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-heading font-bold text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
              <Button href="/contact" size="lg" variant="primary" className="w-full">
                Book Appointment
              </Button>
              <a href="tel:7135550198" className="text-center font-semibold text-primary text-lg py-3">
                (713) 555-0198
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}