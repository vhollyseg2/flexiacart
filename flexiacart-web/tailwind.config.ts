import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#FF5E00",
          600: "#E55500",
        },
        blue: {
          900: "#0F3870",
          950: "#0A2850",
        },
      },
    },
  },
  plugins: [],
};
export default config;
