import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ors: {
          ink:     "oklch(18% 0.02 250)",
          ink2:    "oklch(32% 0.02 250)",
          ink3:    "oklch(50% 0.015 250)",
          ink4:    "oklch(70% 0.012 250)",
          rule:    "oklch(90% 0.008 250)",
          paper:   "oklch(98% 0.006 250)",
          paper2:  "oklch(96% 0.008 250)",
          paper3:  "oklch(93% 0.012 250)",
          accent:  "oklch(64% 0.22 187)",  // cyan
          accent2: "oklch(92% 0.06 187)",
          accentInk: "oklch(34% 0.14 187)",
          hot:     "oklch(72% 0.22 324)",  // magenta
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        disp: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
