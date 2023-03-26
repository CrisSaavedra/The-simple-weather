/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/**/*",
    "./src/component/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'font1': ['Mitr', 'sans-serif'],
    },

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '10%',
    },

    extend: {
      backgroundImage: {
        'search': "url('./assets/search.svg')",

      },
      
    },
  },
  plugins: [],
}