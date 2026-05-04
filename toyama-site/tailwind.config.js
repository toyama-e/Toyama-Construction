/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mincho: ["var(--font-serif-ja)", "serif"],
      },
      colors: {
        navy: "#1E3A5F",
        gold: "#C9A84C",
        offwhite: "#FFFFFF",
        ink: "#000000",
        sub: "#666666",
      },
    },
  },
  plugins: [],
};
