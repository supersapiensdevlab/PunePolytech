/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#01A0E2",
        secondary: "#632A50;",
        primaryLight: "#72C7DB",
        tertiary: "#D9D9D9",
        para: "#1E1E1E;",
      },
    },
  },
  plugins: [],
};
