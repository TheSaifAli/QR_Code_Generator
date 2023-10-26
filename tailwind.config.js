/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        'shake':{
        '0%':{
            transform:'translateX(0)'
        },
        '25%':{
            transform:'translateX(-2px)'
        },
        '50%':{
            transform:'translateX(0)'
        },
        '75%':{
            transform:'translateX(2px)'
        },
        '100%':{
            transform:'translateX(0)'
        },
      },
      'QRShow':{
      '0%':{
          opacity:'0%'
      },
      '25%':{
          opacity:'25%'
      },
      '50%':{
          opacity:'50%'
      },
      '75%':{
          opacity:'75%'
      },
      '100%':{
          opacity:'100%'
      },
    },
  },
    animation:{
      'errorAnime':
        'shake .1s linear 10',
        'qrCodeAnime':'QRShow 1s ease'
    }
    },
  },
  plugins: [],
}

