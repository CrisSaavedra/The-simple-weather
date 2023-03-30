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
      '10%': '10%',
      '5%': '5%',
    },

    extend: {
      backgroundImage: {
        'search': "url('./assets/search.svg')",

      },
      keyframes: {
        load: {
          '0%': { transform: 'translateX(-135rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
        out: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(175rem)' },
        }
      },
      animation: {
        load: 'load 1s ease-out forwards',
        out: 'out 0.7s ease-in forwards',
      }

    },
  },
  plugins: [],
}