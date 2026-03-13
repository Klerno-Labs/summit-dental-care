"use client";

import { useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function InsuranceChecker() {
  const [zipCode, setZipCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 5) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-large shadow-modal w-full max-w-sm border border-border">
      <h3 className="font-heading font-bold text-lg mb-2 text-text">Check Your Insurance</h3>
      <p className="text-sm text-muted mb-4">Enter your zip code to see if we accept your plan.</p>
      
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-4 text-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="font-semibold text-text mb-1">Good News!</h4>
          <p className="text-sm text-muted">We likely accept plans in <span className="font-bold text-primary">{zipCode}</span>. Call us to verify specific benefits.</p>
          <button 
            onClick={() => {setIsSuccess(false); setZipCode("");}}
            className="mt-4 text-sm text-primary font-semibold hover:underline"
          >
            Check another zip
          </button>
        </div>
      ) : (
        <form onSubmit={handleCheck} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="Zip Code"
              className="w-full bg-surface border border-border rounded-small px-4 py-3 pl-10 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              maxLength={5}
              required
            />
            <Search className="absolute left-3 top-3.5 text-muted w-4 h-4" />
          </div>
          <Button
            type="submit"
            variant="accent"
            size="sm"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Checking..." : "Find Plans"}
          </Button>
        </form>
      )}
    </div>
  );
}