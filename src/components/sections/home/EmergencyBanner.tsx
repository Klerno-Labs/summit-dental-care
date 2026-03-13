"use client";
import { AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-accent shadow-lg border-t-2 border-accent/80"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-text shrink-0" size={24} />
              <div>
                <p className="font-bold text-text text-sm sm:text-base">
                  Toothache? We have same-day appointments available.
                </p>
                <p className="text-xs text-text/80 hidden sm:block">
                  Don't wait in pain. Call us now.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="tel:7135550199"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-text text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                <Phone size={18} />
                (713) 555-0199
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="p-2 text-text/60 hover:text-text transition-colors"
                aria-label="Close banner"
              >
                &times;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}