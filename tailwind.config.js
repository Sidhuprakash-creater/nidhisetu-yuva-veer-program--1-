/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
    './**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#0d4d56',
        'gold': '#d4af37',
        'camel': '#C19A6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}