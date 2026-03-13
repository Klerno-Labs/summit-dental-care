// ── Image Configuration ──────────────────────────────────────────────
// All components import from this file.
// Centralized management for easy swapping of assets.

export const images = {
  // Homepage hero banner — Smiling diverse patient
  "hero": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",
    alt: "Smiling diverse patient in dental chair",
    width: 1600,
    height: 900,
  },

  // About page interior shot
  "about": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern dental clinic interior with clean lines",
    width: 1600,
    height: 900,
  },

  // Service: General Dentistry
  "service-general": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    alt: "Dental tools and chair",
    width: 800,
    height: 600,
  },

  // Service: Cosmetic
  "service-cosmetic": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
    alt: "Bright smile cosmetic dentistry",
    width: 800,
    height: 600,
  },

  // Service: Orthodontics
  "service-ortho": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    alt: "Orthodontic braces model",
    width: 800,
    height: 600,
  },

  // Doctor 1
  "doctor-1": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Sarah Bennett",
    width: 800,
    height: 800,
  },

  // Doctor 2
  "doctor-2": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Michael Ross",
    width: 800,
    height: 800,
  },

  // Testimonial background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
    alt: "Dental practice waiting area",
    width: 1600,
    height: 900,
  },
  
  // Contact CTA
  "cta": {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
    alt: "Dental team smiling",
    width: 1600,
    height: 900,
  }
} as const;

export type ImageSlot = keyof typeof images;