import { defineConfig } from '@windicss/plugin-utils'
import plugin from 'windicss/plugin'
export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '3xl': '2rem',
      },
      gridTemplateColumns: {
        countryGrid: 'repeat(auto-fill, minmax(264px, 1fr))',
      },
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
        'search-filter': '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
        card: '0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)',
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.container': {
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 16px',
          '@media (min-width: 768px)': {
            padding: '0 32px',
          },
          '@media (min-width: 1024px)': {
            padding: '0 64px',
          },
          '@media (min-width: 1440px)': {
            padding: '0 80px',
          },
        },
        '.select-arrow': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          backgroundColor: 'transparent',
          'background-image': 'url("@/assets/icons/expand-more.svg")',
          'background-repeat': 'no-repeat',
          'background-position-x': 'calc(100% - 19px)',
          'background-position-y': '50%',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn-border-country': {
          padding: '6px 30px',
          fontFamily: 'Nunito Sans',
          fontWeight: '300',
          fontSize: '12px',
          boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.104931)',
          borderRadius: '2px',
          '@media (min-width: 768px)': {
            fontSize: '14px',
          },
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
  ],
})
