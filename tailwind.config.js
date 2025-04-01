export default {
  content: ["./*.html","./src/sections/*.html"],
  theme: {
    extend: {
      screens: {
        'xxl': '1548px', 
      },
      colors: {
        yellow: "#FFE800",
        base: "#EFECEA",
        green: "#00672E",
        purple: "#9747FF"
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
};
