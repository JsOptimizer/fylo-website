import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(243, 87%, 12%)",
        secondary: "hsl(238, 22%, 44%)",
        brighBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",
        grayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
export default config;
