import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"]
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://summitdental.com"),
  title: {
    default: "Summit Dental Care | Modern Family Dentistry in Houston",
    template: "%s | Summit Dental Care"
  },
  description: "Experienced care you can trust. Summit Dental Care provides comprehensive family dentistry with a gentle, patient-first approach in Houston, TX.",
  openGraph: {
    title: "Summit Dental Care",
    description: "Modern dental care for the whole family.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Summit Dental Care",
              "image": "https://summitdental.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4521 Westheimer Rd, Suite 200",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77027",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7373,
                "longitude": -95.4616
              },
              "url": "https://summitdental.com",
              "telephone": "+17135550123",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}