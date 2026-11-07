import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/experiences/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#050810",
          900: "#0a1224",
          800: "#0f1a32",
          700: "#152044",
        },
        electric: {
          DEFAULT: "#2f7bff",
          dim: "#1e5fd4",
          glow: "#5b9cff",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.12)",
          medium: "rgba(255, 255, 255, 0.08)",
          dark: "rgba(10, 18, 36, 0.55)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["SF Mono", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        window: "0 22px 70px rgba(0, 0, 0, 0.45), 0 2px 8px rgba(0, 0, 0, 0.2)",
        dock: "0 8px 32px rgba(0, 0, 0, 0.35)",
        island: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        glass: "40px",
      },
      borderRadius: {
        window: "12px",
        dock: "18px",
        ios: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
