const { nextui } = require('@nextui-org/react')
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: ['SF'],
      serif: ['SF'],
      mono: ['SF'],
      display: ['SF'],
      body: ['SF'],
    },
    extend: {},
  },

  darkMode: 'class',
  plugins: [nextui()],

  // plugins: [forms],
}
