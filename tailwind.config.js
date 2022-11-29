/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mini-sc': {'min': '601px', 'max': '1024px'},
        'sm-sc': {'max': '600px'},
        'xs': { 'max': '320px' }
      }
    },
  },
  plugins: [],
}
