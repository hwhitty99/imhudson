/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.astro", "./src/**/*.{js,astro}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        black: {
          50: "#808080",
          100: "#737373",
          200: "#666666",
          300: "#5a5a5a",
          400: "#4d4d4d",
          500: "#404040",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0d0d0d",
          DEFAULT: "#000000",
        },
      },
    },
    plugins: [require("tailwindcss-animation-delay")],
  },
};
