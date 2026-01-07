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
        sans: ['var(--font-pretendard)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        studio: {
          bg: '#ffffff',
          text: '#111111',
          accent: '#333333',
          gray: '#f4f4f4',
        }
      }
    },
  },
  plugins: [],
};
export default config;


