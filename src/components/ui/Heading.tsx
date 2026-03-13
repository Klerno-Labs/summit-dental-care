import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
}

export function Heading({
  className,
  level = "h2",
  align = "left",
  children,
  ...props
}: HeadingProps) {
  const baseStyles = "font-bold text-text tracking-tight leading-tight";
  
  const sizes = {
    h1: "text-4xl sm:text-5xl lg:text-6xl mb-4",
    h2: "text-3xl sm:text-4xl mb-6",
    h3: "text-2xl sm:text-3xl mb-4",
    h4: "text-xl sm:text-2xl mb-2",
  };

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const combinedClasses = cn(baseStyles, sizes[level], alignments[align], className);

  if (level === "h1") {
    return <h1 className={combinedClasses} {...props}>{children}</h1>;
  }
  if (level === "h2") {
    return <h2 className={combinedClasses} {...props}>{children}</h2>;
  }
  if (level === "h3") {
    return <h3 className={combinedClasses} {...props}>{children}</h3>;
  }
  return <h4 className={combinedClasses} {...props}>{children}</h4>;
}