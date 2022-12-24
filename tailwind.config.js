/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#21262D",
        white: "#FFFFFF",
        textPrimary: "#B9D1D9",
      },
    },
  },
  plugins: [],
};
