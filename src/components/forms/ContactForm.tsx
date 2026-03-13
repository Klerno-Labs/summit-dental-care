"use client";
import { useState } from "react";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // Bot detected

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real app with API route:
      // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      // if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-large text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-green-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thank you for contacting Summit Dental Care. We will be in touch
          within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-green-700 font-semibold underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden">
        <label htmlFor="gotcha">Don't fill this out if you're human:</label>
        <input
          id="gotcha"
          name="_gotcha"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="name"
          name="name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          required
        />
        <InputField
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="(713) 555-0199"
          required
        />
      </div>

      <InputField
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        required
      />

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-semibold text-text mb-2">
          Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-white border border-border rounded-md px-4 py-3.5 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          <option value="general">General Checkup</option>
          <option value="cleaning">Teeth Cleaning</option>
          <option value="whitening">Cosmetic Whitening</option>
          <option value="implants">Dental Implants</option>
          <option value="emergency">Emergency Care</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How can we help you?"
          className="w-full bg-white border border-border rounded-md px-4 py-3 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          required
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-md">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Appointment"
        )}
      </Button>
      
      <p className="text-xs text-center text-text-muted mt-4">
        No spam, ever. Your information is secure.
      </p>
    </form>
  );
}