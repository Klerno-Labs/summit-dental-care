import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "primary" | "image";
}

export function CTASection({
  title = "Ready to Smile with Confidence?",
  description = "Schedule your appointment today and experience the Summit Dental difference.",
  buttonText = "Book Appointment",
  buttonLink = "/contact",
  variant = "primary",
}: CTASectionProps) {
  if (variant === "image") {
    return (
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images["cta"].src}
            alt={images["cta"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <Container className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
          <Button href={buttonLink} size="lg" variant="accent" className="inline-flex items-center gap-2">
            {buttonText} <ArrowRight size={20} />
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 py-24 md:py-32 text-white">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
        <Button href={buttonLink} size="lg" variant="accent" className="inline-flex items-center gap-2">
          {buttonText} <ArrowRight size={20} />
        </Button>
      </Container>
    </section>
  );
}