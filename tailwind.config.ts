import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        "blue-glow": "#3B82F6",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F5F5F7",
        "text-primary": "#0A0A0F",
        "text-muted": "#6B7280",
        border: "#E5E5E5",
        "hero-bg": "#0A0A0F",
      },
      boxShadow: {
        subtle: "0 2px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
