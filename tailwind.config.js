/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'filter': 'filter',
      },
      
      gridTemplateColumns: {
        ['sidebar']: '14rem calc(100% - 16rem)',
        ['sidebar-mobile']: '6rem auto',
        ['table']: 'auto 1fr 1fr 1fr 1fr'
      },
      fontFamily: {
        sans: ['Roboto, sans-serif'],
        logo: ['Secular One', 'sans-serif']
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#31A78A',
          700: '#015F43',
        },
        blue: {
          500: '#1B59F8',
        },
        orange: {
          500: '#FF5C00',
          600: '#B15A35',
        },
        red: {
          600: '#CF5964',
          300: '#FA5A69',
          500: '#CF3D4B',
        },
        gray: {
          100: '#E1E1E6',
          200: '#AEAEAE',
          250: '#C9C9C9',
          300: '#646466',
          350: '#7A7C7E',
          500: '#959FB7',
          600: '#313236',
          700: '#1F1F21',
          800: '#1C2340',
          900: '#141933'
        },
        black: {
          500: '#FFFFFF',
        },

        pink: {
          500: '#BB267F',
        },
        yellow: {
          500: '#FC9801',
          300: '#D58823',
        }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
