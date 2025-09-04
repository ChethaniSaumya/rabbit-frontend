/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5ff48b",
        secondary: "#00bc16",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui", "serif"],
      },
    },
  },
  plugins: [],
};
