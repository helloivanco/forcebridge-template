const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'cell-pattern': "url('/cell-pattern.gif')",
      },
      colors: {
        nervos: {
          greenlight: '#18EFB1',
          green: '#00CC9B',
          greylight: '#484D4E',
          greyquantum: '#EDF2F2',
          greydark: '#232323',
          purple: '#9B18EF',
          indigo: '#5700FF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
