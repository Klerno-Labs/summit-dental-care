"use client";

import { useState } from "react";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Format: (555) 555-5555";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return `(${match[1] || ''}) ${match[2] || ''}${match[3] ? '-' + match[3] : ''}`;
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'phone' ? formatPhoneNumber(value) : value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", preferredDate: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-large shadow-card border border-border">
      {submitStatus === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-text mb-2">Message Sent!</h3>
          <p className="text-muted">Thank you for contacting Summit Dental Care. We will be in touch within 24 hours.</p>
          <Button onClick={() => setSubmitStatus("idle")} variant="secondary" className="mt-6">Send Another</Button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <InputField
              id="contact-name"
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              id="contact-email"
              name="email"
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              id="contact-phone"
              name="phone"
              type="tel"
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-sm font-semibold text-text mb-2">
                How can we help?
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={cn(
                  "w-full bg-white border border-border rounded-small px-4 py-3 text-text outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary resize-none",
                  errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && <p id="contact-message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={() => {}} />

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2 text-sm">
                <AlertCircle size={16} />
                <span>Something went wrong. Please try again.</span>
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
                <span className="flex items-center gap-2">Sending...</span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send size={18} />
                </span>
              )}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}