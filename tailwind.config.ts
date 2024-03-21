import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        'gradient-shadow': 'gradient-shadow 2s infinite',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      backgroundImage: ({ theme }) => ({
        'gradient-br': 'linear-gradient(to bottom right, rgba(243, 244, 246, 1) 3%, rgba(255, 255, 255, 0.9) 5%, rgba(243, 244, 246, 0.7) 20%)',
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500',
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
        'vc-border-gradient-light': `radial-gradient(at left top, ${theme(
          'colors.gray.50',
        )}, 50px, ${theme('colors.gray.400')} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        'gradient-shadow': {
          '0%': {
            boxShadow: 'inset 0 0 25px #ffffff, 0 2px 0 #6c6c6c, 1px 3px 0 #484848, 0 2px 0 #c9c9c9, 0 2px 3px #333',
          },
          '30%': {
            boxShadow: '0 0 17px 3px #ff000090, 0 0 4px 2px #ff0000',
          },
          '95%': {
            boxShadow: '0 0 17px 3px #ff000090, 0 0 4px 2px #ff0000',
          },
          '100%': {
            boxShadow: 'inset 0 0 25px #ffffff, 0 2px 0 #6c6c6c, 1px 3px 0 #484848, 0 2px 0 #c9c9c9, 0 2px 3px #333',
          },
        },
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      }),
      boxShadow: {
        'gradient-shadow': '0 0 25px #ffffff, 0 2px 0 #6c6c6c, 1px 3px 0 #484848, 0 2px 0 #c9c9c9, 0 2px 3px #333',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

export default config;
