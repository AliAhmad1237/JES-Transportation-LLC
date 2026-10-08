import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nearBlack: "#0B0B0B",
        charcoal: "#181818",
        warmWhite: "#F5F3EE",
        softGray: "#D8D6D0",
        mutedSteel: "#898B8C",
        burntOrange: "#C75B35",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        editorial: "0.08em",
        widestEditorial: "0.15em",
      },
    },
  },
  plugins: [],
} satisfies Config;
