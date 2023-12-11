import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    safelist:[ 'animate-[fade-in-up_1s_ease-in-out]','animate-[fade-in_1s_ease-in-out]'],
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        oldMan: "url('/images/OldMan.png')",
        backQ:"",
      },
      colors: {
        rgbBlack: "rgba(0, 0, 0, 0.80)",
        rgbWhite: "rgba(0, 0, 0, 0.40) ",
      },
    },
    container: {
      padding: "6.7rem",
    },
    fontFamily: {
      iranSans: ["iranSans"],
      iranSans2: ["iranSans2"],
      kalameh: ["kalameh"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"

};
export default config;
