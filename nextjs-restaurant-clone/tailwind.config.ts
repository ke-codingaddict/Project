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
        // Official Color Palette
        golden: "#fe0000", // Red (brand accent)
        black: "#000000", // Black
        white: "#ffffff", // White
        red: "#fe0000", // Red alias
        gray: "#545454",
        crimson: "#fe0000",
      },
      fontFamily: {
        // Proxima Nova — self-hosted
        base: ["'Proxima Nova'", "sans-serif"],
        alt: ["'Proxima Nova'", "sans-serif"],
        "proxima-nova": ["'Proxima Nova'", "sans-serif"],
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
