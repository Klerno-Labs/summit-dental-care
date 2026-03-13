# Summit Dental Care Website

A modern, high-performance website for Summit Dental Care, built with Next.js 14, TypeScript, and Tailwind CSS. This project focuses on patient conversion, speed, and accessibility, featuring a bespoke design system developed by the Z.ai design intelligence platform.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Montserrat (Headings) & Open Sans (Body) via `next/font`

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/summit-dental-care.git
   cd summit-dental-care
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

```bash
summit-dental-care/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page + API route
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles & Tailwind directives
│   │   ├── layout.tsx      # Root layout (fonts, metadata)
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Primitives (Button, Input, etc.)
│   │   ├── sections/       # Page sections (Hero, Testimonials)
│   │   └── layout/         # Navbar, Footer
│   ├── config/             # Configuration files
│   │   ├── images.ts       # ⚡ CENTRAL IMAGE MANAGEMENT
│   │   └── site.ts         # Site metadata (address, phone, hours)
│   └── lib/                # Utilities (cn, helpers)
├── tailwind.config.ts      # Tailwind theme configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### 🖼️ Image Customization

This project uses a centralized image management system. You do **not** need to hunt through component files to change photos. All images are controlled via a single configuration file.

**How to update images:**

1.  Open `src/config/images.ts`.
2.  Find the image slot you want to change (e.g., `"hero"`, `"about"`, `"service-1"`).
3.  Replace the `src` URL with your new image URL.
4.  Update the `alt` text to describe the new image for accessibility.
5.  Save the file. The change will apply immediately across the site.

**Image Slots Reference:**

| Slot Key | Location on Site | Recommended Dimensions |
| :--- | :--- | :--- |
| `hero` | Home Page (Main Banner) | 1200x800 (Landscape) |
| `hero-alt` | About/Services Page Headers | 1200x800 (Landscape) |
| `about` | About Page (Main Image) | 1200x800 (Landscape) |
| `service-1` | Services Overview (Card 1) | 1200x800 (Landscape) |
| `service-2` | Services Overview (Card 2) | 1200x800 (Landscape) |
| `service-3` | Services Overview (Card 3) | 1200x800 (Landscape) |
| `gallery-1` | Grid/Gallery Sections | 1200x800 (Landscape) |
| `gallery-2` | Grid/Gallery Sections | 1200x800 (Landscape) |
| `gallery-3` | Grid/Gallery Sections | 1200x800 (Landscape) |
| `team-1` | Team Member Cards | 1200x800 (Landscape) |
| `cta` | Call-to-Action Sections | 1200x800 (Landscape) |
| `testimonial-bg` | Testimonials Background | 1200x800 (Landscape) |

### 🎨 Brand Customization

#### Colors
The design system uses CSS variables mapped to Tailwind classes. To change brand colors:
1.  Open `tailwind.config.ts`.
2.  Locate the `colors` object in `theme.extend`.
3.  Update the hex codes for `primary` (Current: `#0056b3`) or `secondary` (Current: `#00a8cc`).

#### Fonts
To swap fonts:
1.  Open `src/app/layout.tsx`.
2.  Import your new font from `next/font/google`.
3.  Replace the `heading` and `body` font objects.

#### Logo
The logo is typically an SVG component or an image import.
1.  Navigate to `src/components/layout/navbar.tsx`.
2.  Replace the `<Logo />` component or image tag with your own asset.

### 📞 Business Info (Address, Phone, Hours)

Static business information is centralized in `src/config/site.ts`. Update this file to change contact details across the Footer, Contact page, and Navbar globally.

## Environment Variables

Create a `.env.local` file in the root directory (see `.env.example` for required variables).

## Deployment

This project is optimized for deployment on Vercel. See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## Support

For support or questions regarding this build, please contact the development team at showcase@pegrio.com.