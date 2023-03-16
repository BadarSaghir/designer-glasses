const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages/,components}/**/*!(*.stories|*.spec).{ts,tsx,html}',

    ),
    "../../node_modules/tw-elements/dist/js/**/*.js",


    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [require("tw-elements/dist/plugin")]
  ,
  theme: { screens: {
    'xs':'222px',
    'sm': '640px',
    'px1000':"1000px",
    'px1025':"1025px",
'px399':"399px",

    'px1014':"1014px",
    'px1017':'999px',
    'px1260':"1260px",
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
    "px1190":"1190px",
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
    
  },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      backgound:colors.gray,
      foreground:colors.white,
      text:colors.black,
      primaryMain:"#000000",
      secondaryMain:"#284177",
      tertiaryMain:"#fca311",
      whiteMain:"#e5e5e5",
      

    },
    extend: {},
  },
};
