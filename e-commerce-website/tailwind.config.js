/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   // purge: ["./src/**/*.{html,js,jsx}"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'],
//         publicsans: ['"Public Sans"', 'sans-serif'],
//       },
//       maxWidth: {
//         'main': '1320px',
//       }
//     },
//   },
//   plugins: [
//     import('@tailwindcss/line-clamp'),
//     import('tailwind-scrollbar'),
//   ],
// }


/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'
import scrollbar from 'tailwind-scrollbar'

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
    lineClamp,
    scrollbar,
  ],
}