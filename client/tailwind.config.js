/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        hero: ["Bellota Text", "cursive", "Oswald", "Raleway"],
        NavbarLink: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
