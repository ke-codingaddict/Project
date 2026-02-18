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
        golden: '#fe0000', // Replaced golden with Red as per plan
        black: '#000000',  // Pure Black
        gray: '#545454',
        crimson: '#f5efdb',
        white: '#ffffff',  // Pure White for text on black background
      },
      fontFamily: {
        base: ['var(--font-cormorant-upright)', 'serif'],
        alt: ['var(--font-open-sans)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
