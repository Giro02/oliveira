/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend:{
      aspectRatio: {
        '2.4/1': '2.4 / 1',
        '3.84/1':'3.84 / 1'
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      open:['Open Sans', 'sans-serif'],
      lato:['Lato', 'sans-serif'],
    },
    
    colors:{
      color:{
        blacktrans:"#272727fc",
        black2:"#222222",
        black:"#282828",
        white:"rgb(255 255 255)",
        clicado:'#C39F76',
        verde:"rgb(185 28 28)",
        cinza:"rgb(186, 186, 186)",
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
