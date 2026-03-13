"use client";
import { useState } from "react";
import { Search, CheckCircle } from "lucide-react";

export function InsuranceChecker() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-large shadow-xl border border-border w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-secondary/10 rounded-full text-primary">
          <Search size={18} />
        </div>
        <h3 className="font-bold text-text">Check Your Coverage</h3>
      </div>

      {status === "success" ? (
        <div className="text-center py-4">
          <CheckCircle className="mx-auto text-green-500 mb-2" size={32} />
          <p className="text-sm text-green-700 font-semibold">
            Great news! We likely accept your plan.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs text-primary underline mt-2"
          >
            Check another zip
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Enter Zip Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            pattern="[0-9]{5}"
            maxLength={5}
            className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-accent text-text font-bold py-2.5 rounded-md hover:bg-[#e6a502] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>Checking...</>
            ) : (
              <>Find Plans</>
            )}
          </button>
        </form>
      )}
      
      <p className="text-xs text-text-muted text-center mt-4">
        Most major insurance providers accepted.
      </p>
    </div>
  );
}