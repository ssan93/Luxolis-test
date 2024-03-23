/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/bg.png')",
      },
    },
  },
  plugins: [],
};
