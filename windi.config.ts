import { defineConfig } from '@windicss/plugin-utils'
// import plugin from 'windicss/plugin'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    extend: {
      // colors: {
      //   white: '#fff',
      //   black: '#121212',
      // },
      fontFamily: {
        nunito: ['Nunito Sans', 'system-ui'],
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
