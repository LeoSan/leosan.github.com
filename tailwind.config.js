/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#76C7C0', // Header bg
          DEFAULT: '#62A29E', // Menu hover
          dark: '#47817E', // Menu shadow
        },
        secondary: {
          light: '#E8645A', // Button 2
          DEFAULT: '#E2534B', // Drops
          dark: '#C03C35', // Menu drop border
        },
        neutral: {
          100: '#F3F3F3', // Main bg
          200: '#ececec', // Top grid
          300: '#DFDFDF', 
          500: '#8C9899', // Titles
          700: '#888888', // Text
          900: '#333333',
        }
      },
      fontFamily: {
        sans: ['"Roboto Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
