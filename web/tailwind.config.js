/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxl': '2000px',
        'xs': "1156px",
        'gridLd': "1820px",
        "gridMd": "1360px",
        "gridSm": "900px",
        'gridXs': '750px',
        'mobile': '450px'
      }
      ,
      spacing:{
        '120':'28rem',
        '105':'24rem',
        '115':'23rem',
        '101':'20rem'

      }
    },
  },
  plugins: [],
}
