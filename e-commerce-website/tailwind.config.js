/** @type {import('tailwindcss').Config} */
export default {
  // purge: ["./src/**/*.{html,js,jsx}"],
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
      width: {
        'main': '1320px',
      }
    },
  },
  plugins: [],
}

