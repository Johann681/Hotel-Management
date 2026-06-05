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
        "bg-secondary": "#F9F9F9",
        "text-primary": "#0A0A0F",
        "text-muted": "#6B7280",
        border: "#EBEBEB",
        "hero-bg": "#0A0A0F",
      },
    },
  },
  plugins: [],
};
export default config;
