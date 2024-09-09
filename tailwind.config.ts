import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#adf506",
        offWhite: "#fafafa",
        lightShade: "#f2fdd2",
        dark: "#212121",
        darkGray: "#272727",
        lightGray: "#404040",
      },
    },
  },
  plugins: [],
};
export default config;
