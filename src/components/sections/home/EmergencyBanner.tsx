"use client";

import { AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";

export function EmergencyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-accent border-t-4 border-red-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-text">
          <AlertTriangle className="text-red-700 w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm">Toothache? We have same-day appointments.</span>
        </div>
        <Link href="tel:7135550198" className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-md">
          <Phone size={16} /> Call Now
        </Link>
      </div>
    </div>
  );
}