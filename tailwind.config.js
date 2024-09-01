/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./css/*.css"],
  theme: {
    extend: {
      fontFamily: {
        kindred: ["kindred", "sans-serif"],
      },
    },
  },
  plugins: [],
};
