const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './**/*.hbs',
    './src/**/*.js',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // customize your colors here
      // ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lime: colors.lime,
      neutral: colors.neutral,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      sky: colors.sky,
      slate: colors.slate,
      stone: colors.stone,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.amber,
      white: colors.white,
    },
    container: {
      padding: '2rem',
      center: true,
    },
  },
  important: false,
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}