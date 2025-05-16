import type { Config } from "tailwindcss"

/**
 * Tailwind Configuration
 * 
 * This configuration extends Tailwind's default theme with our design tokens.
 * It references CSS variables defined in globals.css, providing a flexible
 * system that supports theming and alpha channel manipulation.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Primary palette and variations
        primary: {
          DEFAULT: "rgb(var(--brand-primary) / <alpha-value>)",
          light: "rgb(var(--brand-primary-light) / <alpha-value>)",
          dark: "rgb(var(--brand-primary-dark) / <alpha-value>)",
        },
        secondary: "rgb(var(--brand-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--brand-tertiary) / <alpha-value>)",
        quaternary: "rgb(var(--brand-quaternary) / <alpha-value>)",

        // System Colors - Used for feedback and status indicators
        success: "rgb(var(--system-success) / <alpha-value>)",
        error: "rgb(var(--system-error) / <alpha-value>)",
        warning: "rgb(var(--system-warning) / <alpha-value>)",
        info: "rgb(var(--system-info) / <alpha-value>)",
        pending: "rgb(var(--system-pending) / <alpha-value>)",

        // Neutral Colors - Used for UI surfaces, text, and borders
        background: "rgb(var(--neutral-background) / <alpha-value>)",
        foreground: "rgb(var(--neutral-foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--neutral-muted) / <alpha-value>)",
          foreground: "rgb(var(--neutral-muted-foreground) / <alpha-value>)",
        },
        neutral: "rgb(var(--neutral-border) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, rgb(var(--brand-primary) / 0.3), rgb(var(--brand-primary)))',
        'gradient-secondary': 'linear-gradient(to bottom right, rgb(var(--brand-primary) / 0.7), rgb(var(--brand-primary-dark) / 0.8))',
        'gradient-tertiary': 'linear-gradient(to bottom right, rgb(var(--brand-secondary)), rgb(var(--brand-tertiary) / 0.7))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
