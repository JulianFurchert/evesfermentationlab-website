/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d9bdb0',
        background: '#ebeae9',
        text: '#453d39',
        transparent90: 'rgb(255 255 255 / 90%)', 
        transparent80: 'rgb(255 255 255 / 80%)', 
        transparent70: 'rgb(255 255 255 / 70%)', 
        transparent60: 'rgb(255 255 255 / 60%)', 
        transparent50: 'rgb(255 255 255 / 50%)', 
        transparent40: 'rgb(255 255 255 / 40%)', 
        transparent30: 'rgb(255 255 255 / 30%)', 
        transparent20: 'rgb(255 255 255 / 20%)', 
      },
    },
  },
  plugins: [],
}
