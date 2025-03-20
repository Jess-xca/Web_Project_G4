/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xll': '1040px' ,
        'xxl': '1548px', 
        '2xxl' : '2560px',
      },
      colors: {
        primary: "#9747FF",
      },
    },
  },
  plugins: [],
};
