import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ors: {
          paper:   "#FAFBFD",
          paper2:  "#F1F3F7",
          paper3:  "#E8ECF2",
          ink:     "#15181F",
          ink2:    "#2C313B",
          ink3:    "#6B7280",
          rule:    "#D6DCE6",
          accent:  "#3556F3", // ORS blue
          accent2: "#E4EAFD",
          hot:     "#FF6A3D", // the dot
          lime:    "#D6F04A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
