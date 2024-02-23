/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container:{
      padding:{
        DEFAULT:'15px',
        
      },
    },
    screens:{
      sm:'340px',
      md:'748px',
      lg:'960px',
      xl:'1200px',
    },
    extend: {
      colors:{
        primary:'#0a1650',
        hover:'#11d5e5',
        secondary:'#001a5f',
        terciary:'#074988',
        accent:'#0bd4f0',
        iconcolor:'#3e63a7',
        shadowM:'0 25px 25px #000'
      },
      backgroundImage:{
        hero:'url(../../assets/hero.png)',
        section:'url(../../assets/section.png)',
        logo:'url(../../assets/logo.png)',
        
      },
      
      fontFamily:{
        primary:'Poppins'
      },


        
        

      },
    },
  plugins: [],
}
