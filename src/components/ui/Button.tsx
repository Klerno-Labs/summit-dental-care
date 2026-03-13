import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  href, 
  variant = "primary", 
  size = "md", 
  isLoading = false, 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#0056b3] text-white hover:bg-[#004494] focus:ring-[#0056b3] shadow-md hover:shadow-lg",
    secondary: "bg-[#00a8cc] text-white hover:bg-[#0097b3] focus:ring-[#00a8cc]",
    outline: "bg-transparent border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white focus:ring-[#0056b3]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={isLoading} {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}