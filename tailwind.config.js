/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/sections/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF",
        base: "#EFECEA",
        green: "#00672E",
      },
      fontFamily: {
        custom: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
