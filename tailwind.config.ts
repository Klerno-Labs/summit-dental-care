import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3", // Trustworthy professional blue
        secondary: "#00a8cc", // Clinical teal/cyan
        accent: "#ffb703", // Warm amber/yellow
        background: "#ffffff",
        surface: "#f8f9fa",
        text: "#212529",
        muted: "#6c757d",
        border: "#dee2e6",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "16px",
        pill: "50px",
      },
      maxWidth: {
        "8xl": "96rem", // 1536px
      },
    },
  },
  plugins: [],
};
export default config;