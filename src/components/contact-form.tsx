"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (data._gotcha) return; // Bot detected

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Network error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 bg-green-50 rounded-xl border border-green-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We've received your message and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input 
        type="text" 
        {...register("_gotcha")} 
        className="hidden" 
        tabIndex={-1} 
        autoComplete="off" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
          <Input id="phone" placeholder="(555) 123-4567" {...register("phone")} />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
        <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interest (Optional)</label>
        <select 
          id="service" 
          {...register("service")}
          className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
        >
          <option value="">Select a service...</option>
          <option value="general">General Dentistry</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="ortho">Orthodontics</option>
          <option value="emergency">Emergency Care</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help?</label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your dental needs or preferred appointment time..." 
          {...register("message")} 
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-12 text-base">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}