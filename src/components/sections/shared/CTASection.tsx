import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Transform Your Smile?",
  description = "Schedule your consultation today and take the first step towards better dental health.",
  buttonText = "Book Appointment",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images["cta"].src}
          alt={images["cta"].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <Link href={buttonLink}>
          <Button variant="accent" size="lg" className="inline-flex items-center gap-2">
            {buttonText}
            <ArrowRight size={20} />
          </Button>
        </Link>
      </div>
    </section>
  );
}