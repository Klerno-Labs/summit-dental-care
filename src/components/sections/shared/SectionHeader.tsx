import { HTMLAttributes } from "react";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, align = "center", className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto max-w-3xl", className)} {...props}>
      <Heading level="h2" align={align}>
        {title}
      </Heading>
      {subtitle && <p className="text-lg text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}