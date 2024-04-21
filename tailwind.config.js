/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"SF Pro Display"', "sans-serif"],
      },
      colors: {
        primary: "#FB0007",
        dark: {
          100: "#A19F9D",
          200: "#ADAFB1",
          300: "#313130",
          400: "#292929",
          500:"#212121"
        },
        darken: "rgba(41, 41, 41, 0.4);"
      },
    },
  },
  plugins: [],
};
