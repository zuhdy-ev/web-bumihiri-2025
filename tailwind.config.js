/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        s: '550px',
      },
      colors: {
        'primary-color': '#202020',
        'light-red': '#CC2139',
        'dark-red': '#66111D',
        'light-blue': '#2BB5D8',
        'dark-blue': '#424EA2',
        'light-purple': '#9461CB',
        'dark-purple': '#60429B',
        'gradient-purple': 'from-light-purple to-dark-purple',
        'gradient-blue': 'from-light-blue to-dark-blue',
        'gradient-red': 'from-light-red to-dark-red',
      },
      fontFamily: {
        'made-tommy-bold': ['"MADE TOMMY Bold"', 'sans-serif'],
        'made-tommy-extra-bold': ['"MADE TOMMY ExtraBold"', 'sans-serif'],
        'made-tommy-light': ['"MADE TOMMY Light"', 'sans-serif'],
        'made-tommy-medium': ['"MADE TOMMY Medium"', 'sans-serif'],
        'made-tommy-regular': ['"MADE TOMMY Regular"', 'sans-serif'],
        'made-tommy-thin': ['"MADE TOMMY Thin"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
