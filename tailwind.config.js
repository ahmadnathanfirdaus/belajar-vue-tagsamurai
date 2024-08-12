/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
