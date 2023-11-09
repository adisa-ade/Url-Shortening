/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      'white': 'rgb(255 255 255)',
      'cyan': 'hsl(180, 66%, 49%)',
      'darkViolet': 'hsl(257, 27%, 26%)',
      'red':' hsl(0, 87%, 67%)',
      'gray': 'hsl(0, 0%, 75%)',
      'grayishViolet': 'hsl(257, 7%, 63%)',
      'verydarkBlue':' hsl(255, 11%, 22%)',
      'verydarkViole': 'hsl(260, 8%, 14%)',
            },
    fontWeight:{
      medium: '500',
      bold: '700',
    },
    fontFamily:{
      poppins: 'Poppins',
    }     
  },
    extend: {         
  },
  plugins: [],
}

