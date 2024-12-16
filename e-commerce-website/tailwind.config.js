

/** @type {import('tailwindcss').Config} */
// import lineClamp from '@tailwindcss/line-clamp'
import scrollbar from 'tailwind-scrollbar'
import scrollbarhide from 'tailwind-scrollbar-hide'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        publicsans: ['"Public Sans"', 'sans-serif'],
      },
      maxWidth: {
        'main': '1320px',
      }
    },
  },
  plugins: [
    scrollbar,
    scrollbarhide
  ],
}