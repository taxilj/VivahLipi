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
        saffron: {
          DEFAULT: "#ab3500",
          dark: "#7a2000",
          light: "#c45010",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#fdf6e3",
          pale: "rgba(212,175,55,0.12)",
        },
        cream: {
          DEFAULT: "#fff8f5",
          dark: "#f5ede4",
        },
        charcoal: "#1e1b18",
        muted: "#8a7e74",
        border: "#e8ddd5",
        wa: "#25D366",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212,175,55,0.15)",
        saffron: "0 12px 36px rgba(171,53,0,0.25)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
        elevated: "0 8px 32px rgba(0,0,0,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-saffron": "linear-gradient(135deg, #7a2000 0%, #ab3500 50%, #c45010 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #c9a227 100%)",
        "gradient-dark": "linear-gradient(130deg, #1e1b18 0%, #2e1e0e 55%, #1e1b18 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
