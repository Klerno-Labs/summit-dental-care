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
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
    alt: "Bright modern dental office with smiling staff",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=80",
    alt: "Dental team collaborating in bright office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop&q=80",
    alt: "Modern dental clinic interior waiting area",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=800&fit=crop&q=80",
    alt: "Dentist performing a checkup",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=800&fit=crop&q=80",
    alt: "Cosmetic dentistry tools and lighting",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1200&h=800&fit=crop&q=80",
    alt: "Dental implant procedure",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=80",
    alt: "Patient smiling after treatment",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1200&h=800&fit=crop&q=80",
    alt: "Advanced dental technology screen",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&h=800&fit=crop&q=80",
    alt: "Dr. Sarah Bennett profile",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=1200&h=800&fit=crop&q=80",
    alt: "Pediatric dentistry environment",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&q=80",
    alt: "Happy family leaving dental office",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop&q=80",
    alt: "Clean dental office exterior",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;