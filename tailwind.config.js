/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'background':'#121211',
        'onBackground':'#ead2ab',
        'surface':'#121211',
        'onSurface':'#ead2ab',
        'primary':'#121211',
        'onPrimary':'#ead2ab',
        'secondary':'#121211',
        'onSecondary':'#ead2ab',
      },
    },
  },
  plugins: [],
}
