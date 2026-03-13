import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-[#004494] shadow-md hover:shadow-lg",
      secondary: "bg-secondary text-white hover:bg-[#008cba] shadow-md hover:shadow-lg",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-gray-700 hover:bg-gray-100",
      accent: "bg-accent text-gray-900 hover:bg-[#e6a502]",
    };

    const sizes = {
      default: "h-10 px-6 py-2 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };