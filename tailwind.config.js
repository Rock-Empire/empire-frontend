/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet-8': {'min': '700px', 'max': '1024px'},
        'xs-max': {'max': '600px'},
        'xs': { 'max': '320px' }
      }
    },
  },
  plugins: [],
}
