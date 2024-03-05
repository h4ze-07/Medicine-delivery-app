/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#2B60F0',
        mainWhite: '#FFFFFF',
      },
      fontFamily: {
        main: 'Poppins',
      },
      gridAutoRows: {
        
      }
    },
  },
  plugins: [],
}

