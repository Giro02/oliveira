/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend:{
      backgroundImage:{
        fundo1:"url('/public/src/static/6045255.jpg')"
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      open:['Open Sans', 'sans-serif']
    },
    
    colors:{
      color:{
        blacktrans:"#272727fc",
        black2:"#222222",
        black:"#282828",
        white:"rgb(255 255 255)",
        clicado:'#C39F76',
        verde:"rgb(185 28 28)",
      }
    },
  },
  plugins: [],
}
