/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxl': '1548px', 
      },
      colors: {
        primary: "#9747FF",
      },
    },
  },
  plugins: [],
};
