/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "300px",
        smMini: { max: "640px" },
      },
    },
  },
  plugins: [],
};
