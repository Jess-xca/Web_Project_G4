/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/sections/*.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFE800",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
