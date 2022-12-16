/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
       sm: '480px',
       md: '768px',
       lg: '976px',
       xl: '1440px'
    },
    extend: {
      colors: {
        btnColor: '#363e37',
        btnColorHover: '#565a56',
        lightGreen: '#a8be4c',
        darkGreen: '#526730',
        whiteBg: '#e8e9eb',
        arshBg: '#ccc',
        white: '#fafaf9',
        textBlack: '#4a4a4b',
      }
    },
  },
  plugins: [],
}
