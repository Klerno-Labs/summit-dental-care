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
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Modern dental office workspace with natural light"
  "hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Modern dental office workspace with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional dental team collaborating"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Professional dental team collaborating",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Dental practice interior waiting area"
  "about": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Dental practice interior waiting area",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Teeth whitening procedure"
  "service-1": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Teeth whitening procedure",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Dental implants model"
  "service-2": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Dental implants model",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Family dental checkup"
  "service-3": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Family dental checkup",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Smiling patient after treatment"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Smiling patient after treatment",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Modern dental equipment"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Modern dental equipment",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Female dentist in white coat"
  "team-1": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&h=800&auto=format&fit=crop",
    alt: "Dr. Sarah Bennett",
    width: 800,
    height: 800,
  },
  
  // Team member photo 2 — REPLACE with a real Unsplash URL matching: "Male dentist smiling"
  "team-2": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&h=800&auto=format&fit=crop",
    alt: "Dr. James Rodriguez",
    width: 800,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Dental hygiene tools"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Dental hygiene tools",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Bright dental clinic exterior"
  "cta": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Bright dental clinic exterior",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Relaxed patient in chair"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Relaxed patient in chair",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;