/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mincho: ["var(--font-serif-ja)", "serif"],
      },
      colors: {
        navy: "#17233A",
        bronze: "#955F3A",
        offwhite: "#F7F4EE",
        warmmiddle: "#F3F0EA",
        warmgray: "#EEEAE3",
        taupe: "#E4DED8",
        ink: "#202734",
        sub: "#626A75",
        black: "#202734",
        gray: {
          100: "#EEEAE3",
          200: "#D8D1C7",
          300: "#C4BCB1",
          400: "#9B9287",
          500: "#7D756C",
          600: "#665F58",
          700: "#4B4742",
        },
      },
    },
  },
  plugins: [],
};
