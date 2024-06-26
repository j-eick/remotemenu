import type { Config } from "tailwindcss";
import { gray, red, blue } from 'tailwindcss/colors';

console.log(gray);

const base = gray;
const warning = red;


const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        // Regular Textcolors
        "text-primary": base[900],
        "text-warning": warning[400],
      },
    },
  },
  plugins: [],
};
export default config;
