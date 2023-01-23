/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      main: ["Lato", "sans-serif"],
    },

    colors: {
      main: "#ABB8C3",
      secondary: "#596171",
      buttondark: "#e7e7e7",
      textcolor: "#1D1E20",
      black: "#000",
      white: "#FFF",
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
