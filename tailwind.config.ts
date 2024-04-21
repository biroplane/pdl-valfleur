import tailwindTypography from '@tailwindcss/typography'
import nesting from 'tailwindcss/nesting'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'slices/**/*.vue',
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    // "composables/**/*.{js,ts}",
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {

      colors: {
        black: '#01011b',
        primary: {
          DEFAULT: '#D3AF5F',
          50: '#FFFCEB',
          100: '#FDF6D8',
          200: '#F8E9B4',
          300: '#F0D994',
          400: '#E5C576',
          500: '#D3AF5F',
          600: '#CE9E27',
          700: '#A17E17',
          800: '#705A0A',
          900: '#3B3002',
          950: '#1F1A00',
        },
      },
      fontFamily: {
        body: 'Raleway',
        head: ['Bodoni\\ Moda', 'serif'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '9/16': '9 / 16',
      },
      dropShadow: {
        text: '0 4px 4px  hsla(0, 0%, 0%, 0.5)',
      },
    },
  },
  plugins: [tailwindTypography, nesting,
    // require("@tailwindcss/container-queries"),
    // require("@tailwindcss/typography"),
    // ...
  ],
}
