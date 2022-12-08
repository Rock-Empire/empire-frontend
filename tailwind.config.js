/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'lg-sc': {'min': '1025px', 'max': '1300px'},
        'mini-sc': {'min': '601px', 'max': '1024px'},
        'sm-sc': {'max': '600px'},
        'xs': { 'max': '320px' }
      },
      colors: {
        treColor1: '#ED3833',
        textColor1: '#595959'
      }
    },
  },
  plugins: [],
}
