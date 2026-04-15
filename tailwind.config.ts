import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#d9c7a8",
        parchment: "#f6f0e6",
        bark: "#5a4330",
        ember: "#9c6b3f",
        espresso: "#1a1411",
        charcoal: "#26211d"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Trebuchet MS", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(26, 20, 17, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(217,199,168,0.25), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
};

export default config;
