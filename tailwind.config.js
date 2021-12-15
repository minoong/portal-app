const colors = require('tailwindcss/colors')

module.exports = {
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   colors: {
    lime: colors.lime,
   },
   animation: {
    't-in-right': 'toast-in-right .7s',
    't-in-left': 'toast-in-left .7s',
    't-in-top': 'toast-in-top .7s',
    't-in-bottom': 'toast-in-bottom .7s',
   },
   keyframes: {
    'toast-in-right': {
     from: {
      transform: 'translateX(100%)',
     },
     to: {
      transform: 'translateX(0)',
     },
    },
    'toast-in-left': {
     from: {
      transform: 'translateX(-100%)',
     },
     to: {
      transform: 'translateX(0)',
     },
    },
    'toast-in-top': {
     from: {
      transform: 'translateY(-100%)',
     },
     to: {
      transform: 'translateY(0)',
     },
    },
    'toast-in-bottom': {
     from: {
      transform: 'translateY(100%)',
     },
     to: {
      transform: 'translateY(0)',
     },
    },
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
