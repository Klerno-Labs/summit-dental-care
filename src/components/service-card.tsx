import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, linkText, href }: ServiceCardProps) {
  return (
    <div className={cn(
      "group bg-white p-8 rounded-xl shadow-card border border-transparent hover:border-secondary/20 transition-all duration-300 h-full flex flex-col",
      "hover:-translate-y-1 hover:shadow-hover"
    )}>
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-heading font-bold mb-3 text-text">{title}</h3>
      <p className="text-muted leading-relaxed mb-6 flex-grow">{description}</p>
      <a 
        href={href} 
        className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors mt-auto group-hover:translate-x-2 duration-300"
      >
        {linkText}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </a>
    </div>
  );
}