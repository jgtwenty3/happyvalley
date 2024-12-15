/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banger: ['banger', 'sans-serif'],
      },
      colors: {
        happyOrange: '#FF492B',
        happyTeal: '#238DBA',
        happyPink: '#FFA2E9',
        happySky: '#3CE4F5',
      },
    },
  },
  plugins: [],
}
