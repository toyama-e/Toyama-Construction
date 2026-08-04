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
        offwhite: "#FFFFFF",
        paleblue: "#F7FAFC",
        bluegray: "#F2F7FA",
        lightblue: "#E7F0F5",
        ink: "#202734",
        sub: "#626A75",
        black: "#202734",
        gray: {
          100: "#F2F7FA",
          200: "#DCE7ED",
          300: "#C8D7DF",
          400: "#94A7B2",
          500: "#71848F",
          600: "#596B75",
          700: "#42515A",
        },
      },
    },
  },
  plugins: [],
};
