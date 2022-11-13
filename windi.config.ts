import { defineConfig } from '@windicss/plugin-utils'
// import plugin from 'windicss/plugin'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#fff',
        lightDarkBg: '#2B3844',
        black: '#121212',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'system-ui'],
        nunitoSemibold: ['Nunito Sans Semibold', 'system-ui'],
        nunitoBold: ['Nunito Sans Bold', 'system-ui'],
      },
      boxShadow: {
        navbar: '0px 2px 4px rgba(0, 0, 0, 0.0562443)',
      },
    },
  },

  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     const newUtilities = {
  //       '.container': {
  //         width: '100%',
  //         maxWidth: '1440px',
  //         margin: '0 auto',
  //         padding: '0 16px',
  //         color: 'inherit',
  //         '@media (min-width: 768px)': {
  //           padding: '0 32px',
  //         },
  //         '@media (min-width: 1024px)': {
  //           padding: '0 80px',
  //         },
  //       },
  //     }
  //     addUtilities(newUtilities)
  //   }),
  // ],
})
