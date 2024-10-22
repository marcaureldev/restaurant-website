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
        satisfy: ['Satisfy'],
      },
      colors: {
        'header-color': '#130F40',
        'green-color': '#27AE60',
        'gray-color': '#666666',
        'gray-second': '#F7F7F7',
        'stars-color': '#ffd700',
        'cheese-color': '#130f40',
        'burger-color': '#ff0000',
      },
      backgroundImage: {
        'row-banner': "url('/images/row-banner.png')",
        'offer-banner-1': "url('/images/offer-banner-1.png')",
        'offer-banner-2': "url('/images/offer-banner-2.png')",
        'offer-banner-3': "url('/images/offer-banner-3.png')",
        'blog': "url('/images/blog-1.jpg')",
      }
    },
  },
  plugins: [],
}