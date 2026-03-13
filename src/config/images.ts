// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Modern office workspace with natural light"
  "hero": {
    src: "https://images.unsplash.com/photo-1606811841689-76df60f5d4c7?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Smiling patient consulting with a friendly dentist in a modern clinic",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional team collaborating in bright office"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Dental team collaborating in a bright, modern office space",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Business professionals in modern meeting room"
  "about": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Clean, modern dental clinic interior with natural lighting",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Creative professionals working together"
  "service-1": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Dentist performing a routine checkup on a patient",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Data analytics dashboard on screen"
  "service-2": {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Close up of a bright smile showing cosmetic dentistry results",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Team workshop and brainstorming session"
  "service-3": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Dental implant model and tools on a tray",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Professional handshake in business setting"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1583947581924-615b1d937043?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Reception area of Summit Dental Care",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Modern conference room with city view"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Patient smiling confidently after teeth whitening",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Diverse team celebrating success"
  "team-1": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Dr. Sarah Jenkins, lead dentist at Summit Dental Care",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Technology workspace with multiple screens"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Dental team reviewing digital x-rays together",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Innovation and technology concept"
  "cta": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Modern dental clinic interior",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Professional business environment"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1606811841689-76df60f5d4c7?auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Background for testimonials section",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;