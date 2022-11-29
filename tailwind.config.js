/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'theme': '#1076FF', 
      'white': '#ffffff',
      'black': '#1E1E1E',
      'grey' : '#CECECE',
      'black-grey': '#767676'
    }
  },
  plugins: [],
}