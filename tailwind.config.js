/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'white',
        onBackground: 'black',
        surface: '',
        primary: {
          900: '#000000', //Main
          850: '#0d0d0d',
          800: '#191919',
          750: '#262626',
          700: '#333333',
          650: '#404040',
          600: '#4d4d4d',
          550: '#595959',
          500: '#666666',
          450: '#737373',
          400: '#808080',
          350: '#8c8c8c',
          300: '#999999',
          250: '#a6a6a6',
          200: '#b3b3b3',
          150: '#cccccc',
          100: '#e6e6e6',
          50: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
