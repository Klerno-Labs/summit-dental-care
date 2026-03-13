import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}