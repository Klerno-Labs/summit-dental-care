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
        primary: {
          DEFAULT: "#0056b3",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#00a8cc",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ffb703",
          foreground: "#212529",
        },
        background: "#ffffff",
        surface: "#f8f9fa",
        text: {
          DEFAULT: "#212529",
          muted: "#6c757d",
        },
        border: "#dee2e6",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;