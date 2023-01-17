/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    minHeight: {
      'calc': 'calc(100vh - 200px)'
    },
    letterSpacing: {
      0.5: '0.5px',
    },
    fontFamily: {
      'campton': ['campton', 'Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-ing': "url('../assets/img/background.png')",
      },
      width: {
        'left': '43.793%',
        'right': 'calc(100% - 43.793%)',
        '310': '330px',
        '450': '450px',
      },
      borderRadius: {
        '6xl': '50px',
        '20': '20px',
        
      },
      colors: {
        'yellow': '#F9E2BA',
        'green': '#00C38B',
        'black': '#232323',
        'gray': '#343434',
        'gray-light': '#BDBDBD',
      },
      fontSize: {
        '2.9xl': '39px',
        '34': '34px',
      },
      maxWidth: {
        '1160': '1160px',
      },
      lineHeight: {
        '42': '42px',
        '45': '45px',
      },
      padding: {
        '55': '55px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
