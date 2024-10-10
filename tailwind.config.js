/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'smartphone': '510px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        satistfy: ['Satisfy'],
      },
      colors: {
        'header-color': '#130F40',
        'green-color': '#27AE60',
        'gray-color': '#666666',
        'gray-second': '#F7F7F7',
        'stars-color': '#ffd700',
      },
    },
  },
  plugins: [],
}