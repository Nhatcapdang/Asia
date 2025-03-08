/** @format */

import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '430px',
      // => @media (min-width: 430px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      mobile: '430px',
      // => @media (min-width: 430px) { ... }
      tablet: '1024px',
      // => @media (min-width: 1024) { ... }
      laptop: '1440px',
      // => @media (min-width: 1440px) { ... }
      desktop: '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      tsap: {
        '1': '#061F42',
        '2': '#041E2E',
        '3': '#8BD3FF',
        '4': '#3C327C',
        '5': '#7EBEE5',
      },
      asia: {
        '1': '#562C2C',
        '2': '#F2542D',
        '3': '#CA3E1B',
        '4': '#FFEDE8',
        '5': '#AAAAAA',
        '6': '#999999',
        '7': '#BBBBBB',
        '8': '#0E9594',
        '9': '#666666',
        '10': '#0E9594',
      },
      black: '#000',
      white: '#fff',
    },
    boxShadow: {
      '3xl': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    extend: {
      keyframes: {
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'marquee-horizontal': 'marquee-x var(--duration) infinite linear',
        'marquee-vertical': 'marquee-y var(--duration) linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwindcss-animate'),
    plugin(function ({ addBase, theme, addComponents, addUtilities }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      }),
        addComponents({
          '.card': {
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.lg'),
            padding: theme('spacing.6'),
            boxShadow: theme('boxShadow.xl'),
          },
        }),
        addUtilities({
          '.transparent-text-fill': {
            '-webkit-text-fill-color': 'transparent',
          },
          '.text-fill-1': {
            '-webkit-text-fill-color': 'transparent',
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
            'background-image': `linear-gradient(to right, ${theme(
              'colors.find-help.1'
            )}, ${theme('colors.find-help.1')})`,
          },
          '.text-fill-2': {
            background: `linear-gradient(to right, ${theme(
              'colors.find-help.7'
            )}, ${theme('colors.find-help.8')})`,
          },
          '.text-fill-3': {
            background: `linear-gradient(to right, ${theme(
              'colors.find-help.5'
            )}, ${theme('colors.find-help.2')})`,
          },
          '.text-fill-4': {
            '-webkit-text-fill-color': 'transparent',
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
            'background-image': `linear-gradient(to right, ${theme(
              'colors.find-help.5'
            )}, ${theme('colors.find-help.2')})`,
          },
        })
    }),
  ],
}
export default config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
