/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f83e35",
        secondary: "#ff7170",
        tertiary: "#ffa6a7",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
