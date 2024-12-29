/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      colors: {
        secondary: '#138086',
        thertiary: '#062628',
        primary: '#42999E',
        white: '#FFFFFF',
        background:"#FFFFFF"
      },


        screens: {

          'phone': '480px',

          'tablet': '640px',


          'laptop': '1024px',


          'desktop': '1280px',

        },

    },
  },
  plugins: [],
}

