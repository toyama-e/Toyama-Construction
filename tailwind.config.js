/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mincho: ["var(--font-serif-ja)", "serif"],
      },
      colors: {
        navy: "#202020",
        gold: "#B84F2D",
        offwhite: "#F7F4EE",
        ink: "#202020",
        sub: "#5F5A54",
        gray: {
          100: "#F0ECE6",
          200: "#DED7CE",
          300: "#C7BEB2",
          400: "#938A80",
          500: "#756D64",
          600: "#655E57",
          700: "#4C4742",
        },
      },
    },
  },
  plugins: [],
};
