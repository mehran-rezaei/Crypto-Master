/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors : {
        bodybg : '#212529',
        cartcolor : '#1a73e8',
        navbg : '#14161a',
        titlecolor : '#ecdc55',
        primary : '#FF3636',
        secondary : {
          100 : '#E2E205',
          200 : '#888883'
        }
       },
       boxShadow : {
        navbarshadow : '0 7px 11px 6px rgb(0 0 0 / 39%)',
       }   
    },
  },
  plugins: [],
}
