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
        ink: "#202734",
        sub: "#626A75",
        black: "#202734",
        gray: {
          100: "#ECEEF1",
          200: "#D9DDE3",
          300: "#C4CAD2",
          400: "#959DA8",
          500: "#737C88",
          600: "#626A75",
          700: "#48515E",
        },
      },
    },
  },
  plugins: [],
};
