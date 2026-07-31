import type { Config } from "tailwindcss";

/** Wrap a CSS variable so Tailwind can inject <alpha-value> for opacity modifiers (/90 etc.) */
const withAlpha = (v: string) =>
  `color-mix(in srgb, var(${v}) calc(<alpha-value> * 100%), transparent)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: withAlpha("--primary"),
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: withAlpha("--secondary"),
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: withAlpha("--destructive"),
          foreground: "var(--destructive-foreground)",
          accent: "var(--destructive-accent)",
          "accent-border": "var(--destructive-accent-border)",
          "accent-foreground": "var(--destructive-accent-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          accent: "var(--success-accent)",
          "accent-border": "var(--success-accent-border)",
          "accent-foreground": "var(--success-accent-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          accent: "var(--warning-accent)",
          "accent-border": "var(--warning-accent-border)",
          "accent-foreground": "var(--warning-accent-foreground)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--info-foreground)",
          accent: "var(--info-accent)",
          "accent-border": "var(--info-accent-border)",
          "accent-foreground": "var(--info-accent-foreground)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
} satisfies Config;
