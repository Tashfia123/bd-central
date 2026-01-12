/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bnp-green': {
          DEFAULT: '#006747',
          50: '#e6f4f0',
          100: '#cce9e0',
          200: '#99d3c2',
          300: '#66bda3',
          400: '#33a785',
          500: '#006747',
          600: '#005239',
          700: '#003d2b',
          800: '#00291c',
          900: '#00140e',
        },
      },
    },
  },
  plugins: [],
}
