/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./src/sections/*.html",
    "./src/sections/privacy/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF",
        base: "#EFECEA",
        green: "#00672E",
      },
    },
  },
  plugins: [],
};
