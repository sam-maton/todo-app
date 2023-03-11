/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px'
    },
    colors: {
      'fm-bright-blue': 'hsl(220, 98%, 61%)',
      'fm-check-background': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
      'fm-very-light-gray': 'hsl(0, 0%, 98%)',
      'fm-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
      'fm-light-grayish-blue': 'hsl(233, 11%, 84%)',
      'fm-dark-grayish-blue': 'hsl(236, 9%, 61%)',
      'fm-very-dark-grayish blue': 'hsl(235, 19%, 35%)',
      'fm-very-dark-blue': 'hsl(235, 21%, 11%)',
      'fm-very-dark-desaturated blue': 'hsl(235, 24%, 19%)',
      'fm-light-grayish-blue': 'hsl(234, 39%, 85%)',
      'fm-light-grayish-blue (hover)': 'hsl(236, 33%, 92%)',
      'fm-dark-grayish-blue': 'hsl(234, 11%, 52%)',
      'fm-very-dark-grayish blue': 'hsl(233, 14%, 35%)',
      'fm-very-dark-grayish blue': 'hsl(237, 14%, 26%)'
    },
    extend: {},
  },
  plugins: [],
}